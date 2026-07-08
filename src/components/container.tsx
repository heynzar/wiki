import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  rows?: number;
  cols?: number;
  gap?: number;
}

export default function Container({
  children,
  rows = 1,
  cols = 1,
  gap = 2,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "grid w-full items-center grid-cols-1",
        `sm:grid-cols-${cols}`,
      )}
      style={{
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        gap: `${gap * 0.25}rem`,
      }}
    >
      {children}
    </div>
  );
}
