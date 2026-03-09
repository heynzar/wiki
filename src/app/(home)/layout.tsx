import { HomeLayout } from "fumadocs-ui/layouts/home";
import CustomNavbar from "@/components/custom-nav-bar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s ✦ WIKI NZAR DEV",
    default: "NZAR WIKI ✦ THE ENGINEER'S NOTEBOOK",
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout
      nav={{
        component: <CustomNavbar />,
      }}
    >
      {children}
    </HomeLayout>
  );
}
