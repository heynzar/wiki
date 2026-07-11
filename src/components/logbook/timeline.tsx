import { MonthGroup } from "./month-group";
import { CommitRowItem, CleanRowItem } from "./row-item";
import type { CommitRow, CleanRow, Tab } from "@/lib/logbook-utils";

type Group<T> = { month: string; year: number; rows: T[] };

export function Timeline({
  tab,
  groups,
}: {
  tab: Tab;
  groups: Group<CommitRow>[] | Group<CleanRow>[];
}) {
  if (groups.length === 0) {
    return (
      <p className="text-fd-muted-foreground text-sm">No entries found.</p>
    );
  }

  return (
    <>
      {tab === "all"
        ? (groups as Group<CommitRow>[]).map(({ month, year, rows }, i) => (
            <MonthGroup key={`${year}-${month}-${i}`} month={month} year={year}>
              {rows.map((row, j) => (
                <CommitRowItem key={j} row={row} />
              ))}
            </MonthGroup>
          ))
        : (groups as Group<CleanRow>[]).map(({ month, year, rows }, i) => (
            <MonthGroup key={`${year}-${month}-${i}`} month={month} year={year}>
              {rows.map((row, j) => (
                <CleanRowItem key={j} row={row} />
              ))}
            </MonthGroup>
          ))}
    </>
  );
}
