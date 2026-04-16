import { cn } from "fumadocs-ui/utils/cn";
import type { HTMLAttributes, PropsWithChildren } from "react";
import type { ReactNode } from "react";
import Link from "fumadocs-core/link";
import Image from "next/image";

type CardsProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export function Cardds({ className, children, ...props }: CardsProps) {
  return (
    <div
      {...props}
      className={cn("grid grid-cols-2 gap-3 @container", className)}
    >
      {children}
    </div>
  );
}

type BaseProps = {
  image?: string;
  title: string;
  children?: ReactNode;
  className?: string;
};

type CardAsLink = BaseProps & {
  href: string;
} & React.ComponentProps<typeof Link>;

type CardAsDiv = BaseProps &
  React.HTMLAttributes<HTMLDivElement> & {
    href?: undefined;
  };

type CardProps = CardAsLink | CardAsDiv;

export function Cardd({
  image,
  title,
  className,
  children,
  href,
  ...props
}: CardProps) {
  const baseContent = (
    <div className={cn("flex gap-4", image && "items-start -mb-8")}>
      {image && (
        <Image
          width={80}
          height={160}
          src={image}
          alt={title}
          className="h-auto w-20 mt-0 flex-shrink-0 rounded-lg object-cover"
        />
      )}

      <div className="flex-1 min-w-0">
        <h3 className="not-prose mb-1 text-sm font-medium">{title}</h3>

        <div className="prose-no-margin !my-0 empty:hidden text-sm text-fd-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  );

  const sharedClassName = cn(
    "block rounded-xl border bg-fd-card p-4 text-fd-card-foreground transition-colors @max-lg:col-span-full",
    href && "hover:bg-fd-accent/80",
    className,
  );

  if (href) {
    return (
      <Link
        {...(props as React.ComponentProps<typeof Link>)}
        href={href}
        data-card
        className={sharedClassName}
      >
        {baseContent}
      </Link>
    );
  }

  return (
    <div
      {...(props as React.HTMLAttributes<HTMLDivElement>)}
      data-card
      className={sharedClassName}
    >
      {baseContent}
    </div>
  );
}
