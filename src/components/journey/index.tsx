"use client";

import React, { useState, useMemo } from "react";
import { webDevRoadmap, complted_article } from "@/data/roadmap";
import { RoadmapCard } from "@/components/journey/roadmap-card";
import { Button } from "@/components/ui/button";

type StatusFilter = "All" | "Done" | "In progress" | "Not started";

const STATUS_FILTERS: StatusFilter[] = [
  "All",
  "Done",
  "In progress",
  "Not started",
];

function getStepStatus(id: number): Exclude<StatusFilter, "All"> {
  const entry = complted_article.find((a) => a.id === id);
  if (!entry) return "Not started";
  if (entry.done === "all") return "Done";
  return "In progress";
}

interface JourneyClientProps {
  progress: number;
}

export function JourneyClient({ progress }: JourneyClientProps) {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");

  const filtered = useMemo(
    () =>
      webDevRoadmap.filter(
        (step) =>
          statusFilter === "All" || getStepStatus(step.id) === statusFilter,
      ),
    [statusFilter],
  );

  return (
    <>
      <nav className="flex items-center gap-2 flex-wrap">
        <div className="flex gap-2 items-center">
          {STATUS_FILTERS.map((filter) => (
            <Button
              key={filter}
              variant={statusFilter === filter ? "primary" : "secondary"}
              size="md"
              className="text-sm"
              onClick={() => setStatusFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        <Button
          variant="secondary"
          className="ml-auto gap-2 pointer-events-none hover:bg-current"
        >
          <div className="w-20 h-1.5 flex rounded bg-white dark:bg-fd-background items-center overflow-hidden">
            <div
              style={{ width: `${progress}%` }}
              className="h-1.5 bg-primary"
            />
          </div>
          {progress}%
        </Button>
      </nav>

      {filtered.length === 0 && (
        <p className="col-span-2 py-16 text-center text-fd-muted-foreground text-sm">
          No steps match these filters.
        </p>
      )}

      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4 items-start">
        {filtered.map(
          ({ id, title, description, icon, what_we_goona_cover }) => (
            <RoadmapCard
              key={id}
              id={id}
              title={title}
              description={description}
              icon={icon}
              what_we_gonna_cover={what_we_goona_cover}
            />
          ),
        )}
      </div>
    </>
  );
}
