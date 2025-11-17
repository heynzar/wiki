"use client";
import React, { useState, useEffect } from "react";

interface TocItem {
  id: string;
  text: string;
  level: "h2" | "h3";
}

interface TableOfContentsProps {
  showLevels?: "h2" | "both";
  scrollOffset?: number;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  showLevels = "both",
  scrollOffset = 76,
}) => {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Generate TOC from content
    const content = document.querySelector(".content");
    if (!content) return;

    const headings = content.querySelectorAll("h2, h3");
    const items: TocItem[] = [];

    headings.forEach((heading, index) => {
      const id = `heading-${index}`;
      heading.id = id;
      const level = heading.tagName.toLowerCase() as "h2" | "h3";

      // Filter based on showLevels prop
      if (showLevels === "h2" && level === "h3") return;

      items.push({
        id,
        text: heading.textContent || "",
        level,
      });
    });

    setTocItems(items);
  }, [showLevels]);

  useEffect(() => {
    // Update active heading on scroll
    const handleScroll = () => {
      const selector =
        showLevels === "h2" ? ".content h2" : ".content h2, .content h3";
      const headings = document.querySelectorAll(selector);
      let current = "";

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= scrollOffset + 50) {
          current = heading.id;
        }
      });

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems, scrollOffset, showLevels]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - scrollOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <nav className="w-min h-min bg-fd-background rounded-md p-4 space-y-2">
      <ul>
        {tocItems.map((item) => {
          return (
            <li key={item.id} className="w-full">
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`flex items-center ml-auto h-3 group ${
                  item.level === "h3" ? "w-5" : "w-6"
                }`}
              >
                <span
                  className={`${
                    activeId === item.id && "!bg-fd-foreground h-[3px]"
                  } w-full h-0.5 group-hover:h-[3px] bg-fd-muted-foreground/80 transition-all group-hover:bg-fd-foreground`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TableOfContents;
