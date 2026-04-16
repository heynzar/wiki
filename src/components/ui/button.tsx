import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-1 whitespace-nowrap text-xs transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary/80",
        outline:
          "border bg-fd-background shadow-xs hover:bg-fd-accent hover:text-accent-foreground dark:bg-fd-input/30 dark:border-input dark:hover:bg-fd-input/50",
        secondary:
          "bg-fd-muted-foreground/10 text-secondary-foreground hover:bg-fd-muted-foreground/15",
        ghost: "hover:bg-fd-muted-foreground/10 dark:hover:bg-fd-accent/50", //dark:hover:bg-accent/50
      },
      size: {
        default: "h-6 px-2 py-0.5 has-[>svg]:px-1.5",
        sm: "h-5 gap-1.5 py-0.5 px-1 has-[>svg]:px-1.5",
        md: "h-7 px-2 py-0.5 has-[>svg]:px-2 gap-1.5",
        icon: "size-6",
      },
      rounded: {
        default: "rounded-md",
        none: "rounded-none",
        lg: "rounded-lg",
      },
    },
    defaultVariants: {
      rounded: "default",
      variant: "ghost",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  rounded,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size, rounded, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
