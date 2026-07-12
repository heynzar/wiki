import Link from "next/link";
import type { CommitRow } from "@/lib/logbook-utils";

function RowItem({
  title,
  url,
  tag,
  date,
  badge,
}: {
  title: string;
  url: string;
  tag?: string;
  date: Date;
  badge?: React.ReactNode;
}) {
  const day = String(date.getDate()).padStart(2, "0");

  return (
    <Link
      href={url}
      className="group bg-fd-popover hover:bg-fd-background flex h-20 sm:h-14 w-full border border-b-0 last:border-b"
    >
      <span className="flex w-14 h-20 sm:h-14 shrink-0 items-center justify-center border-r text-2xl font-instrument text-fd-muted-foreground">
        {day}
      </span>

      <div className="flex min-w-0 flex-1 flex-col justify-center px-4 sm:flex-row sm:items-center sm:px-0">
        <h4 className="truncate text-lg tracking-tighter capitalize transition-all duration-300 group-hover:translate-x-1 sm:ml-6 sm:group-hover:ml-10">
          {title}
        </h4>

        <span className="hidden sm:flex">{badge}</span>

        {tag && (
          <span className="text-xs uppercase text-primary sm:ml-auto sm:flex sm:text-wrap sm:h-14 sm:w-56 sm:items-center sm:justify-start sm:border-l sm:px-6">
            {tag}
          </span>
        )}
      </div>
    </Link>
  );
}

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="ml-3 my-auto shrink-0 rounded-full border px-1.5 py-0.5 text-[10px] text-fd-muted-foreground">
    {children}
  </span>
);

export function CommitRowItem({ row }: { row: CommitRow }) {
  return (
    <RowItem
      title={row.title}
      url={row.url}
      tag={row.tag}
      date={row.date}
      badge={row.isUpdate ? <Badge>v{row.version}</Badge> : null}
    />
  );
}
