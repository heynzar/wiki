import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function HeroImage({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      role="presentation"
      className={cn("relative w-full h-12", className)}
    >
      <span className="absolute left-0 w-48 h-4 bg-black/10 dark:bg-white/10 -bottom-2 rounded-full blur-md"></span>

      <div className="absolute -left-2 -bottom-1 -rotate-12 size-14">
        <Image
          src="/folder.png"
          alt="Folder icon"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute left-[150px] -bottom-1 rotate-12 size-[3.25rem]">
        <Image
          src="/laptop.png"
          alt="Laptop icon"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute hover:scale-110 transition-all ease-in-out duration-300 -bottom-1 left-6.5 -rotate-6 rounded-md border border-fd-foreground/30 shadow w-14 h-16 overflow-hidden">
        <Image
          src="/visuals/wiki/web-basics/html/every-html-tag-you-actually-need-to-know_anatomy-of-an-html-element.png"
          alt="Diagram showing the anatomy of an HTML element"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="absolute hover:scale-110 transition-all ease-in-out duration-300 z-10 -bottom-2 left-[72px] rounded-md border border-fd-foreground/30 shadow w-12 h-18 overflow-hidden">
        <Image
          src="/visuals/wiki/web-basics/html/every-html-tag-you-actually-need-to-know_essential-html-tags-sheet.png"
          alt="Cheat sheet of essential HTML tags"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="absolute hover:scale-110 transition-all ease-in-out duration-300 -bottom-1 left-[108px] rotate-6 rounded-md border border-fd-foreground/30 shadow w-14 h-16 overflow-hidden">
        <Image
          src="/visuals/wiki/web-basics/html/semantic-html-why-structure-matters_semantic-html-structure.png"
          alt="Diagram illustrating semantic HTML structure"
          fill
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
