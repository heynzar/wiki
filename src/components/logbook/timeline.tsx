import { MonthGroup } from "./month-group";
import { CommitRowItem } from "./row-item";
import type { CommitRow } from "@/lib/logbook-utils";

type Group<T> = { month: string; year: number; rows: T[] };

export function Timeline({ groups }: { groups: Group<CommitRow>[] }) {
  if (groups.length === 0) {
    return (
      <p className="text-fd-muted-foreground text-sm">No entries found.</p>
    );
  }

  return (
    <>
      {groups.map(({ month, year, rows }, i) => (
        <MonthGroup key={`${year}-${month}-${i}`} month={month} year={year}>
          {rows.map((row, j) => (
            <CommitRowItem key={j} row={row} />
          ))}
        </MonthGroup>
      ))}
    </>
  );
}
