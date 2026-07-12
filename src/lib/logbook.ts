import { Redis } from "@upstash/redis";
import { flattenRoadmapLeaves, type CompletedArticle } from "@/lib/roadmap";

export type PageRecord = {
  title: string;
  url: string;
  createdAt: string;
  allDates: string[];
  deletedAt?: string | null;
};

export type PageWithHistory = {
  title: string;
  url: string;
  slugs: string[];
  tag?: string;
  createdAt: Date;
  allDates: Date[];
  deletedAt?: Date | null;
  isDeleted: boolean;
};

const redis = Redis.fromEnv();

export const PAGE_KEY = (slug: string) => `logbook:page:${slug}`;
export const INDEX_KEY = "logbook:index";

function urlToSlugs(url: string): string[] {
  return url
    .replace(/^\/docs\//, "")
    .split("/")
    .filter(Boolean);
}

function slugLabel(s: string) {
  return s
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function slugsToTag(slugs: string[]): string | undefined {
  const [cat, sub] = slugs;
  if (!cat) return undefined;
  return sub ? `${slugLabel(cat)} // ${slugLabel(sub)}` : slugLabel(cat);
}
function hydrate(record: PageRecord): PageWithHistory {
  const slugs = urlToSlugs(record.url);
  const isIndexPage = record.title.trim().toLowerCase() === "index";

  const title = isIndexPage ? "Explore Page" : record.title;
  const tag = isIndexPage ? "docs // Index" : slugsToTag(slugs);

  return {
    title,
    url: record.url,
    slugs,
    tag,
    createdAt: new Date(record.createdAt),
    allDates: record.allDates.map((d) => new Date(d)),
    deletedAt: record.deletedAt ? new Date(record.deletedAt) : null,
    isDeleted: !!record.deletedAt,
  };
}

function isMetaFile(url: string): boolean {
  return url.endsWith("/meta.json") || url.endsWith("meta.json");
}

export async function getPageHistory(
  limit?: number,
): Promise<PageWithHistory[]> {
  const allSlugs = await redis.zrange(INDEX_KEY, "+inf", "-inf", {
    byScore: true,
    rev: true,
  });

  if (!allSlugs.length) return [];

  const slugs = limit
    ? (allSlugs as string[]).slice(0, limit)
    : (allSlugs as string[]);

  const pipeline = redis.pipeline();
  for (const slug of slugs) pipeline.get(PAGE_KEY(slug));
  const results = await pipeline.exec();

  return results
    .filter((r): r is PageRecord => !!r && !isMetaFile((r as PageRecord).url))
    .map(hydrate)
    .filter((p) => !p.isDeleted);
}

export async function getFullPageHistory(
  limit?: number,
): Promise<PageWithHistory[]> {
  const allSlugs = await redis.zrange(INDEX_KEY, "+inf", "-inf", {
    byScore: true,
    rev: true,
  });

  if (!allSlugs.length) return [];

  const slugs = limit
    ? (allSlugs as string[]).slice(0, limit)
    : (allSlugs as string[]);

  const pipeline = redis.pipeline();
  for (const slug of slugs) pipeline.get(PAGE_KEY(slug));
  const results = await pipeline.exec();

  return results
    .filter((r): r is PageRecord => !!r && !isMetaFile((r as PageRecord).url))
    .map(hydrate);
}

export async function upsertPage(slug: string, record: PageRecord) {
  const score = new Date(record.createdAt).getTime();
  const pipeline = redis.pipeline();
  pipeline.set(PAGE_KEY(slug), JSON.stringify(record));
  pipeline.zadd(INDEX_KEY, { score, member: slug });
  await pipeline.exec();
}

export async function markPageDeleted(slug: string) {
  const raw = await redis.get<PageRecord>(PAGE_KEY(slug));
  if (!raw) return;

  const updated: PageRecord = { ...raw, deletedAt: new Date().toISOString() };
  await redis.set(PAGE_KEY(slug), JSON.stringify(updated));
}

export async function fetchFileCommitDates(
  owner: string,
  repo: string,
  path: string,
  token: string,
): Promise<Date[]> {
  const url = `https://api.github.com/repos/${owner}/${repo}/commits?path=${encodeURIComponent(path)}&per_page=100`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!res.ok) return [];

  const commits: Array<{ commit: { author: { date: string } } }> =
    await res.json();
  return commits
    .map((c) => new Date(c.commit.author.date))
    .filter((d) => !isNaN(d.getTime()));
}

export async function deriveAndStoreCompleted(): Promise<void> {
  const leaves = flattenRoadmapLeaves();
  const pages = await getPageHistory();

  // Build a lookup: leaf url → { subsectionId, index }
  const leafMap = new Map(
    leaves.map((l) => [
      l.url,
      { subsectionId: l.subsectionId, index: l.index },
    ]),
  );

  // Group completed indices by subsectionId
  const grouped = new Map<number, Set<number>>();

  for (const page of pages) {
    // page.url is like "/docs/foundation/how-computing-works/article-slug"
    // leaf.url is like "article-slug"
    const leafUrl = page.url.split("/").filter(Boolean).pop() ?? "";
    const match = leafMap.get(leafUrl);
    if (!match) continue;

    const existing = grouped.get(match.subsectionId) ?? new Set();
    existing.add(match.index);
    grouped.set(match.subsectionId, existing);
  }

  // Get total articles per subsection to detect "all" case
  const { roadmap } = await import("@/data/roadmap");
  const subsectionTotals = new Map<number, number>();
  for (const section of roadmap) {
    for (const subsection of section.children ?? []) {
      if (subsection.id) {
        subsectionTotals.set(subsection.id, subsection.children?.length ?? 0);
      }
    }
  }

  // Build the final CompletedArticle array
  const result: CompletedArticle[] = [];
  for (const [id, indices] of grouped.entries()) {
    const total = subsectionTotals.get(id) ?? 0;
    const sortedIndices = [...indices].sort((a, b) => a - b);
    result.push({
      id,
      done: sortedIndices.length === total && total > 0 ? "all" : sortedIndices,
    });
  }

  await redis.set("logbook:completed", JSON.stringify(result));
}
