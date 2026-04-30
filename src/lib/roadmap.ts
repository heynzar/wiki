import { roadmap, Roadmap } from "@/data/roadmap";

export type __CompltedArticle__ = {
  id: number;
  done: string;
};

export const complted_article: __CompltedArticle__[] = [
  { id: 1, done: "all" },
  { id: 2, done: "0..2" },
];

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

export const calculate_step_progress = (id: number): number[] => {
  const subsection = findSubsection(id);
  if (!subsection) return [0, 0, 0];

  const articles = getArticles(subsection);
  const total = articles.length;
  const progress = complted_article.find((item) => item.id === id);

  if (!progress) return [0, total, 0];

  if (progress.done === "all") {
    return [total, total, 100];
  }

  const [start, end] = progress.done.split("..").map(Number);
  const completedCount = end - start + 1;
  return [completedCount, total, Math.min((completedCount / total) * 100, 100)];
};

export const calculate_total_progress = (): number[] => {
  let totalTopics = 0;
  let completedTopics = 0;

  getAllSubsections().forEach((subsection) => {
    const articles = getArticles(subsection);
    const stepTotal = articles.length;
    totalTopics += stepTotal;

    const progress = complted_article.find((item) => item.id === subsection.id);
    if (!progress) return;

    if (progress.done === "all") {
      completedTopics += stepTotal;
    } else {
      const [start, end] = progress.done.split("..").map(Number);
      completedTopics += end - start + 1;
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
