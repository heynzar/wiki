import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

type ClinkProps = {
  label: string;
  href: string;
  img?: boolean;
  className?: string;
};

export default function Clink({
  className,
  label,
  href,
  img = false,
}: ClinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({ variant: "outline" }),
        "text-base",
        className,
      )}
      aria-label={`visit ${label}`}
    >
      {img ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          height={25}
          width={25}
          src={`https://a.favicon.im/${href}`}
          className="size-4 dark:border rounded-full"
          alt=""
          loading="lazy"
          aria-hidden="true"
        />
      ) : (
        <Image
          height={25}
          width={25}
          src="/favicon.ico"
          className="size-4 rounded-full"
          alt=""
          aria-hidden="true"
        />
      )}
      <span>{label}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 shrink-0 text-fd-muted-foreground"
      />
    </a>
  );
}
