import {
  type ContentItem,
  backend_technologies,
  categories,
  frontend_core_concepts,
  frontend_technologies,
  programming_languages,
  programming_languages_concepts,
} from "@/lib/content-data";
import { java_chapters } from "@/data/programming-languages";
import { NavigationButton } from "./navigation-button";
import Link from "next/link";
import { cn } from "fumadocs-ui/utils/cn";

type ContentCategory =
  | "programming_languages"
  | "programming_languages_concepts"
  | "frontend_technologies"
  | "frontend_core_concepts"
  | "backend_technologies"
  | "categories"
  | "java_chapters";

const CONTENT_DATA: Record<ContentCategory, ContentItem[]> = {
  programming_languages,
  programming_languages_concepts,
  frontend_technologies,
  frontend_core_concepts,
  backend_technologies,
  categories,
  java_chapters,
};

export default function ContentNavigation({
  category,
  isFullHeight = false,
  columnsCount = 3,
}: {
  category: ContentCategory;
  isFullHeight?: boolean;
  columnsCount?: number;
}) {
  const items = CONTENT_DATA[category] as ContentItem[];

  if (!items?.length) return null;

  return (
    <div
      className={cn(
        "w-full grid gap-2",
        columnsCount === 2
          ? "grid-cols-1 md:grid-cols-2"
          : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      )}
    >
      {items.map(({ title, disabled, icon, link }) => (
        <Link
          className={disabled ? "cursor-default" : "cursor-pointer"}
          key={`${category}-${link}`}
          href={link}
        >
          <NavigationButton
            disabled={disabled}
            isFullHeight={isFullHeight}
            title={title}
            icon={icon}
          />
        </Link>
      ))}
    </div>
  );
}
