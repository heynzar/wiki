import { useMemo, useState } from "react";
import type { PageWithHistory } from "@/lib/logbook";
import {
  buildCommitRows,
  groupRowsByMonthYear,
  type CommitRow,
} from "@/lib/logbook-utils";

type Group<T> = { month: string; year: number; rows: T[] };

export function useLogbookFilters(pages: PageWithHistory[]) {
  const [activeYear, setActiveYear] = useState<number | "all">("all");
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const allYears = useMemo(() => {
    const ys = new Set<number>();
    for (const p of pages) ys.add(p.createdAt.getFullYear());
    return Array.from(ys).sort((a, b) => b - a);
  }, [pages]);

  const yearFiltered = useMemo(
    () =>
      activeYear === "all"
        ? pages
        : pages.filter((p) => p.createdAt.getFullYear() === activeYear),
    [pages, activeYear],
  );

  const searchFiltered = useMemo(() => {
    if (!search.trim()) return yearFiltered;
    const q = search.toLowerCase();
    return yearFiltered.filter((p) => p.title.toLowerCase().includes(q));
  }, [yearFiltered, search]);

  const commitRows = useMemo(
    () => buildCommitRows(searchFiltered),
    [searchFiltered],
  );

  const groupsByYear = useMemo(() => {
    const byYear = new Map<number, CommitRow[]>();
    for (const row of commitRows) {
      const y = row.date.getFullYear();
      if (!byYear.has(y)) byYear.set(y, []);
      byYear.get(y)!.push(row);
    }

    const result = new Map<number, Group<CommitRow>[]>();
    for (const [y, rows] of byYear) {
      result.set(
        y,
        groupRowsByMonthYear(rows, (r) => r.date),
      );
    }
    return result;
  }, [commitRows]);

  const heatmapYears = activeYear === "all" ? allYears : [activeYear];

  function toggleYear(y: number) {
    setActiveYear((prev) => (prev === y ? "all" : y));
  }

  function showAllYears() {
    setActiveYear("all");
  }

  return {
    activeYear,
    toggleYear,
    showAllYears,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    allYears,
    heatmapYears,
    groupsByYear,
  };
}
