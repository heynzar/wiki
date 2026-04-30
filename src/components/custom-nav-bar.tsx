"use client";
import Image from "next/image";
import {
  CompassLinear,
  LibraryLinear,
  CheckSquareLinear,
  MagnifierLinear,
  AltArrowUpLinear,
} from "@solar-icons/react-perf";
import { Button, buttonVariants } from "./ui/button";
import { useSearchContext } from "fumadocs-ui/provider";
import { ThemeToggle } from "fumadocs-ui/components/layout/theme-toggle";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navlinks = [
  {
    label: "Explore",
    link: "/docs",
    icon: CompassLinear,
  },
  {
    label: "Journey",
    link: "/journey",
    icon: CheckSquareLinear,
  },
  {
    label: "Visuals",
    link: "/visuals",
    icon: LibraryLinear,
  },
];

export default function CustomNavbar() {
  const { setOpenSearch } = useSearchContext();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="h-14 sticky -mt-14 top-0 inset-0 z-40 flex items-center justify-between w-full px-4 sm:px-8 md:px-16 lg:px-40 bg-white dark:bg-fd-background border-b">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            alt="Wiki Nzar Dev Logo"
            src="/logo.svg"
            width={40}
            height={20}
            className="h-5 w-auto dark:grayscale-100 dark:invert-100"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-4 items-center">
            {navlinks.map(({ link, label, icon: Icon }) => (
              <li key={label}>
                <Link
                  href={link}
                  className={cn(buttonVariants({ size: "md" }), "text-sm")}
                >
                  <Icon className="size-4 text-fd-muted-foreground" />
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Button
                onClick={() => setOpenSearch(true)}
                size="md"
                className="text-sm"
              >
                <MagnifierLinear className="size-4 text-fd-muted-foreground" />
                Search
              </Button>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            size="icon"
            onClick={() => setOpenSearch(true)}
            className="md:hidden size-7"
            aria-label="Search"
          >
            <MagnifierLinear className="size-5 text-fd-muted-foreground" />
          </Button>

          <ThemeToggle className="cursor-pointer hidden md:flex" />

          <Button
            className="md:hidden size-7"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            size="icon"
          >
            <AltArrowUpLinear
              className={cn(
                "size-6 text-fd-muted-foreground duration-500 ease-in-out transition-transform",
                menuOpen ? "rotate-180" : "rotate-0",
              )}
            />
          </Button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 rounded-b-lg top-14 z-30 bg-white dark:bg-fd-background border-b  transition-all duration-300 ease-in-out overflow-hidden",
          menuOpen
            ? "translate-y-0 shadow"
            : "-translate-y-full pointer-events-none",
        )}
      >
        <nav className="px-4 py-3">
          <ul className="flex flex-col gap-2">
            {navlinks.map(({ link, label, icon: Icon }) => (
              <li key={label}>
                <Link
                  href={link}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    buttonVariants({ size: "md" }),
                    "text-sm w-full justify-start",
                  )}
                >
                  <Icon className="size-4 text-fd-muted-foreground" />
                  {label}
                </Link>
              </li>
            ))}

            <li key="theme" className="ml-auto">
              <ThemeToggle className="cursor-pointer md:hidden" />
            </li>
          </ul>
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 top-14 z-20 bg-black/20 backdrop-blur-xs"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
