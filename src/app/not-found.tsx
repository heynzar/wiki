import { buttonVariants } from "fumadocs-ui/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import Logo from "@/components/logo";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
};

export default function NotFound() {
  return (
    <div className="relative flex items-center justify-center min-h-screen w-full px-4 py-10">
      <Logo className="absolute top-5 left-5" />

      <div className="w-full max-w-md space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-primary text-7xl md:text-8xl font-medium tracking-tighter transition-transform">
            404
          </h1>
          <h2 className="text-2xl  sm:text-3xl md:text-4xl tracking-tighter transition-transform">
            Page not found
          </h2>
        </div>

        <p className="px-4 text-fd-muted-foreground text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
          Sorry! This page hasn&apos;t been written yet or may have moved. Try
          the Docs home, search, or open an issue!
        </p>

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
