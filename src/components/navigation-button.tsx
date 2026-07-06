import { cn } from "fumadocs-ui/utils/cn";
import { ArrowRight, FileText, Folder, LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavigationButtonProps {
  file?: boolean;
  title: string;
  icon?: LucideIcon | string;
  isFullHeight?: boolean;
  disabled?: boolean;
  href?: string;
}

const BASE_STYLES =
  "py-2 px-3 cursor-pointer rounded-lg whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] flex items-center w-full justify-center gap-2 border transition-colors bg-fd-card hover:bg-fd-muted-foreground/10";
const ICON_STYLES = "size-5 text-fd-muted-foreground";
const ARROW_STYLES = "size-4 ml-auto text-fd-muted-foreground";

export function NavigationButton({
  file,
  icon = file ? FileText : Folder,
  title,
  isFullHeight = false,
  disabled = false,
  href,
}: NavigationButtonProps) {
  const heightClass = isFullHeight ? "h-10" : "h-12";
  const isImageUrl = typeof icon === "string";
  const IconComponent = !isImageUrl ? icon : null;

  const content = (
    <>
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
    </>
  );

  const className = cn(`${BASE_STYLES} ${heightClass}`);

  if (href && !disabled) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button className={className} disabled={disabled}>
      {content}
    </button>
  );
}
