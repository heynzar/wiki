import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
import Image from "next/image";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <Image
            alt="Wiki Nzar Dev Logo"
            src="/logo.svg"
            width={40}
            height={20}
            className="h-5 w-auto dark:grayscale-100 dark:invert-100"
          />
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
