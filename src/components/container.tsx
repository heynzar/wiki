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
      className="w-full grid items-center"
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        gap: `${gap * 0.25}rem`,
      }}
    >
      {children}
    </div>
  );
}
