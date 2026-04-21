"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  calculate_step_progress,
  complted_article,
  webDevPhases,
} from "@/data/roadmap";
import { useState } from "react";
import { buttonVariants } from "./ui/button";

interface Topic {
  title: string;
  link: string;
}

export interface RoadmapCardProps {
  id: number;
  index: number;
  title: string;
  link?: string;
  description: string;
  icon: string;
  what_we_gonna_cover: Topic[];
}

function getPhaseTag(id: number): string {
  const phase = webDevPhases.find(
    ({ steps }) => steps[0] <= id && steps[1] >= id,
  );
  return phase?.title ?? "";
}

function isTopicCompleted(id: number, topicIndex: number): boolean {
  const step = complted_article.find((item) => item.id === id);
  if (!step) return false;
  if (step.done === "all") return true;

  const parts = step.done.split("..");
  if (parts.length !== 2) return false;

  const start = Number(parts[0]);
  const end = Number(parts[1]);
  if (isNaN(start) || isNaN(end)) return false;

  return topicIndex >= start && topicIndex <= end;
}

function formatIndex(index: number): string {
  return index < 9 ? `0${index + 1}` : `${index + 1}`;
}

interface TopicItemProps {
  topic: Topic;
  completed: boolean;
}

function TopicItem({ topic, completed }: TopicItemProps) {
  const indicator = (
    <div
      className={cn(
        "size-3.5 aspect-square border flex items-center justify-center rounded shrink-0",
        completed
          ? "bg-primary border-primary [&_svg]:opacity-100"
          : "border-black/20 dark:border-white/20",
      )}
    >
      <Check className="size-3 text-fd-background opacity-0" strokeWidth={3} />
    </div>
  );

  const label = <span className="truncate">{topic.title}</span>;

  const sharedClass = "px-1 flex items-center gap-1.5 text-sm py-0.5 rounded";

  if (completed) {
    return (
      <Link
        href={topic.link}
        className={cn(sharedClass, "hover:bg-fd-popover")}
      >
        {indicator}
        {label}
      </Link>
    );
  }

  return (
    <div className={cn(sharedClass, "cursor-default select-none")}>
      {indicator}
      <span className="truncate opacity-80">{topic.title}</span>
    </div>
  );
}

export function RoadmapCard({
  id,
  index,
  link,
  title,
  description,
  icon,
  what_we_gonna_cover,
}: RoadmapCardProps) {
  const [, , progress] = calculate_step_progress(id);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{ order: id }}
      className="flex break-inside-avoid relative hover:border-primary/60 bg-white dark:bg-fd-popover flex-col border"
    >
      <div
        role="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex flex-col hover:bg-fd-popover transition-colors cursor-pointer gap-1 p-6"
      >
        <div className="flex items-center justify-between">
          <span className="uppercase font-medium text-xs text-primary">
            {`${formatIndex(index)} ✦ (${progress}%) ✦ ${getPhaseTag(id)}`}
          </span>

          {link && (
            <Link
              href={link}
              onClick={(e) => e.stopPropagation()}
              className={cn(buttonVariants({ size: "icon" }), "size-5")}
            >
              <ArrowUpRight strokeWidth={1} />
            </Link>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Image
            alt={title}
            width={20}
            height={20}
            className="h-7 w-auto shrink-0"
            src={icon}
          />
          <h2 className="font-instrument truncate text-3xl leading-tight">
            {title}
          </h2>
        </div>

        <p className="text-fd-muted-foreground leading-4 text-sm tracking-tight">
          {description}
        </p>
      </div>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="p-4 border-t flex flex-col gap-0 w-full">
            {what_we_gonna_cover.map((topic, idx) => (
              <TopicItem
                key={topic.title}
                topic={topic}
                completed={isTopicCompleted(id, idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
