import {
  type ContentItem,
  backend_technologies,
  categories,
  frontend_core_concepts,
  frontend_technologies,
  programming_languages,
  programming_languages_concepts,
} from "@/lib/content-data";
import { NavigationButton } from "./navigation-button";
import Link from "next/link";

type ContentCategory =
  | "programming_languages"
  | "programming_languages_concepts"
  | "frontend_technologies"
  | "frontend_core_concepts"
  | "backend_technologies"
  | "categories";

const CONTENT_DATA: Record<ContentCategory, ContentItem[]> = {
  programming_languages,
  programming_languages_concepts,
  frontend_technologies,
  frontend_core_concepts,
  backend_technologies,
  categories,
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
      className="w-full grid gap-2"
      style={{ gridTemplateColumns: `repeat(${columnsCount}, minmax(0, 1fr))` }}
    >
      {items.map(({ title, icon, link }) => (
        <Link key={`${category}-${link}`} href={link}>
          <NavigationButton
            isFullHeight={isFullHeight}
            title={title}
            icon={icon}
          />
        </Link>
      ))}
    </div>
  );
}
