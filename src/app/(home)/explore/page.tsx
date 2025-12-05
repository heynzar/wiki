import ContentNavigation from "@/components/content-navigation";
import { Hash } from "lucide-react";

export default function ExplorePage() {
  return (
    <div className="content space-y-4 max-w-2xl mx-auto">
      <div className="fixed h-full top-0 flex justify-center items-center right-0"></div>
      <h1>Explore</h1>
      <p>
        All the visuals from every topic in this Wiki, collected here for quick
        browsing and inspiration.
      </p>
      <hr />

      <ContentNavigation isFullHeight={false} category="categories" />

      <hr />

      <main className="w-full space-y-8">
        <section id="programming-languages" className="space-y-4 w-full">
          <div className="flex items-center gap-2">
            <Hash strokeWidth={1} className="size-8 text-fd-muted-foreground" />
            <h2>Programming Languages</h2>
          </div>
          <ContentNavigation
            isFullHeight={false}
            category="programming_languages"
          />
        </section>

        <hr />

        <section id="frontend" className="space-y-4 -mt-4 w-full">
          <div className="flex items-center gap-2">
            <Hash strokeWidth={1} className="size-8 text-fd-muted-foreground" />
            <h2>Frontend</h2>
          </div>
          <ContentNavigation
            isFullHeight={false}
            category="frontend_technologies"
          />
        </section>

        <hr />

        <section id="frontend" className="space-y-4 -mt-4 w-full">
          <div className="flex items-center gap-2">
            <Hash strokeWidth={1} className="size-8 text-fd-muted-foreground" />
            <h2>Frontend Concepts</h2>
          </div>
          <ContentNavigation
            columnsCount={2}
            isFullHeight={false}
            category="frontend_core_concepts"
          />
        </section>

        <hr />

        <section id="frontend" className="space-y-4 -mt-4 w-full">
          <div className="flex items-center gap-2">
            <Hash strokeWidth={1} className="size-8 text-fd-muted-foreground" />
            <h2>{"Backend (Js Ecosystem)"}</h2>
          </div>
          <ContentNavigation
            isFullHeight={false}
            category="backend_technologies"
          />
        </section>
      </main>
    </div>
  );
}
