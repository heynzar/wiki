export function MonthGroup({
  month,
  year,
  children,
}: {
  month: string;
  year: number;
  children: React.ReactNode;
}) {
  return (
    <main className="flex mb-8 w-full flex-col">
      <header className="pb-2">
        <h2 className="capitalize text-2xl font-instrument tracking-tight text-primary">
          {"✦ "}
          {month} {year}
        </h2>
      </header>
      <section className="flex flex-col w-full">{children}</section>
    </main>
  );
}
