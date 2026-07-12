import Image from "next/image";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function PurposeSection() {
  return (
    <section className="bg-fd-popover mt-12 md:mt-24 relative">
      <div className="max-w-4xl mx-auto overflow-hidden py-10 px-4 space-y-10">
        <h2 className="text-center font-instrument text-primary text-2xl">
          Purpose & Stroy
        </h2>
        <div className="absolute inset-0 w-full h-full top-0 pt-20 overflow-hidden">
          <div className=" blur-3xl rotate-[24deg] -translate-x-1/4 w-full h-[6rem] dark:bg-amber-50/10 lg:dark:bg-amber-50/20 rounded-[50%]"></div>
        </div>
        {/* Decorative birds */}
        <Image
          src="/bird.png"
          width={100}
          height={100}
          className="absolute -scale-x-100 lg:top-16 left-2 size-14 rotate-12 top-10 lg:size-24 lg:left-28 opacity-80"
          alt=""
          aria-hidden="true"
        />
        <Image
          src="/bird.png"
          width={85}
          height={85}
          className="absolute top-[360px] lg:top-72 size-12 lg:size-20 right-2 lg:right-32 opacity-80"
          alt=""
          aria-hidden="true"
        />
        {/* Hadith */}
        <div className="space-y-4 text-center">
          <p className="text-fd-muted-foreground uppercase text-sm">
            The Messenger of Allah ﷺ said:
          </p>

          <p className="px-2 text-3xl sm:text-4xl md:text-5xl leading-snug font-instrument">
            “When the human being dies, his deeds end except for three: ongoing
            charity,{" "}
            <span className="bg-primary px-3 rounded-xl text-white">
              beneficial knowledge
            </span>
            , or a righteous child who prays for him.”
          </p>

          <p className="text-2xl text-fd-muted-foreground">&#10022;</p>
        </div>
        {/* Intention */}
        <div className="space-y-6 px-2 text-fd-muted-foreground leading-relaxed">
          <p>
            This notebook/wiki is a humble effort to share beneficial knowledge.
            May Allah accept it.
          </p>
          <p>
            This project started during my university studies. As I tried to
            understand my courses better, I began writing summaries and personal
            notes. When a topic was difficult, I used AI to help explain it in a
            simpler way. Little by little, those notes grew into a
            well-organized collection of knowledge.
          </p>
          <p>
            Then I stopped and thought about it. As Muslims, we are encouraged
            to benefit others. Instead of keeping these notes to myself, I
            started improving them, fixing mistakes, and making them easier to
            understand so others could benefit too.
          </p>

          <p>
            Today, this notebook is where I document everything I learn about
            software and web development. The learning path is inspired by{" "}
            <Link
              className={cn(
                buttonVariants({ variant: "outline" }),
                "text-sm translate-y-0.5",
              )}
              href="https://roadmap.sh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="h-4 w-auto dark:invert-0 invert-100"
                src="/roadmap.svg"
                alt="Roadmap.sh"
                width={16}
                height={16}
              />
              Roadmap.sh
            </Link>
            , I use{" "}
            <Link
              className={cn(
                buttonVariants({ variant: "outline" }),
                "text-sm translate-y-0.5",
              )}
              href="https://claude.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="h-4 w-auto"
                src="/claude.svg"
                alt="Claude"
                width={16}
                height={16}
              />
              Claude
            </Link>{" "}
            to help me research and improve the articles, and I create all the
            covers and diagrams in{" "}
            <Link
              className={cn(
                buttonVariants({ variant: "outline" }),
                "text-sm translate-y-0.5",
              )}
              href="https://figma.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="h-4 w-auto"
                src="/figma.svg"
                alt="Figma"
                width={16}
                height={16}
              />
              Figma
            </Link>
            . Everything is reviewed and edited by hand before it is published.
          </p>
          <p>
            I hope this notebook/wiki continues to grow as I learn more, and
            that it becomes a source of ongoing benefit. May Allah accept this
            work, put barakah in it, and grant us all tawfiq.
          </p>
        </div>
      </div>
    </section>
  );
}
