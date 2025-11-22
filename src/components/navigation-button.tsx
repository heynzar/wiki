import { ArrowRight, LucideIcon } from "lucide-react";
import Image from "next/image";

interface NavigationButtonProps {
  title: string;
  icon?: LucideIcon | string;
  isFullHeight?: boolean;
}

const BASE_STYLES =
  "py-2 px-3 cursor-pointer rounded-lg flex items-center w-full justify-center gap-2 border transition-colors bg-fd-card hover:bg-fd-muted-foreground/10";
const ICON_STYLES = "size-5 text-fd-muted-foreground";
const ARROW_STYLES = "size-4 ml-auto text-fd-muted-foreground";

export function NavigationButton({
  icon,
  title,
  isFullHeight = false,
}: NavigationButtonProps) {
  const heightClass = isFullHeight ? "h-10" : "";
  const isImageUrl = typeof icon === "string";
  const IconComponent = !isImageUrl ? icon : null;

  return (
    <button className={`${BASE_STYLES} ${heightClass}`}>
      {isImageUrl ? (
        <Image
          width={20}
          height={20}
          alt={`${title} icon`}
          src={icon}
          className="size-5"
        />
      ) : IconComponent ? (
        <IconComponent strokeWidth={1.5} className={ICON_STYLES} />
      ) : null}

      <span className="truncate font-normal">{title}</span>

      <ArrowRight className={ARROW_STYLES} />
    </button>
  );
}
