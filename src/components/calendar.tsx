"use client";

import { useState } from "react";
import { buttonVariants } from "fumadocs-ui/components/ui/button";
import { UPDATES_DATA } from "@/lib/changlog";
import Link from "next/link";

const MONTHS = [
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

const YEARS = [2025];

// Build a flat list of all update dates for quick lookup
function getUpdateDates() {
  const dates = new Set<string>();

  UPDATES_DATA.forEach(({ updates }) => {
    updates.forEach(({ date }) => {
      const [day, month, year] = date.split(" ");
      const monthIndex = new Date(`${month} 1, 2000`).getMonth() + 1;
      const key = `${year}-${String(monthIndex).padStart(2, "0")}-${String(
        day
      ).padStart(2, "0")}`;
      dates.add(key);
    });
  });

  return dates;
}

const UPDATE_DATES = getUpdateDates();

function formatHash(day: number, month: number, year: number) {
  return `#${String(day).padStart(2, "0")}-${String(month).padStart(
    2,
    "0"
  )}-${year}`;
}

export default function Calendar() {
  const [year, setYear] = useState(YEARS[0]);

  return (
    <div>
      {/* Year selector */}
      <div className="flex ml-auto mt-6 w-full gap-2 items-center">
        <select
          className={buttonVariants({
            variant: "outline",
            size: "sm",
            className: "gap-2 ml-auto pr-4 cursor-pointer",
          })}
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        >
          {YEARS.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      {/* Calendar */}
      <section className="mb-10 mt-2 grid select-none grid-cols-6 border-t border-r gap-0 w-full">
        {MONTHS.map((monthName, mIdx) => {
          const month = mIdx + 1;
          const daysInMonth = new Date(year, month, 0).getDate();

          return (
            <div
              key={monthName}
              className="flex flex-col border-l border-b px-2 py-2"
            >
              <span className="text-xs mb-2 text-center opacity-80">
                {monthName}
              </span>

              <div className="grid gap-0.5 grid-cols-7 h-min">
                {Array.from({ length: daysInMonth }, (_, i) => {
                  const day = i + 1;
                  const key = `${year}-${String(month).padStart(
                    2,
                    "0"
                  )}-${String(day).padStart(2, "0")}`;
                  const isUpdateDay = UPDATE_DATES.has(key);

                  return isUpdateDay ? (
                    <Link
                      key={key}
                      href={formatHash(day, month, year)}
                      className="col-span-1 bg-green-600/80 hover:bg-green-600/50 transition-colors 
                                 text-white rounded aspect-square text-[6px] 
                                 flex items-center justify-center cursor-pointer"
                    >
                      {day}
                    </Link>
                  ) : (
                    <div
                      key={key}
                      className="col-span-1 border rounded aspect-square text-[6px] 
                                 flex items-center justify-center cursor-default"
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
