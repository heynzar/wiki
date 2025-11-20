import { Hash } from "lucide-react";
import Link from "next/link";
import { NavButton } from "@/components/nav-button";
import {
  backend,
  frontend,
  frontend_concepts,
  categories,
  programming,
} from "@/lib/explore-page-data";

export default function page() {
  return (
    <div className="content space-y-4">
      <div className="fixed h-full top-0 flex justify-center items-center right-0"></div>
      <h1>Explore</h1>
      <p>
        All the visuals from every topic in this Wiki, collected here for quick
        browsing and inspiration.
      </p>
      <hr />

      <div className="w-full grid grid-cols-3 gap-2">
        {categories.map(({ title, icon: Icon, link }, index) => (
          <Link key={index} href={link}>
            <NavButton title={title} icon={Icon} />
          </Link>
        ))}
      </div>

      <hr />

      <main className="w-full space-y-8">
        <section id="programming-languages" className="space-y-4 w-full">
          <div className="flex items-center gap-2">
            <Hash strokeWidth={1} className="size-8 text-fd-muted-foreground" />
            <h2>Programming Languages</h2>
          </div>
          <div className="w-full grid grid-cols-3 gap-2">
            {programming.map(({ title, image_url, link }, index) => (
              <Link key={index} href={link}>
                <NavButton title={title} image_url={image_url} />
              </Link>
            ))}
          </div>
        </section>

        <hr />

        <section id="frontend" className="space-y-4 -mt-4 w-full">
          <div className="flex items-center gap-2">
            <Hash strokeWidth={1} className="size-8 text-fd-muted-foreground" />
            <h2>Frontend</h2>
          </div>
          <div className="w-full grid grid-cols-3 gap-2">
            {frontend.map(({ title, image_url, link }, index) => (
              <Link key={index} href={link}>
                <NavButton title={title} image_url={image_url} />
              </Link>
            ))}
          </div>
        </section>

        <hr />

        <section id="frontend" className="space-y-4 -mt-4 w-full">
          <div className="flex items-center gap-2">
            <Hash strokeWidth={1} className="size-8 text-fd-muted-foreground" />
            <h2>Frontend Concepts</h2>
          </div>
          <div className="w-full grid grid-cols-2 gap-2">
            {frontend_concepts.map(({ title, icon: Icon, link }, index) => (
              <Link key={index} href={link}>
                <NavButton title={title} icon={Icon} />
              </Link>
            ))}
          </div>
        </section>

        <hr />

        <section id="frontend" className="space-y-4 -mt-4 w-full">
          <div className="flex items-center gap-2">
            <Hash strokeWidth={1} className="size-8 text-fd-muted-foreground" />
            <h2>{"Backend (Js Ecosystem)"}</h2>
          </div>
          <div className="w-full grid grid-cols-3 gap-2">
            {backend.map(({ title, image_url, link }, index) => (
              <Link key={index} href={link}>
                <NavButton title={title} image_url={image_url} />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
