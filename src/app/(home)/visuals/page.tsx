import { PackageOpen } from "lucide-react";

export default function page() {
  return (
    <div className="content space-y-4">
      <h1>Visuals</h1>
      <p>
        All the visuals from every topic in this Wiki, collected here for quick
        browsing and inspiration.
      </p>
      <div className="border-dashed mt-6 border-fd-muted-foreground/30 w-full border flex items-center justify-center rounded-xl h-24">
        <span className="text-sm flex items-center gap-1 text-fd-muted-foreground">
          <PackageOpen strokeWidth={1} className="size-4" />
          Still Nothing Here
        </span>
      </div>
    </div>
  );
}
