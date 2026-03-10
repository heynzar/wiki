import Image from "next/image";
import Link from "next/link";
import { ArrowRightLinear } from "@solar-icons/react-perf";
import { LucideIcon } from "lucide-react";

type PathCardProps = {
  tag: string;
  title: string;
  desc: string;
  icon: LucideIcon | string;
  topics: number;
  href: string;
};

export default function PathCard({
  tag,
  title,
  desc,
  icon: Icon,
  topics,
  href,
}: PathCardProps) {
  return (
    <Link
      href={href}
      className="border group hover:border-primary/40 transition-colors bg-white dark:bg-fd-background p-5 space-y-4"
    >
      <span className="uppercase text-xs text-primary">{tag}</span>

      <h3 className="text-4xl mt-3 font-instrument">{title}</h3>

      <p className="text-sm text-fd-muted-foreground">{desc}</p>

      <div className="pt-6 md:block bg-fd-popover hidden border border-b-0 relative overflow-hidden pr-6 -mb-0">
        {typeof Icon !== "string" ? (
          <div className="relative -translate-x-4 flex items-center justify-center translate-y-6 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform">
            <Image
              src="/folder_.png"
              className="w-full drop-shadow-md"
              alt={title}
              width={100}
              height={200}
            />

            <Icon
              strokeWidth={1.5}
              className="size-20 text-white/90 absolute mr-4 z-20 "
            />
          </div>
        ) : (
          <div className="relative -translate-x-4 flex items-center justify-center translate-y-6 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform">
            <Image
              src={Icon}
              className="w-full drop-shadow-md"
              alt={title}
              width={100}
              height={200}
            />
          </div>
        )}
      </div>

      <div className="block md:hidden bg-fd-popover overflow-hidden aspect-square w-full p-8 rounded-lg border mb-5">
        {typeof Icon !== "string" ? (
          <div className="flex items-center justify-center">
            <Image
              src="/folder_.png"
              className="w-full drop-shadow-md"
              alt={title}
              width={100}
              height={200}
            />

            <Icon
              strokeWidth={1.5}
              className="size-10 min-[300px]:size-20 text-white/90 absolute mr-4 z-20"
            />
          </div>
        ) : (
          <div className=" flex items-center justify-center">
            <Image
              src={Icon}
              className="w-full drop-shadow-md"
              alt={title}
              width={100}
              height={200}
            />
          </div>
        )}
      </div>

      <hr className="hidden md:block" />

      <div className="flex justify-between w-full text-fd-muted-foreground items-center">
        <span className="text-xs">+{topics} TOPICS</span>
        <ArrowRightLinear className="size-4 group-hover:text-primary" />
      </div>
    </Link>
  );
}
