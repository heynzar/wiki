"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";
import type { PageWithHistory } from "@/lib/logbook";
import Image from "next/image";
import {
  buildHeatmapWeeks,
  intensityClass,
  MONTH_NAMES,
} from "@/lib/logbook-utils";

const WEEKDAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];
const CELL = 10;
const GAP = 1.5;
const STEP = CELL + GAP;

export function YearHeatmap({
  year,
  pages,
}: {
  year: number;
  pages: PageWithHistory[];
}) {
  const weeks = useMemo(() => buildHeatmapWeeks(pages, year), [pages, year]);
  const max = Math.max(...weeks.flat().map((c) => c.count), 1);

  const monthLabels = useMemo(() => {
    const labels: { colIndex: number; text: string }[] = [];
    let lastMonth = -1;
    weeks.forEach((week, i) => {
      const firstInYear = week.find((c) => c.inYear);
      if (!firstInYear) return;
      const m = firstInYear.date.getMonth();
      if (m !== lastMonth) {
        labels.push({ colIndex: i, text: MONTH_NAMES[m].slice(0, 3) });
        lastMonth = m;
      }
    });
    return labels;
  }, [weeks]);

  return (
    <div className="w-full flex items-center gap-0 h-28">
      <div className="hidden md:flex -translate-x-2 w-auto select-none relative aspect-video px-10 rounded-xl h-full items-center justify-center shrink-0">
        <Image
          src="/folder_.png"
          className="w-full  h-auto brightness-105 -rotate-90 drop-shadow-md"
          alt=""
          width={100}
          height={200}
        />
        <h2 className="text-5xl mt-4 absolute z-10 text-white/90 drop-shadow-xs font-instrument">
          {year}
        </h2>
      </div>

      <div className="w-full border rounded-xl p-2 bg-fd-card relative overflow-x-auto h-full">
        <div className="flex h-full w-max min-w-full">
          {/* weekday labels */}
          <div className="flex flex-col gap-0.5 pt-[14px] shrink-0 w-0 sticky right-0 bg-fd-card z-10">
            {WEEKDAY_LABELS.map((label, i) => (
              <div
                key={i}
                className="flex items-center text-[8px] text-fd-muted-foreground"
                style={{ height: CELL }}
              >
                {label}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {/* month labels */}
            <div
              className="relative translate-x-0 md:translate-x-2 mr-2 md:mr-0 -translate-y-1 md:-translate-y-0.5"
              style={{ height: 10, width: weeks.length * STEP }}
            >
              {monthLabels.map((m) => (
                <span
                  key={m.colIndex}
                  className="absolute text-[9px] text-fd-muted-foreground"
                  style={{ left: m.colIndex * STEP }}
                >
                  {m.text}
                </span>
              ))}
            </div>

            <div
              className="flex translate-x-3 md:translate-x-5"
              style={{ gap: GAP }}
            >
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col" style={{ gap: GAP }}>
                  {week.map((cell, di) => (
                    <div
                      key={di}
                      title={
                        cell.inYear
                          ? `${cell.count} contribution${cell.count !== 1 ? "s" : ""} on ${cell.date.toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              },
                            )}`
                          : undefined
                      }
                      className={cn(
                        "rounded-[2px] border transition-colors shrink-0",
                        cell.inYear
                          ? cn(
                              "bg-fd-muted dark:bg-fd-muted-foreground/20 hover:opacity-80",
                              intensityClass(cell.count, max),
                            )
                          : "opacity-0 pointer-events-none",
                      )}
                      style={{ width: CELL, height: CELL }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
