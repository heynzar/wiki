import { buttonVariants } from "fumadocs-ui/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex items-center w-full h-screen">
      <Image
        alt="Wiki Nzar Dev Logo, Page Not Found 404"
        src="/logo.svg"
        width={40}
        height={20}
        className="h-5 mx-auto w-auto hidden md:block absolute top-5 left-5 dark:grayscale-100 dark:invert-100"
      />
      <div className="w-full space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-[#0000ff] dark:text-white text-8xl font-medium tracking-tighter transition-transform">
            404
          </h1>
          <h2 className="text-4xl font-light tracking-tighter transition-transform">
            Page not found
          </h2>
        </div>

        <div className="space-y-1">
          <p className="text-fd-muted-foreground text-md">
            Sorry! This page hasn't been written yet or may have moved.
          </p>
          <p className="text-fd-muted-foreground text-sm">
            Try the Docs home, search, or open an issue!
          </p>
        </div>
        <Link
          className={buttonVariants({
            color: "outline",
            size: "sm",
          })}
          href="/docs"
        >
          Return to Docs
        </Link>
      </div>
    </div>
  );
}
