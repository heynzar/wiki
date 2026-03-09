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

const paths = [
  {
    icon: Binary,
    topics: 42,
    href: "/docs/fundamentals",
    tag: "01 ✦ Foundation",
    title: "Fundamentals",
    desc: "Learn the basics of Computer Science: algorithms, networking, and core principles.",
  },
  {
    icon: "/web-folder.png",
    topics: 38,
    href: "/docs/web-development",
    tag: "02 ✦ Frontend & Backend",
    title: "Web Development",
    desc: "Learn how modern websites are built. From HTML & CSS to full-stack frameworks.",
  },
  {
    icon: CodeXml,
    topics: 29,
    href: "/docs/programming-languages",
    tag: "03 ✦ Languages",
    title: "Prog Languages",
    desc: "Learn core concepts through popular languages like Python, Java, and TypeScript.",
  },
];

export default function LearningPathsSection() {
  return (
    <section className="bg-fd-popover mt-12 md:mt-24 py-6 md:py-8">
      <div className="space-y-8 md:space-y-10 max-w-4xl mx-auto px-4 md:px-0">
        <header className="flex gap-2 flex-row justify-between items-center w-full">
          <h2 className="font-instrument flex items-center gap-2.5  text-4xl sm:text-5xl lg:text-6xl leading-tight">
            <CompassSquareLineDuotone color="#0066ff" className="mb-1" />
            The Learning Paths
          </h2>
          <Link
            href="/explore"
            className={cn(
              buttonVariants({ variant: "primary", size: "md" }),
              "hidden md:flex h-8 text-sm",
            )}
          >
            Explore More
            <ArrowRightUpLinear className="size-4" />
          </Link>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 md:gap-6">
          {paths.map((path) => (
            <PathCard key={path.href} {...path} />
          ))}

          <div />
          <Link
            href="/explore"
            className={cn(
              buttonVariants({ variant: "primary", size: "md" }),
              "md:hidden h-8 -mt-4 text-sm",
            )}
          >
            Explore More
            <ArrowRightLinear className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
