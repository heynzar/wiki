import type { PageWithHistory } from "@/lib/logbook";

export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export type CommitRow = {
  title: string;
  url: string;
  tag?: string;
  date: Date;
  version: number;
  isUpdate: boolean;
};

export type CleanRow = {
  title: string;
  url: string;
  tag?: string;
  createdAt: Date;
  editCount: number;
};

export type Tab = "all" | "clean";

export function buildCommitRows(pages: PageWithHistory[]): CommitRow[] {
  const rows: CommitRow[] = [];
  for (const page of pages) {
    const chronological = [...page.allDates].reverse();
    chronological.forEach((date, idx) => {
      rows.push({
        title: page.title,
        url: page.url,
        tag: page.tag,
        date,
        version: idx + 1,
        isUpdate: idx > 0,
      });
    });
  }
  return rows.sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function buildCleanRows(pages: PageWithHistory[]): CleanRow[] {
  return pages.map((p) => ({
    title: p.title,
    url: p.url,
    tag: p.tag,
    createdAt: p.createdAt,
    editCount: p.allDates.length,
  }));
}

export function groupRowsByMonthYear<T>(rows: T[], getDate: (r: T) => Date) {
  const map = new Map<string, { month: string; year: number; rows: T[] }>();
  for (const row of rows) {
    const d = getDate(row);
    const key = `${d.getFullYear()}-${d.getMonth()}`;
    if (!map.has(key)) {
      map.set(key, {
        month: MONTH_NAMES[d.getMonth()],
        year: d.getFullYear(),
        rows: [],
      });
    }
    map.get(key)!.rows.push(row);
  }
  return Array.from(map.values());
}

export function buildHeatmap(pages: PageWithHistory[], year: number): number[] {
  const counts = Array(12).fill(0);
  for (const page of pages)
    for (const d of page.allDates)
      if (d.getFullYear() === year) counts[d.getMonth()]++;
  return counts;
}

export function intensityClass(count: number, max: number): string {
  if (count === 0) return "";
  const r = count / max;
  if (r < 0.25) return "bg-green-300 dark:bg-green-700/60 border-none";
  if (r < 0.5) return "bg-green-400 dark:bg-green-600/70 border-none";
  if (r < 0.75) return "bg-green-500 dark:bg-green-500/80 border-none";
  return "bg-green-600 dark:bg-green-400/90 border-none";
}
