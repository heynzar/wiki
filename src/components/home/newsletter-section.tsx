"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LetterCard } from "@/components/letter-card";
import { LetterLineDuotone } from "@solar-icons/react-perf";

export default function NewsletterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className="mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-10 mt-12 mb-6 md:my-24 py-12 px-6">
      <div className="w-full md:w-auto md:flex-1 md:pr-10">
        <header className="flex flex-col gap-4 w-full">
          <h2 className="font-instrument flex items-center gap-2.5 md:gap-3 text-4xl sm:text-5xl lg:text-6xl">
            <LetterLineDuotone color="#0066ff" className="mb-1" />
            Stay Updated
          </h2>
          <p className="text-fd-muted-foreground leading-relaxed">
            Every time a new notes, diagrams, or studies are added, you'll be
            notified. No noise, just knowledge.
          </p>
        </header>

        <div className="flex flex-col mt-6 w-full gap-2">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-9 text-sm bg-fd-popover focus-visible:ring-primary"
          />
          <div className="flex gap-2 w-full">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-9 text-sm bg-fd-popover focus-visible:ring-primary"
            />
            <Button
              variant="primary"
              className="h-9 text-sm px-4 shadow shrink-0"
              size="md"
            >
              Join The Club
            </Button>
          </div>
        </div>
      </div>

      <div className="relative mt-10 md:mt-0 max-[300px]:hidden flex group items-center justify-center w-full md:w-auto shrink-0">
        <div className="w-60 h-80 absolute rotate-[10deg] group-hover:translate-x-4 bg-white dark:bg-neutral-50 border rounded shadow-lg group-hover:-translate-y-2 duration-500 ease-in-out transition-transform z-20">
          <LetterCard name={name} />
        </div>
        <div className="rounded group-hover:-translate-x-2 duration-500 ease-in-out transition-transform absolute bg-white dark:bg-neutral-50 border rotate-3 group-hover:-rotate-z-3 z-10 shadow-lg w-60 h-80" />
        <div className="rounded group-hover:-rotate-z-6 group-hover:-translate-x-4 group-hover:translate-y-2 duration-500 ease-in-out transition-transform absolute bg-white dark:bg-neutral-50 border z-0 -rotate-2 shadow-lg w-60 h-80" />
        {/* Invisible spacer to give the cards room */}
        <div className="w-60 h-80 invisible" />
      </div>
    </section>
  );
}
