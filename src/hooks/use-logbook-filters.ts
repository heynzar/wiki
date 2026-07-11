import { useMemo, useState } from "react";
import type { PageWithHistory } from "@/lib/logbook";
import {
  buildCommitRows,
  buildCleanRows,
  groupRowsByMonthYear,
  type Tab,
} from "@/lib/logbook-utils";

export function useLogbookFilters(pages: PageWithHistory[]) {
  const [tab, setTab] = useState<Tab>("all");
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

  const commitGroups = useMemo(
    () => groupRowsByMonthYear(buildCommitRows(searchFiltered), (r) => r.date),
    [searchFiltered],
  );
  const cleanGroups = useMemo(
    () =>
      groupRowsByMonthYear(buildCleanRows(searchFiltered), (r) => r.createdAt),
    [searchFiltered],
  );

  const heatmapYears = activeYear === "all" ? allYears : [activeYear];
  const groups = tab === "all" ? commitGroups : cleanGroups;

  function toggleYear(y: number) {
    setActiveYear((prev) => (prev === y ? "all" : y));
  }

  return {
    tab,
    setTab,
    activeYear,
    toggleYear,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    allYears,
    heatmapYears,
    groups,
  };
}
