import Link from "next/link";
import PathCard from "./path-card";
import { Binary, CodeXml } from "lucide-react";
import { buttonVariants } from "../ui/button";
import {
  ArrowRightLinear,
  ArrowRightUpLinear,
  CompassSquareLineDuotone,
} from "@solar-icons/react-perf";
import { cn } from "@/lib/utils";
import { roadmap } from "@/data/roadmap";

const paths = [
  {
    icon: Binary,
    topics: 20,
    href: "/docs/foundation",
    tag: "01 ✦ Fundamentals",
    title: "The Foundation",
    desc: "Start strong by understanding computers, the network, and the engineer's mindset.",
  },
  {
    icon: "/web-folder.png",
    topics: 31,
    href: "/docs/web-basics",
    tag: "02 ✦ HTML & CSS",
    title: "Web Basics",
    desc: "Learn HTML and CSS, and build your first project to understand how the web works.",
  },
  {
    icon: CodeXml,
    topics: 74,
    href: "/docs/programming-languages",
    tag: "03 ✦ Languages",
    title: "Programming Core",
    desc: "Master JavaScript, TypeScript, Git, and problem solving to become a real programmer.",
  },
];

export default function LearningPathsSection() {
  return (
    <section className="bg-fd-popover mt-12 md:mt-24 py-6 md:py-8">
      <div className="space-y-8 md:space-y-10 max-w-4xl mx-auto px-4 md:px-0">
        <header className="flex gap-2 flex-row justify-between items-center w-full">
          <h2 className="font-instrument flex items-center gap-2.5 text-4xl sm:text-5xl lg:text-6xl leading-tight">
            <CompassSquareLineDuotone color="#0066ff" className="mb-1" />
            The Learning Paths
          </h2>
          <Link
            href="/docs"
            className={cn(
              buttonVariants({ variant: "primary", size: "md" }),
              "hidden md:flex h-8 text-sm",
            )}
          >
            Full Journey
            <ArrowRightUpLinear className="size-4" />
          </Link>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {paths.map((path) => (
            <PathCard key={path.href} {...path} />
          ))}

          {roadmap
            .slice(3)
            .map(
              ({ id, name, description, url, icon: Icon, children }, idx) => {
                const totalTopics =
                  children?.reduce(
                    (acc, sub) => acc + (sub.children?.length ?? 0),
                    0,
                  ) ?? 0;

                const displayId = idx + 4;

                return (
                  <Link
                    href={`/docs/${url}`}
                    key={id ?? url}
                    className="flex relative cursor-pointer group hover:border-primary/40 bg-white dark:bg-fd-background flex-col border"
                  >
                    <span className="text-fd-muted-foreground absolute opacity-10 font-instrument text-8xl right-2 top-1">
                      {displayId <= 9 ? `0${displayId}` : displayId}
                    </span>
                    <div className="flex flex-col gap-1 border-b group-hover:border-primary/40 p-4">
                      <div className="flex items-center gap-2">
                        {Icon && typeof Icon !== "string" && (
                          <Icon color="#0066ff" className="size-6" />
                        )}
                        <h2 className="font-instrument truncate text-2xl">
                          {name}
                        </h2>
                      </div>
                      <p className="text-sm text-fd-muted-foreground">
                        {description}
                      </p>
                    </div>

                    <div className="p-4 flex justify-between items-center">
                      <span className="uppercase text-fd-muted-foreground text-xs">
                        +{totalTopics} Topics
                      </span>
                      <ArrowRightLinear className="size-4 text-fd-muted-foreground group-hover:text-primary" />
                    </div>
                  </Link>
                );
              },
            )}

          <div />
          <Link
            href="/docs"
            className={cn(
              buttonVariants({ variant: "primary", size: "md" }),
              "md:hidden h-8 -mt-4 text-sm",
            )}
          >
            Full Journey
            <ArrowRightLinear className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
