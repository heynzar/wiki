import { source } from "@/lib/source";
import { getGithubLastEdit } from "fumadocs-core/content/github";

export type PageWithDate = {
  title: string;
  url: string;
  slugs: string[];
  lastModified: Date | null;
};

export async function getRecentPages(limit?: number): Promise<PageWithDate[]> {
  const pages = source.getPages();

  const pagesWithDates = await Promise.all(
    pages.map(async (page) => {
      const lastModified = await getGithubLastEdit({
        owner: "heynzar",
        repo: "wiki",
        path: `content/docs/${page.path}`,
        token: `Bearer ${process.env.GITHUB_TOKEN}`,
      });

      return {
        title: page.data.structuredData.headings[0].content,
        url: page.url,
        slugs: page.slugs,
        lastModified: lastModified ? new Date(lastModified) : null,
      };
    }),
  );

  const sorted = pagesWithDates
    .filter(
      (p): p is PageWithDate & { lastModified: Date } =>
        p.lastModified !== null,
    )
    .sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());

  return limit ? sorted.slice(0, limit) : sorted;
}
