import { Redis } from "@upstash/redis";
import { source } from "@/lib/source";

export type PageWithHistory = {
  title: string;
  url: string;
  slugs: string[];
  tag?: string;
  createdAt: Date;
  allDates: Date[];
};

const redis = Redis.fromEnv();

export const PAGE_KEY = (slug: string) => `logbook:page:${slug}`;
export const INDEX_KEY = "logbook:index";

export async function getPageHistory(): Promise<PageWithHistory[]> {
  const slugs = await redis.zrange(INDEX_KEY, "+inf", "-inf", {
    byScore: true,
    rev: true,
  });

  if (!slugs.length) return [];

  const pipeline = redis.pipeline();
  for (const slug of slugs) {
    pipeline.get(PAGE_KEY(slug as string));
  }
  const results = await pipeline.exec();

  const pages: PageWithHistory[] = [];

  for (const raw of results) {
    if (!raw) continue;

    const record = raw as {
      title: string;
      url: string;
      slugs: string[];
      tag?: string;
      createdAt: string;
      allDates: string[];
    };

    pages.push({
      title: record.title,
      url: record.url,
      slugs: record.slugs,
      tag: record.tag,
      createdAt: new Date(record.createdAt),
      allDates: record.allDates.map((d) => new Date(d)),
    });
  }

  return pages;
}

export type PageRecord = {
  title: string;
  url: string;
  slugs: string[];
  tag?: string;
  createdAt: string;
  allDates: string[];
};

export async function upsertPage(slug: string, record: PageRecord) {
  const createdAtTs = new Date(record.createdAt).getTime();

  const pipeline = redis.pipeline();

  pipeline.set(PAGE_KEY(slug), JSON.stringify(record));

  pipeline.zadd(INDEX_KEY, { score: createdAtTs, member: slug });

  await pipeline.exec();
}

export async function seedAllPages() {
  const pages = source.getPages();
  const token = process.env.GITHUB_TOKEN ?? "";

  console.log(`Seeding ${pages.length} pages…`);

  for (const page of pages) {
    const dates = await fetchFileCommitDates(
      "heynzar",
      "wiki",
      `content/docs/${page.path}`,
      token,
    );

    if (!dates.length) {
      console.warn(`  skip (no commits): ${page.path}`);
      continue;
    }

    const slug = page.slugs.join("/");
    const [cat, sub] = page.slugs;
    const tag =
      cat && sub
        ? `${slugLabel(cat)} // ${slugLabel(sub)}`
        : cat
          ? slugLabel(cat)
          : undefined;

    const record: PageRecord = {
      title: page.data.structuredData.headings[0]?.content ?? page.data.title,
      url: page.url,
      slugs: page.slugs,
      tag,
      createdAt: dates[dates.length - 1].toISOString(),
      allDates: dates.map((d) => d.toISOString()),
    };

    await upsertPage(slug, record);
    console.log(`  ✓ ${slug}`);
  }

  console.log("Seed complete.");
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

function slugLabel(s: string) {
  return s
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
