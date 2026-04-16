import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t mt-auto bg-white dark:bg-fd-background">
      <div className="max-w-4xl mx-auto px-4 py-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-fd-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()} &#10022; V1.1.2 &#10022; Built with the
          tawfiq of Allah.
        </p>

        <a
          href="https://github.com/heynzar"
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "hover:text-primary",
          )}
        >
          <Image
            alt="github icon"
            src="/github.svg"
            width={16}
            height={16}
            className="size-4 dark:invert"
          />
          <span className="text-sm">GitHub</span>
        </a>
      </div>
    </footer>
  );
}
