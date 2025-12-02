import { visuals } from "@/data/visuals";
import { PackageOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl tracking-tighter md:text-4xl">Visuals</h1>
      <p className="text-sm md:text-base opacity-80">
        All the visuals from every topic in this Wiki, collected here for quick
        browsing and inspiration.
      </p>

      {visuals.length > 0 ? (
        <div className="columns-1 md:columns-2 space-y-2 gap-2 w-full mt-6">
          {visuals.map(({ title, link, image_url, category }) => (
            <div
              key={link}
              className="border dark:border-2 relative rounded-lg overflow-hidden"
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

              <a href={link} target="_blank" rel="noopener noreferrer">
                <Image
                  className="w-full h-auto dark:invert-[92%] dark:grayscale-100"
                  src={image_url}
                  height={500}
                  width={500}
                  alt={`${title} visual`}
                />
              </a>
              <div className="p-2 border-t dark:border-t-2">
                <h2 className="text-center text-sm">{title}</h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="border-dashed mt-6 border-fd-muted-foreground/30 w-full border flex items-center justify-center rounded-xl h-24">
          <span className="text-sm flex items-center gap-1 text-fd-muted-foreground">
            <PackageOpen strokeWidth={1} className="size-4" />
            Still Nothing Here
          </span>
        </div>
      )}
    </div>
  );
}
