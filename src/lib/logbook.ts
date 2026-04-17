import { Redis } from "@upstash/redis";

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
  return {
    title: record.title,
    url: record.url,
    slugs,
    tag: slugsToTag(slugs),
    createdAt: new Date(record.createdAt),
    allDates: record.allDates.map((d) => new Date(d)),
    deletedAt: record.deletedAt ? new Date(record.deletedAt) : null,
    isDeleted: !!record.deletedAt,
  };
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
    .filter((r): r is PageRecord => !!r)
    .map(hydrate)
    .filter((p) => !p.isDeleted); // hide deleted by default
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

  return results.filter((r): r is PageRecord => !!r).map(hydrate);
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
