import Link from "next/link";
import React from "react";
import ArchiveCard from "./archive-card";
import { CleanTitle, formatDate, slugsToCategory } from "@/lib/format-page";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  ArrowRightLinear,
  ArrowRightUpLinear,
  HashtagSquareLineDuotone,
} from "@solar-icons/react-perf";
import { getPageHistory } from "@/lib/logbook";

export default async function RecentEntriesSection() {
  const recentPages = await getPageHistory(4);

  return (
    <section className="space-y-10 mt-12 md:mt-24 py-6">
      <header className="flex max-w-4xl mx-auto flex-row justify-between mt-2 w-full items-center px-4 md:px-0">
        <h2 className="font-instrument flex items-center gap-2.5 md:gap-3 text-4xl sm:text-5xl lg:text-6xl">
          <HashtagSquareLineDuotone color="#0066ff" className="mb-1" />
          Recent Entries
        </h2>
        <Link
          href="/logbook"
          className={cn(
            buttonVariants({ variant: "primary", size: "md" }),
            "hidden md:flex h-8 text-sm",
          )}
        >
          View All Entries
          <ArrowRightUpLinear className="size-4" />
        </Link>
      </header>

      <div className="flex flex-col">
        {recentPages.map((page) => (
          <ArchiveCard
            key={page.url}
            link={page.url}
            date={formatDate(page.createdAt)}
            category={slugsToCategory(page.slugs)}
            title={CleanTitle(page.title)}
          />
        ))}

        <Link
          href="/logbook"
          className={cn(
            buttonVariants({ variant: "primary", size: "md" }),
            "md:hidden h-8 text-sm m-4",
          )}
        >
          View All Entries
          <ArrowRightLinear className="size-4" />
        </Link>
      </div>
    </section>
  );
}
