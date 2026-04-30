"use client";

import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { roadmap } from "@/data/roadmap";
import { RoadmapCard } from "./roadmap-card";
import { CompletedArticle } from "@/lib/roadmap";

type StatusFilter = "All" | "Done" | "In progress" | "Not started";

const STATUS_FILTERS: StatusFilter[] = ["All", "Done", "In progress"];

function getStepStatus(
  id: number,
  completed: CompletedArticle[],
): Exclude<StatusFilter, "All"> {
  const entry = completed.find((a) => a.id === id);
  if (!entry) return "Not started";
  if (entry.done === "all") return "Done";
  return "In progress";
}

interface JourneyClientProps {
  progress: number;
  completed: CompletedArticle[];
}

export function JourneyClient({ progress, completed }: JourneyClientProps) {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");

  const flatSteps = useMemo(
    () =>
      roadmap.flatMap((section) =>
        (section.children ?? []).map((sub) => ({
          ...sub,
          url: `docs/${section.url}/${sub.url}`,
          sectionName: section.name,
          children: (sub.children ?? []).map((article) => ({
            ...article,
            url: `docs/${section.url}/${sub.url}/${article.url}`,
          })),
        })),
      ),
    [],
  );

  const filtered = useMemo(
    () =>
      flatSteps.filter(
        (step) =>
          statusFilter === "All" ||
          getStepStatus(step.id!, completed) === statusFilter,
      ),
    [statusFilter, flatSteps, completed],
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
          <Button
            key={"Not started"}
            variant={statusFilter === "Not started" ? "primary" : "secondary"}
            size="md"
            className="text-sm hidden md:flex"
            onClick={() => setStatusFilter("Not started")}
          >
            Not started
          </Button>
        </div>

        <Button
          variant="secondary"
          size="md"
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

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {filtered.map(
          ({ id, url, sectionName, name, description, icon, children }) => (
            <RoadmapCard
              key={id}
              id={id}
              url={url}
              name={name}
              description={description}
              icon={icon}
              items={children}
              sectionName={sectionName}
              completed={completed}
            />
          ),
        )}
      </div>
    </>
  );
}
