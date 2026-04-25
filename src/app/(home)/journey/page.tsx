import React from "react";
import { calculate_total_progress } from "@/data/roadmap";
import { JourneyClient } from "@/components/journey";

const [completed_topics, total_topics, total_progress] =
  calculate_total_progress();
const progress = Math.round(total_progress);

export default function Page() {
  return (
    <section className="space-y-10 my-12 px-6 max-w-4xl mx-auto">
      <header className="flex max-w-4xl mx-auto flex-col gap-4 w-full">
        <h2 className="font-instrument flex items-center gap-2.5 text-4xl sm:text-5xl lg:text-6xl leading-tight">
          The Full Journey
        </h2>

        <p className="text-sm md:text-base text-fd-muted-foreground leading-relaxed">
          Track and explore the full roadmap, see what's already covered, what's
          actively being worked on, and what's coming. A clear vision of where
          we've been and where we're going.{" "}
          <span className="bg-fd-secondary px-2 py-0.5 rounded">
            {completed_topics} of {total_topics} topics
          </span>{" "}
          completed. Click any card to explore more.
        </p>
      </header>

      <JourneyClient progress={progress} />
    </section>
  );
}
