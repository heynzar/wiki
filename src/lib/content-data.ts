import {
  Accessibility,
  Binary,
  Box,
  Boxes,
  ChartSpline,
  CodeXml,
  Database,
  Globe,
  Globe2,
  Languages,
  Layout,
  Lightbulb,
  Network,
  Palette,
  Search,
  Shapes,
  Smartphone,
  AlertTriangle,
  Code2,
  Compass,
  Cpu,
  FunctionSquare,
  GitBranch,
  Layers,
  ListChecks,
  Package,
  Play,
  Sparkles,
  Timer,
  LucideIcon,
} from "lucide-react";

// Rename programming to programming_languages

export interface ContentItem {
  title: string;
  icon?: string | LucideIcon;
  link: string;
}

const programming_languages: ContentItem[] = [
  {
    link: "/docs/languages/java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    title: "Java",
  },
  {
    link: "/docs/languages/javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    title: "JavaScript",
  },
  {
    link: "/docs/languages/typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    title: "TypeScript",
  },
  {
    link: "/docs/languages/python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    title: "Python",
  },
  {
    link: "/docs/languages/sql",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg",
    title: "SQL",
  },
];

// Rename frontend to frontend_technologies
const frontend_technologies: ContentItem[] = [
  {
    link: "/docs/frontend/html",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    title: "HTML",
  },
  {
    link: "/docs/frontend/css",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    title: "CSS",
  },
  {
    link: "/docs/programming/javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    title: "JavaScript",
  },
  {
    link: "/docs/programming/typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    title: "TypeScript",
  },
  {
    link: "/docs/frontend/react",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    title: "React",
  },

  {
    link: "/docs/frontend/redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    title: "Redux",
  },

  {
    link: "/docs/fullStack/nextjs",
    title: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },

  {
    link: "/docs/frontend/motion",
    title: "Motion",
    icon: "/motion.png",
  },
  {
    link: "/docs/frontend/gsap",
    title: "GSAP",
    icon: "/gsap.svg",
  },
];

// Rename backend to backend_technologies
const backend_technologies: ContentItem[] = [
  {
    link: "/docs/backend/nodejs",
    title: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },

  {
    link: "/docs/backend/expressjs",
    title: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
];

// Rename frontend_concepts to frontend_core_concepts
const frontend_core_concepts: ContentItem[] = [
  {
    title: "Responsive Design",
    icon: Layout,
    link: "/docs/frontend-concepts/responsive-desing",
  },
  {
    title: "Visual Styling",
    icon: Palette,
    link: "/docs/frontend-concepts/styling",
  },
  {
    title: "Accessibility (a11y)",
    icon: Accessibility,
    link: "/docs/frontend-concepts/accessibility",
  },
  {
    title: "SEO Optimization",
    icon: Search,
    link: "/docs/frontend-concepts/seo",
  },
  {
    title: "Internationalization (i18n)",
    icon: Languages,
    link: "/docs/frontend-concepts/internationalization",
  },
  {
    title: "Fetching & Caching",
    icon: Globe2,
    link: "/docs/frontend-concepts/fetching-and-caching",
  },

  {
    title: "State Management",
    icon: Box,
    link: "/docs/frontend-concepts/state-management",
  },
  {
    title: "Animation & Motion",
    icon: ChartSpline,
    link: "/docs/frontend-concepts/anumation-motion",
  },
  { title: "3D & WebGL", icon: Shapes, link: "/docs/frontend-concepts/3d" },
];

// Rename programming_language_concepts to programming_languages_concepts
const programming_languages_concepts: ContentItem[] = [
  {
    title: "Programming Paradigms",
    icon: Layers,
    link: "/docs/languages/concepts/programming-paradigms",
  },
  {
    title: "Type Systems",
    icon: ListChecks,
    link: "/docs/languages/concepts/type-systems",
  },
  {
    title: "Syntax & Semantics",
    icon: Code2,
    link: "/docs/languages/concepts/syntax-semantics",
  },
  {
    title: "Memory & Runtime",
    icon: Cpu,
    link: "/docs/languages/concepts/memory-runtime",
  },
  {
    title: "Compilation & Execution Models",
    icon: Play,
    link: "/docs/languages/concepts/compilation-execution-models",
  },
  {
    title: "Data Structures & Built-In Types",
    icon: Database,
    link: "/docs/languages/concepts/data-structures-built-in-types",
  },
  {
    title: "Control Flow",
    icon: GitBranch,
    link: "/docs/languages/concepts/control-flow",
  },
  {
    title: "Functions, Methods & Modules",
    icon: FunctionSquare,
    link: "/docs/languages/concepts/functions-methods-modules",
  },
  {
    title: "Error Handling & Exceptions",
    icon: AlertTriangle,
    link: "/docs/languages/concepts/error-handling-exceptions",
  },
  {
    title: "Concurrency & Multithreading",
    icon: Timer,
    link: "/docs/languages/concepts/concurrency-multithreading",
  },
  {
    title: "Standard Libraries & APIs",
    icon: Boxes,
    link: "/docs/languages/concepts/standard-libraries-apis",
  },
  {
    title: "Design Principles & Best Practices",
    icon: Sparkles,
    link: "/docs/languages/concepts/design-principles-best-practices",
  },
  {
    title: "Language Philosophies",
    icon: Compass,
    link: "/docs/languages/concepts/language-philosophies",
  },
  {
    title: "Ecosystem & Tooling",
    icon: Package,
    link: "/docs/languages/concepts/ecosystem-tooling",
  },
];

const categories: ContentItem[] = [
  {
    title: "Fundamentals",
    icon: Binary,
    link: "/docs/fundamentals",
  },
  {
    title: "Web Dev",
    icon: Globe,
    link: "/docs/web",
  },
  {
    title: "Mobile Dev",
    icon: Smartphone,
    link: "/docs/mobile",
  },
  {
    title: "Data Structures",
    icon: Boxes,
    link: "/docs/data-structures",
  },
  {
    title: "Algorithms",
    icon: Lightbulb,
    link: "/docs/algorithms",
  },
  {
    title: "Databases",
    icon: Database,
    link: "/docs/databases",
  },
  {
    title: "Languages",
    icon: CodeXml,
    link: "/docs/languages",
  },
  {
    title: "Networking",
    icon: Network,
    link: "/docs/networking",
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    link: "/docs/ui",
  },
];

export {
  categories,
  frontend_core_concepts,
  backend_technologies,
  frontend_technologies,
  programming_languages,
  programming_languages_concepts,
};
