import { cn } from "fumadocs-ui/utils/cn";
import Link from "fumadocs-core/link";
import Image from "next/image";
import type { ReactNode } from "react";

type BaseProps = {
  image?: string;
  title: string;
  children?: ReactNode;
  className?: string;
};

type BookCardAsLink = BaseProps &
  React.ComponentProps<typeof Link> & {
    href: string;
  };

type BookCardAsDiv = BaseProps &
  React.HTMLAttributes<HTMLDivElement> & {
    href?: undefined;
  };

type BookCardProps = BookCardAsLink | BookCardAsDiv;

export default function BookCard({
  image,
  title,
  className,
  children,
  href,
  ...props
}: BookCardProps) {
  const content = (
    <div className={cn("flex gap-4", image && "items-start")}>
      {image && (
        <Image
          src={image}
          alt={title}
          width={80}
          height={100}
          className="mt-0 mb-0 w-20 h-auto rounded-lg object-cover"
        />
      )}

      <div className="min-w-0 flex-1">
        <h3 className="not-prose mb-1 text-sm font-medium">{title}</h3>

        {children && (
          <div className="prose-no-margin text-sm text-fd-muted-foreground">
            {children}
          </div>
        )}
      </div>
    </div>
  );

  const classes = cn(
    "block h-full rounded-xl border bg-fd-card p-4 text-fd-card-foreground transition-colors",
    href && "hover:bg-fd-accent/80",
    className,
  );

  if (href) {
    return (
      <Link
        {...(props as React.ComponentProps<typeof Link>)}
        href={href}
        data-card
        className={classes}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      {...(props as React.HTMLAttributes<HTMLDivElement>)}
      data-card
      className={classes}
    >
      {content}
    </div>
  );
}
