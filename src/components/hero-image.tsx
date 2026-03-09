import { cn } from "@/lib/utils";
import React from "react";

export default function HeroImage({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full h-12", className)}>
      <span className="absolute left-0 w-48 h-4 bg-black/10 dark:bg-white/10 -bottom-2 rounded-full blur-md"></span>
      <div
        style={{
          backgroundImage: `url(/folder.png)`,
          backgroundSize: "cover",
        }}
        className="absolute -left-2 -bottom-1 -rotate-12 size-14"
      />
      <div
        style={{
          backgroundImage: `url(/laptop.png)`,
          backgroundSize: "cover",
        }}
        className="absolute left-[150px] -bottom-1 rotate-12 size-[3.25rem]"
      />
      <div
        style={{
          backgroundImage: `url(/visuals/wiki/java/should-i-use-opp.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute hover:scale-110 transition-all ease-in-out duration-300 -bottom-1 left-7 -rotate-6 rounded-md border border-fd-foreground/30 shadow w-12 h-16"
      />
      <div
        style={{
          backgroundImage: `url(/function-examples.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute hover:scale-110 transition-all ease-in-out duration-300 z-10 -bottom-2 left-[72px] rounded-md border border-fd-foreground/30 shadow w-12 h-18"
      />
      <div
        style={{
          backgroundImage: `url(/visuals/wiki/java/how-java-code-runs.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute hover:scale-110 transition-all ease-in-out duration-300 -bottom-1 left-[116px] rotate-6 rounded-md border border-fd-foreground/30 shadow w-12 h-16"
      />
    </div>
  );
}
