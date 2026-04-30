import { roadmap, Roadmap } from "@/data/roadmap";

export type CompletedArticle = {
  id: number;
  done: number[] | "all";
};

type RoadmapLeaf = {
  url: string;
  subsectionId: number;
  index: number;
};

export function flattenRoadmapLeaves(): RoadmapLeaf[] {
  const leaves: RoadmapLeaf[] = [];

  for (const section of roadmap) {
    for (const subsection of section.children ?? []) {
      if (!subsection.id) continue;
      const articles = subsection.children ?? [];
      articles.forEach((article, index) => {
        if (article.url) {
          leaves.push({
            url: article.url,
            subsectionId: subsection.id!,
            index,
          });
        }
      });
    }
  }

  return leaves;
}

export async function getCompletedArticles(): Promise<CompletedArticle[]> {
  const { Redis } = await import("@upstash/redis");
  const redis = Redis.fromEnv();
  const raw = await redis.get<string>("logbook:completed");
  if (!raw) return [];
  try {
    return typeof raw === "string"
      ? JSON.parse(raw)
      : (raw as CompletedArticle[]);
  } catch {
    return [];
  }
}

function getArticles(subsection: Roadmap): Roadmap[] {
  return subsection.children ?? [];
}

function findSubsection(id: number): Roadmap | undefined {
  for (const section of roadmap) {
    const match = section.children?.find((sub) => sub.id === id);
    if (match) return match;
  }
  return undefined;
}

function getAllSubsections(): Roadmap[] {
  return roadmap.flatMap((section) => section.children ?? []);
}

export const calculate_step_progress = (
  id: number,
  completed: CompletedArticle[],
): number[] => {
  const subsection = findSubsection(id);
  if (!subsection) return [0, 0, 0];

  const articles = getArticles(subsection);
  const total = articles.length;
  const progress = completed.find((item) => item.id === id);

  if (!progress) return [0, total, 0];

  if (progress.done === "all") {
    return [total, total, 100];
  }

  const completedCount = progress.done.length;
  return [completedCount, total, Math.min((completedCount / total) * 100, 100)];
};

export const calculate_total_progress = (
  completed: CompletedArticle[],
): number[] => {
  let totalTopics = 0;
  let completedTopics = 0;

  getAllSubsections().forEach((subsection) => {
    const articles = getArticles(subsection);
    totalTopics += articles.length;

    const progress = completed.find((item) => item.id === subsection.id);
    if (!progress) return;

    if (progress.done === "all") {
      completedTopics += articles.length;
    } else {
      completedTopics += progress.done.length;
    }
  });

  return [
    completedTopics,
    totalTopics,
    totalTopics === 0
      ? 0
      : Math.min((completedTopics / totalTopics) * 100, 100),
  ];
};
