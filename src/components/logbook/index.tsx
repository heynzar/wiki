"use client";

import { Button } from "@/components/ui/button";
import { MagnifierLinear } from "@solar-icons/react-perf";
import type { PageWithHistory } from "@/lib/logbook";
import { useLogbookFilters } from "@/hooks/use-logbook-filters";
import { YearHeatmap } from "./year-heatmap";
import { Timeline } from "./timeline";

export function LogbookClient({ pages }: { pages: PageWithHistory[] }) {
  const {
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
  } = useLogbookFilters(pages);

  return (
    <div className="space-y-10 my-12 px-6 max-w-4xl mx-auto">
      <header className="flex flex-col gap-4 w-full">
        <h2 className="font-instrument flex items-center gap-2.5 text-4xl sm:text-5xl lg:text-6xl leading-tight">
          The Art of Journey
        </h2>
        <p className="text-sm md:text-base text-fd-muted-foreground leading-relaxed">
          A living record of every page touched — commits turned into a
          cartography of curiosity.
        </p>
      </header>

      <nav className="flex flex-wrap items-center gap-2">
        <Button
          variant={tab === "all" ? "primary" : "secondary"}
          size="md"
          className="text-sm"
          onClick={() => setTab("all")}
        >
          Every Time
        </Button>
        <Button
          variant={tab === "clean" ? "primary" : "secondary"}
          size="md"
          className="text-sm"
          onClick={() => setTab("clean")}
        >
          Clean
        </Button>

        {allYears.map((y) => (
          <Button
            key={y}
            variant={activeYear === y ? "primary" : "secondary"}
            size="md"
            className="text-sm"
            onClick={() => toggleYear(y)}
          >
            {y}
          </Button>
        ))}

        <Button
          variant="secondary"
          size="md"
          className="ml-auto text-sm"
          onClick={() => setShowSearch((s) => !s)}
        >
          <MagnifierLinear className="size-4 text-fd-muted-foreground" />
          Search
        </Button>
      </nav>

      {showSearch && (
        <input
          autoFocus
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search pages…"
          className="w-full border rounded-lg px-4 py-2 bg-fd-card text-sm outline-none focus:ring-1 focus:ring-fd-primary"
        />
      )}

      <hr />

      <div className="flex flex-col gap-4">
        {heatmapYears.map((y) => (
          <YearHeatmap key={y} year={y} pages={pages} />
        ))}
      </div>

      <hr />

      <Timeline tab={tab} groups={groups} />
    </div>
  );
}
