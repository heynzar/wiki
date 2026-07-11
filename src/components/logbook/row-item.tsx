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
      className="border border-b-0 last:border-b group bg-fd-popover hover:bg-fd-background flex w-full h-14"
    >
      <span className="size-14 flex items-center text-fd-muted-foreground justify-center border-r text-2xl font-instrument shrink-0">
        {day}
      </span>
      <h4 className="ml-6 group-hover:ml-10 transition-all duration-300 my-auto capitalize tracking-tighter text-lg truncate">
        {title}
      </h4>
      {badge}
      {tag && (
        <span className="h-14 w-56 px-6 ml-auto flex items-center justify-end border-l text-xs uppercase text-primary shrink-0">
          {tag}
        </span>
      )}
    </Link>
  );
}

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="ml-3 my-auto shrink-0 text-[10px] border rounded-full px-1.5 py-0.5 text-fd-muted-foreground">
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
