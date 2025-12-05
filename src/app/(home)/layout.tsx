import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | wiki.nzar.dev",
    default: "Wiki Nzar Dev",
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        {
          text: "Explore",
          url: "/docs",
          active: "url",
        },
        {
          text: "Journey",
          url: "/journey",
          active: "url",
        },
        {
          text: "Visuals",
          url: "/visuals",
          active: "url",
        },
      ]}
    >
      <div className="my-10">{children}</div>
    </HomeLayout>
  );
}
