export function MonthGroup({
  month,
  total_commits,
  year,
  children,
}: {
  month: string;
  year: number;
  total_commits: number;
  children: React.ReactNode;
}) {
  return (
    <main className="flex mb-8 w-full flex-col">
      <header className="pb-2 flex justify-between items-center">
        <h2 className="capitalize text-2xl font-instrument tracking-tight text-primary">
          {"✦ "} {month} {year}
        </h2>
        <span className="tracking-tighter text-sm text-fd-muted-foreground">
          {`[${total_commits} ${total_commits > 1 ? "Commits" : "Commit"}]`}
        </span>
      </header>
      <section className="flex flex-col w-full">{children}</section>
    </main>
  );
}
