import {
  Accessibility,
  ArrowRight,
  Binary,
  Box,
  ChartSpline,
  CodeXml,
  Cpu,
  Database,
  Globe,
  Globe2,
  Hash,
  Languages,
  Layout,
  Network,
  Palette,
  Search,
  Shapes,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import TableOfContentsProps from "@/components/table-of-content";
import Image from "next/image";

const programming = [
  {
    link: "/docs/programming/java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    name: "Java",
  },
  {
    link: "/docs/programming/javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    link: "/docs/programming/typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    name: "TypeScript",
  },
  {
    link: "/docs/programming/python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    name: "Python",
  },
  {
    link: "/docs/programming/kotlin",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
    name: "Kotlin",
  },
];

const frontend = [
  {
    link: "/docs/frontend/html",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    name: "HTML",
  },
  {
    link: "/docs/frontend/css",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    name: "CSS",
  },
  {
    link: "/docs/programming/javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    link: "/docs/programming/typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    name: "TypeScript",
  },
  {
    link: "/docs/frontend/react",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    name: "React",
  },

  {
    link: "/docs/frontend/redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    name: "Redux",
  },

  {
    link: "/docs/fullStack/nextjs",
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },

  {
    link: "/docs/frontend/motion",
    name: "Motion",
    icon: "/motion.png",
  },
  {
    link: "/docs/frontend/gsap",
    name: "GSAP",
    icon: "/gsap.svg",
  },
];

const backend = [
  {
    link: "/docs/backend/nodejs",
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },

  {
    link: "/docs/backend/expressjs",
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
];

const frontend_concepts = [
  {
    name: "Responsive Design",
    icon: Layout,
    link: "/docs/frontend-concepts/responsive-desing",
  },
  {
    name: "Accessibility (a11y)",
    icon: Accessibility,
    link: "/docs/frontend-concepts/accessibility",
  },
  {
    name: "SEO Optimization",
    icon: Search,
    link: "/docs/frontend-concepts/seo",
  },
  {
    name: "Internationalization (i18n)",
    icon: Languages,
    link: "/docs/frontend-concepts/internationalization",
  },
  {
    name: "Fetching & Caching",
    icon: Globe2,
    link: "/docs/frontend-concepts/fetching-and-caching",
  },

  {
    name: "State Management",
    icon: Box,
    link: "/docs/frontend-concepts/state-management",
  },
  {
    name: "Animation & Motion",
    icon: ChartSpline,
    link: "/docs/frontend-concepts/anumation-motion",
  },
  { name: "3D & WebGL", icon: Shapes, link: "/docs/frontend-concepts/3d" },
];

const links = [
  {
    name: "Fundamentals",
    icon: Binary,
    link: "/docs/cs-fundamentals",
  },
  {
    name: "Web Dev",
    icon: Globe,
    link: "/docs/web-development",
  },
  {
    name: "Mobile Dev",
    icon: Smartphone,
    link: "/docs/mobile-development",
  },
  {
    name: "Data Structer",
    icon: Cpu,
    link: "/docs/cs-fundamentals",
  },
  {
    name: "Algorithms",
    icon: Cpu,
    link: "/docs/cs-fundamentals",
  },
  {
    name: "DataBases",
    icon: Database,
    link: "/docs/desktop-development",
  },
  {
    name: "Languages",
    icon: CodeXml,
    link: "/docs/gaming",
  },
  {
    name: "Networking",
    icon: Network,
    link: "/docs/networking",
  },
  {
    name: "UI & UX",
    icon: Palette,
    link: "/docs/design",
  },
];

export default function page() {
  return (
    <div className="content space-y-4">
      <div className="fixed h-full top-0 flex justify-center items-center right-0">
        <TableOfContentsProps showLevels="both" />
      </div>
      <h1>Explore</h1>
      <p>
        All the visuals from every topic in this Wiki, collected here for quick
        browsing and inspiration.
      </p>
      <hr />

      <div className="w-full grid grid-cols-3 gap-2">
        {links.map(({ name, icon: Icon, link }, index) => (
          <Link
            key={index}
            href={link}
            className="py-2 px-3 rounded-lg flex hover:bg-fd-muted-foreground/10 transition-colors bg-fd-card items-center justify-center gap-2 border"
          >
            <Icon
              strokeWidth={1.5}
              className="size-5 text-fd-muted-foreground"
            />
            <span>{name}</span>

            <ArrowRight className="size-4 ml-auto  text-fd-muted-foreground" />
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
            {programming.map(({ name, icon, link }, index) => (
              <Link
                key={index}
                href={link}
                className="py-2 px-3 rounded-lg flex hover:bg-fd-muted-foreground/10 transition-colors bg-fd-card items-center justify-center gap-2 border"
              >
                <Image
                  width={20}
                  height={20}
                  alt={`${name} Icon`}
                  src={icon}
                  className="h-5 w-auto"
                />
                <span>{name}</span>

                <ArrowRight className="size-4 ml-auto  text-fd-muted-foreground" />
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
            {frontend.map(({ name, icon, link }, index) => (
              <Link
                key={index}
                href={link}
                className="py-2 px-3 rounded-lg flex hover:bg-fd-muted-foreground/10 transition-colors bg-fd-card items-center justify-center gap-2 border"
              >
                <Image
                  width={20}
                  height={20}
                  alt={`${name} Icon`}
                  src={icon}
                  className="size-5"
                />
                <span>{name}</span>

                <ArrowRight className="size-4 ml-auto  text-fd-muted-foreground" />
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
            {frontend_concepts.map(({ name, icon: Icon, link }, index) => (
              <Link
                key={index}
                href={link}
                className="py-2 px-3 rounded-lg flex hover:bg-fd-muted-foreground/10 transition-colors bg-fd-card items-center justify-center gap-2 border"
              >
                <Icon
                  strokeWidth={1.5}
                  className="size-5 text-fd-muted-foreground"
                />
                <span>{name}</span>

                <ArrowRight className="size-4 ml-auto  text-fd-muted-foreground" />
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
            {backend.map(({ name, icon, link }, index) => (
              <Link
                key={index}
                href={link}
                className="py-2 px-3 rounded-lg flex hover:bg-fd-muted-foreground/10 transition-colors bg-fd-card items-center justify-center gap-2 border"
              >
                <Image
                  width={20}
                  height={20}
                  alt={`${name} Icon`}
                  src={icon}
                  className="h-5 w-auto"
                />
                <span>{name}</span>

                <ArrowRight className="size-4 ml-auto  text-fd-muted-foreground" />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
