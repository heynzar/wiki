import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
import Logo from "@/components/logo";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: <Logo />,
      }}
    >
      {children}
    </DocsLayout>
  );
}
