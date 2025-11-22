import { updates_by_months } from "@/lib/changlog";

export function generateMonthlyScores(month: number, year: number) {
  const daysInMonth = new Date(year, month, 0).getDate();

  const data = Array.from({ length: daysInMonth }, (_, i) => ({
    day: i + 1,
    score: Number(Math.random().toFixed(2)), // score between 0 and 1
  }));

  return {
    month,
    year,
    data,
  };
}

export function generateYearlyScores(year: number) {
  return Array.from({ length: 12 }, (_, i) =>
    generateMonthlyScores(i + 1, year)
  );
}

export default function page() {
  return (
    <div className="content ">
      <div className="space-y-4">
        <h1>Journey</h1>
        <p>
          All the visuals from every topic in this Wiki, collected here for
          quick browsing and inspiration.
        </p>
      </div>

      <section className="mb-10 mt-6 p-0.5 rounded-md grid grid-cols-12 gap-0.5 w-full border">
        {generateYearlyScores(2025).map(({ month, data }, index) => (
          <div
            className="col-span-1 grid gap-0.5 grid-cols-4 h-min"
            key={index}
          >
            {data.map(({ day, score }) => (
              <div
                style={{ opacity: `${score >= 0.3 ? score - 0.2 : 0.1}` }}
                className={`bg-green-600 dark:bg-green-500 rounded aspect-square col-span-1 h-3`}
                key={day + index}
              />
            ))}
          </div>
        ))}
      </section>

      {updates_by_months.map(({ month, updates }, index) => (
        <main className="flex mx-auto flex-col" key={index + "h"}>
          <header className="bg-fdforeground  border-y text-sm text-fdbackground flex items-center justify-center w-full h-8">
            <span className="uppercase opacity-80 font-medium">{month}</span>
          </header>
          <section key={index} className="flex  flex-col">
            {updates.map(({ changes, date, link, icon, title }, i) => (
              <div key={i} className="flex gap-0 group">
                <span className="w-32 mt-1.5 group-first:mt-15 opacity-80 h-min uppercase text-xs font-medium  px-2 py-0.5">
                  {date}
                </span>
                <div className="flex-1 flex flex-col group-first:pt-14 relative border-l ml-4 pl-4">
                  <span className="absolute size-1.5 group-first:mt-[68px] bg-fd-muted-foreground inset-0 mt-3 rounded-full -ml-[3.5px]"></span>
                  <div className="flex items-center gap-2">
                    <img src={icon} alt="" className="size-4" />
                    <h4 className="hover:text-fd-muted-foreground cursor-pointer transition-colors">
                      {title}
                    </h4>
                  </div>
                  <ul className="mb-14 mt-4 space-y-1 ml-4">
                    {changes.map((change, x) => (
                      <li key={x} className="flex items-start gap-2">
                        <span>{"->"}</span>
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>
        </main>
      ))}
    </div>
  );
}
