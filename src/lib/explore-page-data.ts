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
} from "lucide-react";

const programming = [
  {
    link: "/docs/languages/java",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    title: "Java",
  },
  {
    link: "/docs/languages/javascript",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    title: "JavaScript",
  },
  {
    link: "/docs/languages/typescript",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    title: "TypeScript",
  },
  {
    link: "/docs/languages/python",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    title: "Python",
  },
  {
    link: "/docs/languages/kotlin",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
    title: "Kotlin",
  },
];

const frontend = [
  {
    link: "/docs/frontend/html",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    title: "HTML",
  },
  {
    link: "/docs/frontend/css",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    title: "CSS",
  },
  {
    link: "/docs/programming/javascript",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    title: "JavaScript",
  },
  {
    link: "/docs/programming/typescript",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    title: "TypeScript",
  },
  {
    link: "/docs/frontend/react",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    title: "React",
  },

  {
    link: "/docs/frontend/redux",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    title: "Redux",
  },

  {
    link: "/docs/fullStack/nextjs",
    title: "Next.js",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },

  {
    link: "/docs/frontend/motion",
    title: "Motion",
    image_url: "/motion.png",
  },
  {
    link: "/docs/frontend/gsap",
    title: "GSAP",
    image_url: "/gsap.svg",
  },
];

const backend = [
  {
    link: "/docs/backend/nodejs",
    title: "Node.js",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },

  {
    link: "/docs/backend/expressjs",
    title: "Express.js",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
];

const frontend_concepts = [
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

const categories = [
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

export { categories, frontend_concepts, backend, frontend, programming };
