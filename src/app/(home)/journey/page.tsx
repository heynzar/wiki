import Calendar from "@/components/calendar";
import { UPDATES_DATA } from "@/lib/changlog";

import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="space-y-4">
        <h1 className="text-2xl tracking-tighter md:text-4xl">Journey</h1>
        <p className="text-sm md:text-base opacity-80">
          A full history of all the improvements, updates, and changes across
          this Wiki. Organized month by month for easy tracking.
        </p>
      </div>

      <Calendar />

      {UPDATES_DATA.map(({ month, updates }, index) => (
        <main className="flex mb-8 mx-auto flex-col" key={index + "h"}>
          <header className="border text-sm flex items-center justify-center w-full h-8">
            <h2 className="uppercase !tracking-normal opacity-80 font-medium">
              {month}
            </h2>
          </header>
          <section key={index} className="flex border border-t-0 flex-col">
            {updates.map(({ changes, date, icon, title, link }, i) => {
              const [day, monthName, year] = date.split(" ");
              const monthIndex =
                new Date(`${monthName} 1, 2000`).getMonth() + 1;
              const anchorId = `${String(day).padStart(2, "0")}-${String(
                monthIndex
              ).padStart(2, "0")}-${year}`;

              return (
                <div
                  key={i}
                  id={anchorId}
                  className="flex justify-center items-center border-b last:border-b-0 gap-0 scroll-mt-20"
                >
                  <h3 className="w-32 !tracking-normal text-center opacity-80 uppercase text-xs font-medium">
                    {date.split(" ").slice(0, 2).join(" ")}
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
                        <li
                          key={x}
                          className="flex opacity-80 items-start gap-2"
                        >
                          <span>{"->"}</span>
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </section>
        </main>
      ))}
    </div>
  );
}
