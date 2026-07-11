"use client";

import { Button } from "@/components/ui/button";
import { MagnifierLinear } from "@solar-icons/react-perf";
import type { PageWithHistory } from "@/lib/logbook";
import { useLogbookFilters } from "@/hooks/use-logbook-filters";
import { YearHeatmap } from "./year-heatmap";
import { Timeline } from "./timeline";

export function LogbookClient({ pages }: { pages: PageWithHistory[] }) {
  const {
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
  } = useLogbookFilters(pages);

  const totalCommits = pages.reduce((sum, p) => sum + p.allDates.length, 0);

  return (
    <section className="space-y-10 my-12 px-6 max-w-4xl mx-auto">
      <header className="flex max-w-4xl mx-auto flex-col gap-4 w-full">
        <h2 className="font-instrument flex items-center gap-2.5 text-4xl sm:text-5xl lg:text-6xl leading-tight">
          The Story Log
        </h2>

        <p className="text-sm md:text-base text-fd-muted-foreground leading-relaxed">
          Every page has a story. This logbook keeps track of every draft, edit,
          and revision that shaped the docs over time. Instead of a formal
          changelog, it shows the full history of the work. Browse by year to
          explore the timeline, or search to find a specific page.{" "}
          <span className="bg-fd-secondary px-2 py-0.5 rounded">
            {pages.length} pages
          </span>{" "}
          and{" "}
          <span className="bg-fd-secondary px-2 py-0.5 rounded">
            {totalCommits} commits
          </span>{" "}
          logged across{" "}
          <span className="bg-fd-secondary px-2 py-0.5 rounded">
            {allYears.length} year{allYears.length !== 1 ? "s" : ""}
          </span>
          .
        </p>
      </header>

      <nav className="flex flex-wrap items-center gap-2">
        <Button
          variant={activeYear === "all" ? "primary" : "secondary"}
          size="md"
          className="text-sm"
          onClick={showAllYears}
        >
          Every Time
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

      {heatmapYears.map((y) => (
        <div key={y} className="flex flex-col gap-6">
          <hr />
          <YearHeatmap year={y} pages={pages} />
          <hr />
          <Timeline groups={groupsByYear.get(y) ?? []} />
        </div>
      ))}
    </section>
  );
}
