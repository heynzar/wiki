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

export type HeatmapCell = {
  date: Date;
  count: number;
  inYear: boolean;
};

export function buildHeatmapWeeks(
  pages: PageWithHistory[],
  year: number,
  weekStartsOn: 0 | 1 = 0, // 0 => Sunday, same as github
): HeatmapCell[][] {
  const yearStart = new Date(year, 0, 1);
  const yearEnd = new Date(year, 11, 31);

  const leadDiff = (yearStart.getDay() - weekStartsOn + 7) % 7;
  const gridStart = new Date(yearStart);
  gridStart.setDate(gridStart.getDate() - leadDiff);

  const trailDiff = (weekStartsOn + 6 - yearEnd.getDay() + 7) % 7;
  const gridEnd = new Date(yearEnd);
  gridEnd.setDate(gridEnd.getDate() + trailDiff);

  const totalDays =
    Math.round((gridEnd.getTime() - gridStart.getTime()) / 86400000) + 1;
  const totalWeeks = totalDays / 7;

  const counts = new Map<string, number>();
  for (const page of pages) {
    for (const d of page.allDates) {
      if (d.getFullYear() !== year) continue;
      const key = d.toDateString();
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }

  const weeks: HeatmapCell[][] = [];
  const cursor = new Date(gridStart);

  for (let w = 0; w < totalWeeks; w++) {
    const week: HeatmapCell[] = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(cursor);
      const inYear = date.getFullYear() === year;
      week.push({
        date,
        inYear,
        count: inYear ? (counts.get(date.toDateString()) ?? 0) : 0,
      });
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
  }

  return weeks;
}

export function intensityClass(count: number, max: number): string {
  if (count === 0) return "";
  const r = count / max;
  if (r < 0.25) return "bg-green-300 dark:bg-green-700/60 border-none";
  if (r < 0.5) return "bg-green-400 dark:bg-green-600/70 border-none";
  if (r < 0.75) return "bg-green-500 dark:bg-green-500/80 border-none";
  return "bg-green-600 dark:bg-green-400/90 border-none";
}
