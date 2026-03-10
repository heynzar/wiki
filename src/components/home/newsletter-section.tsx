"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LetterCard } from "@/components/letter-card";
import { LetterLineDuotone } from "@solar-icons/react-perf";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useNewsletter } from "@/hooks/use-newsletter";

export default function NewsletterSection() {
  const {
    name,
    setName,
    email,
    setEmail,
    status,
    setStatus,
    message,
    setMessage,
    isGmail,
    canSubmit,
    handleSubmit,
  } = useNewsletter();

  return (
    <section className="mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-10 mt-12 mb-6 md:my-24 py-12 px-6">
      <div className="w-full md:w-auto md:flex-1 md:pr-10">
        <header className="flex flex-col gap-4 w-full">
          <h2 className="font-instrument flex items-center gap-2.5 md:gap-3 text-4xl sm:text-5xl lg:text-6xl">
            <LetterLineDuotone color="#0066ff" className="mb-1" />
            Stay Updated
          </h2>
          <p className="text-fd-muted-foreground leading-relaxed">
            {status === "success"
              ? "You're all set. Whenever something new gets added; notes, diagrams, study breakdowns, you'll be the first to know Inshallah. No noise, just knowledge."
              : "Every time new notes, diagrams, or studies are added, you'll be notified Inshallah. No noise, just knowledge."}
          </p>
        </header>

        {status === "success" ? (
          <div className="flex items-center gap-2 mt-6">
            <Link
              href="/explore"
              className={cn(
                buttonVariants({ variant: "primary", size: "md" }),
                "h-9 text-sm px-4",
              )}
            >
              Start Learning
            </Link>
            <Link
              href="/journey"
              className={cn(
                buttonVariants({ variant: "secondary", size: "md" }),
                "h-9 text-sm px-4",
              )}
            >
              Full Journey
            </Link>
          </div>
        ) : (
          <div className="flex flex-col mt-6 w-full gap-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus("idle");
                setMessage("");
              }}
              disabled={status === "loading"}
              className={`h-9 text-sm bg-fd-popover focus-visible:ring-primary ${
                email && !isGmail
                  ? "border-red-400 focus-visible:ring-red-400"
                  : ""
              }`}
            />

            <div className="flex gap-2 w-full">
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={status === "loading"}
                className="h-9 text-sm bg-fd-popover focus-visible:ring-primary"
              />
              <Button
                variant="primary"
                className="h-9 text-sm px-4 shadow shrink-0 disabled:opacity-50"
                size="md"
                onClick={handleSubmit}
                disabled={status === "loading" || !canSubmit}
              >
                {status === "loading" ? "Joining…" : "Join The Club"}
              </Button>
            </div>

            {email && !isGmail && (
              <p className="text-sm text-fd-error mt-1">
                Only @gmail.com addresses are accepted.
              </p>
            )}

            {message && (
              <p
                className={`text-sm mt-1 ${
                  status === "error"
                    ? "text-fd-error"
                    : "text-green-600 dark:text-green-400"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="relative mt-10 md:mt-0 max-[300px]:hidden flex group items-center justify-center w-full md:w-auto shrink-0">
        <div className="w-60 h-80 absolute rotate-[10deg] group-hover:translate-x-4 bg-white dark:bg-neutral-50 border rounded shadow-lg group-hover:-translate-y-2 duration-500 ease-in-out transition-transform z-20">
          <LetterCard name={name} />
        </div>
        <div className="rounded group-hover:-translate-x-2 duration-500 ease-in-out transition-transform absolute bg-white dark:bg-neutral-50 border rotate-3 group-hover:-rotate-z-3 z-10 shadow-lg w-60 h-80" />
        <div className="rounded group-hover:-rotate-z-6 group-hover:-translate-x-4 group-hover:translate-y-2 duration-500 ease-in-out transition-transform absolute bg-white dark:bg-neutral-50 border z-0 -rotate-2 shadow-lg w-60 h-80" />
        <div className="w-60 h-80 invisible" />
      </div>
    </section>
  );
}
