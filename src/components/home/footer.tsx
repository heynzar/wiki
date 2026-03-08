import { Button } from "@/components/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t mt-auto bg-white dark:bg-fd-background">
      <div className="max-w-4xl mx-auto px-4 py-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-fd-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()} &#10022; V1.0.4 &#10022; Built with the
          tawfiq of Allah.
        </p>

        <div className="flex items-center gap-2 justify-center sm:justify-end">
          <Button asChild className="group">
            <a
              href="https://github.com/heynzar"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <Image
                alt="github icon"
                src="/github.svg"
                width={16}
                height={16}
                className="size-4 dark:invert"
              />
              <span className="text-sm text-fd-muted-foreground group-hover:text-primary transition-colors">
                GitHub
              </span>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
