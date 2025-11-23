import { updates_by_months } from "@/lib/changlog";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function generateMonthlyScores(month: number, year: number) {
  const daysInMonth = new Date(year, month, 0).getDate();

  const data = Array.from({ length: daysInMonth }, (_, i) => ({
    day: i + 1,
    score: Number(Math.random().toFixed(2)), // score between 0 and 1
  }));

  const monthNames = [
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

  return {
    month: monthNames[month - 1], // Get month name
    year,
    data,
  };
}

function generateYearlyScores(year: number) {
  return Array.from({ length: 12 }, (_, i) =>
    generateMonthlyScores(i + 1, year)
  );
}

export default function page() {
  return (
    <div className="">
      <div className="space-y-4">
        <h1 className="text-2xl tracking-tighter md:text-4xl">Journey</h1>
        <p className="text-sm md:text-base opacity-80">
          All the visuals from every topic in this Wiki, collected here for
          quick browsing and inspiration.
        </p>
      </div>

      <div className="flex mt-6 w-full gap-2 items-center">
        <button className="px-2 ml-auto text-sm flex items-center gap-2 py-1 border">
          2025
          <ChevronDown
            strokeWidth={1}
            className="size-4 text-fd-muted-foreground"
          />
        </button>
      </div>
      <section className="mb-10 mt-2 grid select-none grid-cols-6 border-t border-r gap-0 w-full">
        {generateYearlyScores(2025).map(({ data, month }, index) => (
          <div
            key={index}
            className="flex flex-col border-l border-b px-2 py-2"
          >
            <span className="text-xs mb-2 text-center opacity-80">{month}</span>
            <div className="col-span-1  grid gap-0.5 grid-cols-7 h-min">
              {data.map(({ day, score }) => (
                <div
                  // style={{ opacity: `${score >= 0.3 ? score - 0.2 : 0.1}` }}
                  className={`${
                    score >= 0.7
                      ? "bg-green-600/80 cursor-pointer hover:bg-green-600/40 transition-colors text-white"
                      : "border cursor-default"
                  } rounded aspect-square text-[6px] pt-[1px] flex items-center justify-center col-span-1 h-3`}
                  key={day + index}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {updates_by_months.map(({ month, updates }, index) => (
        <main className="flex mb-8 mx-auto flex-col" key={index + "h"}>
          <header className="border text-sm flex items-center justify-center w-full h-8">
            <h2 className="uppercase !tracking-normal opacity-80 font-medium">
              {month}
            </h2>
          </header>
          <section key={index} className="flex border border-t-0 flex-col">
            {updates.map(({ changes, date, icon, title, link }, i) => (
              <div
                key={i}
                className="flex justify-center items-center border-b last:border-b-0 gap-0"
              >
                <h3 className="w-32 !tracking-normal text-center opacity-80 uppercase text-xs font-medium">
                  {date.split(" ").splice(0, 2).join(" ")}
                </h3>
                <div className="flex-1 py-10 flex flex-col relative border-l ml-4 pl-4">
                  <div className="flex items-center gap-2">
                    <Image
                      width={20}
                      height={20}
                      alt={`${title} icon`}
                      src={icon}
                      className="size-4"
                    />
                    <Link
                      href={link}
                      className="hover:text-fd-muted-foreground transition-colors"
                    >
                      <h4 className="text-base tracking-tighter md:text-lg">
                        {title}
                      </h4>
                    </Link>
                  </div>
                  <ul className="mt-4 space-y-1 ml-4">
                    {changes.map((change, x) => (
                      <li key={x} className="flex opacity-80 items-start gap-2">
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
