import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BookIcon } from "lucide-react";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <Image
          alt="Wiki Nzar Dev Logo"
          src="/logo.svg"
          width={40}
          height={20}
          className="h-5 w-auto dark:grayscale-100 dark:invert-100"
        />
      ),
    },

    links: [
      {
        text: "Explore",
        url: "/explore",
        active: "url",
      },
      {
        text: "Philosophy",
        url: "/philosophy",
        active: "url",
      },
      {
        text: "Visuals",
        url: "/visuals",
        active: "url",
      },
    ],
  };
}
