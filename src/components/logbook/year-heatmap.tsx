"use client";

import { cn } from "@/lib/utils";
import type { PageWithHistory } from "@/lib/logbook";
import Image from "next/image";
import { buildHeatmapDays, intensityClass } from "@/lib/logbook-utils";

export function YearHeatmap({
  year,
  pages,
}: {
  year: number;
  pages: PageWithHistory[];
}) {
  const months = buildHeatmapDays(pages, year);
  const max = Math.max(...months.flat().map((d) => d.count), 1);
  const total = pages.filter((p) => p.createdAt.getFullYear() === year).length;

  return (
    <div className="w-full flex items-center gap-2 h-28">
      <div className="w-auto select-none relative aspect-video px-10 rounded-xl h-full flex items-center justify-center shrink-0">
        <Image
          src="/folder_.png"
          className="w-full h-auto brightness-105 -rotate-90 drop-shadow-md"
          alt=""
          width={100}
          height={200}
        />
        <h2 className="text-5xl mt-4 absolute z-10 text-white/90 drop-shadow-xs font-instrument">
          {year}
        </h2>
      </div>

      <div className="size-full border rounded-xl grid grid-cols-12 p-1 bg-fd-card relative overflow-hidden">
        {total > 0 && (
          <span className="absolute bottom-1 right-2 text-[10px] text-fd-muted-foreground">
            {total} page{total !== 1 ? "s" : ""}
          </span>
        )}
        {months.map((days, monthIdx) => (
          <div
            key={monthIdx}
            className="flex flex-wrap content-start gap-0.5 size-full"
          >
            {days.map(({ day, date, count }) => (
              <div
                key={day}
                title={`${count} contribution${count !== 1 ? "s" : ""} on ${date.toLocaleDateString(
                  "en-US",
                  { month: "short", day: "numeric", year: "numeric" },
                )}`}
                className={cn(
                  "aspect-square size-[11px] rounded border dark:border-none bg-fd-muted transition-colors hover:opacity-80",
                  intensityClass(count, max),
                )}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
