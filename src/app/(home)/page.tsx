import Calendar from "@/components/calendar";
import { NavigationButton } from "@/components/navigation-button";
import { visuals } from "@/data/visuals";
import { ArrowRight, ChevronRight, LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="px-6">
      <main className="flex flex-1 flex-col max-w-2xl mx-auto space-y-6 my-10 justify-center text-center">
        <h1 className="text-4xl tracking-tighter md:text-6xl">
          Learning Out Loud
        </h1>
        <p className="text-sm md:text-base opacity-80">
          I study these topics anyway! so this is my way of mastering them,
          documenting them, and sharing the benefit with anyone who needs it.
        </p>
        <Image
          src="/7.png"
          alt=""
          width={5000}
          height={3000}
          className="border mt-4 rounded-lg"
        />

        {/* <p>
          ## Why This Category Exists I'm studying these languages anyway, in
          university, for future jobs, and because I genuinely enjoy learning
          how things work under the hood. **So the idea is simple:** - If I'm
          going to learn them - why not master them. - And if I'm going to
          master them - why not share everything with you? - And if I'm sharing
          - why not elevate the purpose by making it Lillah (for the sake of
          Allah), securing that immense extra reward? **This category exists
          to:** - Organize the knowledge I gain along the way - Explain things
          in clean, simple English - Help beginners, Muslim devs, and the whole
          community avoid confusion - Build a resource that grows stronger over
          time No fluff. Just the pure sauce. ---
        </p> */}
      </main>

      <hr className="my-24" />

      <section id="visuals" className="flex flex-col gap-8">
        <header className="max-w-2xl mb-12 mx-auto space-y-4">
          <h2 className="text-3xl tracking-tighter md:text-4xl">Visuals</h2>
          <p className="text-sm md:text-base opacity-80">
            All the visuals from every topic in this Wiki, collected here for
            quick browsing and inspiration.
          </p>
        </header>

        <Link
          href="/visuals"
          className="flex gap-1.5 opacity-60 hover:opacity-100 transition-opacity group mx-auto items-center"
        >
          <span>Explore More</span>
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <div className="columns-1 sm:columns-3 max-w-5xl mx-auto gap-2 w-full">
          {visuals.slice(0, 3).map(({ title, link, image_url, category }) => (
            <div
              key={link}
              className="border dark:border-2 group relative rounded-lg overflow-hidden"
            >
              <div className="flex items-center p-2 gap-0.5 border-b dark:border-b-2">
                {category.map((c, i) => (
                  <div key={c} className="flex group items-center gap-0.5">
                    <Link
                      key={i}
                      href={`/docs/${category.slice(0, i + 1).join("/")}`}
                      className="text-xs px-1.5 py-0.5 rounded hover:bg-fd-accent/80 cursor-pointer"
                    >
                      {c}
                    </Link>
                    <span className="opacity-20 text-xs group-last:hidden">
                      /
                    </span>
                  </div>
                ))}
              </div>

              <div className="overflow-hidden">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <Image
                    className="w-full h-auto group-hover:opacity-80 transition-opacity"
                    src={image_url}
                    height={500}
                    width={500}
                    alt={`${title} visual`}
                  />
                </a>
              </div>

              <div className="p-2 border-t dark:border-t-2">
                <h2 className="text-center text-sm">{title}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-24" />

      <section id="visuals" className="flex flex-col gap-8">
        <header className="mb-12 max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl tracking-tighter md:text-4xl">Journey</h2>
          <p className="text-sm md:text-base opacity-80">
            A full history of all the improvements, updates, and changes across
            this Wiki. Organized month by month for easy tracking.
          </p>
        </header>

        <Link
          href="/journey"
          className="flex gap-1.5 opacity-60 hover:opacity-100 transition-opacity group mx-auto items-center"
        >
          <span>See The Full Journey</span>
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
        </Link>

        <div className="max-w-2xl w-full mx-auto">
          <Calendar hasYearSelector={false} />
        </div>
      </section>

      <hr className="my-24" />
    </div>
  );
}
