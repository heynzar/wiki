import {
  AtomLineDuotone,
  BoxMinimalisticLineDuotone,
  CodeLineDuotone,
  CpuLineDuotone,
  CupLineDuotone,
  DatabaseLineDuotone,
  GlobalLineDuotone,
  LayersMinimalisticLineDuotone,
  MonitorSmartphoneLineDuotone,
  ServerLineDuotone,
  ShieldUpLineDuotone,
  StarsLineDuotone,
  TestTubeMinimalisticLineDuotone,
  TranslationLineDuotone,
} from "@solar-icons/react-perf";
import { Icon } from "@solar-icons/react-perf/lib/types";

export type Roadmap = {
  id?: number;
  url: string;
  name: string;
  description?: string;
  icon?: Icon | string;
  children?: Roadmap[];
};

export const roadmap: Roadmap[] = [
  {
    id: 1,
    url: "foundation",
    name: "The Foundation",
    description:
      "Understand how computers, the web, and operating systems work — then learn how engineers think, debug, and solve problems.",
    icon: CpuLineDuotone,
    children: [
      {
        id: 1,
        name: "How Systems Work",
        description: "Understand the machine before you command it",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        url: "how-systems-work",
        children: [
          {
            name: "How a Computer Works: CPU, RAM, Storage & I/O",
            url: "how-a-computer-works-cpu-ram-storage-io",
          },
          {
            name: "How Operating Systems Work: Processes, Threads & Memory",
            url: "how-operating-systems-work-processes-threads-memory",
          },
          {
            name: "How File Systems Work",
            url: "how-file-systems-work",
          },
          {
            name: "How Networking Works: IP, DNS, TCP/UDP, HTTP",
            url: "how-networking-works-ip-dns-tcp-udp-http",
          },
          {
            name: "How the Internet Works: Routers, Packets & Protocols",
            url: "how-the-internet-works-routers-packets-protocols",
          },
          {
            name: "How Browsers Work: Parsing, Rendering & the DOM",
            url: "how-browsers-work-parsing-rendering-dom",
          },
          {
            name: "How Web Applications Work: Client <-> Server Model",
            url: "how-web-applications-work-client-server-model",
          },
          {
            name: "How Servers Work: Request/Response Cycle",
            url: "how-servers-work-request-response-cycle",
          },
          {
            name: "How Computers Store Data: Binary, Hexadecimal",
            url: "how-computers-store-data-binary-hexadecimal",
          },
          {
            name: "How Everything Works: From Hardware to App",
            url: "how-everything-works-from-hardware-to-app",
          },
        ],
      },
      {
        id: 2,
        name: "The Engineer's Mindset",
        description: "Think like a software engineer from day one",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        url: "the-engineer-mindset",
        children: [
          {
            name: "What Software Engineering Actually Is",
            url: "what-software-engineering-actually-is",
          },
          {
            name: "Problem Decomposition: Breaking Big Problems Into Small Ones",
            url: "problem-decomposition-breaking-big-problems-into-small-ones",
          },
          {
            name: "Understanding Errors: Reading Stack Traces & Logs",
            url: "understanding-errors-reading-stack-traces-and-logs",
          },
          {
            name: "How to Debug Systematically (Not by Guessing)",
            url: "how-to-debug-systematically-not-by-guessing",
          },
          {
            name: "How to Read Documentation Like a Pro",
            url: "how-to-read-documentation-like-a-pro",
          },
          {
            name: "Mastering Search: Google Tricks, AI and Where to Actually Look",
            url: "mastering-search-google-tricks-and-ai",
          },
          {
            name: "Using AI Tools Effectively (Without Becoming Dependent)",
            url: "using-ai-tools-effectively-without-becoming-dependent",
          },
          {
            name: "Version Control Philosophy: Why We Track Everything",
            url: "version-control-philosophy-why-we-track-everything",
          },
          {
            name: "The Importance of Writing Clean, Readable Code",
            url: "the-importance-of-writing-clean-readable-code",
          },
          {
            name: "Building a Learning System That Compounds Over Time",
            url: "building-a-learning-system-that-compounds-over-time",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    url: "web-basics",
    name: "Web Basics",
    description:
      "Master HTML and CSS from structure to layout, accessibility, animations, and modern styling with Tailwind.",
    icon: GlobalLineDuotone,
    children: [
      {
        id: 3,
        url: "html",
        name: "HTML",
        description: "The structure and skeleton of every webpage",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        children: [
          {
            name: "HTML Cheat Sheet & Document Structure",
            url: "html-cheat-sheet-document-structure",
          },
          {
            name: "Every HTML Tag You Actually Need to Know",
            url: "every-html-tag-you-actually-need-to-know",
          },
          {
            name: "Semantic HTML: Why Structure Matters",
            url: "semantic-html-why-structure-matters",
          },
          {
            name: "Metadata & SEO: head, title, og tags, robots",
            url: "metadata-seo-head-title-og-tags-robots",
          },
          {
            name: "Forms: Inputs, Validation, Labels & Accessibility",
            url: "forms-inputs-validation-labels-accessibility",
          },
          {
            name: "Tables: When and How to Use Them",
            url: "tables-when-and-how-to-use-them",
          },
          {
            name: "HTML Accessibility: ARIA Roles, Screen Readers & Alt Text",
            url: "html-accessibility-aria-roles-screen-readers-alt-text",
          },
          {
            name: "Embedding Content: iframes, Video, Audio & SVG",
            url: "embedding-content-iframes-video-audio-svg",
          },
          {
            name: "Images on the Web: Responsive Images & Optimization",
            url: "images-on-the-web-responsive-images-optimization",
          },
          {
            name: "Inspecting HTML with Browser DevTools",
            url: "inspecting-html-with-browser-devtools",
          },
          {
            name: "Introduction to Web Components",
            url: "introduction-to-web-components",
          },
          {
            name: "HTML Email: Why It's Still Hell (Bonus)",
            url: "html-email-why-its-still-hell",
          },
        ],
      },
      {
        id: 4,
        url: "css",
        name: "CSS",
        description: "Styling, layouts, animations and visual design language",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        children: [
          {
            name: "CSS Cheat Sheet & The Cascade Explained",
            url: "css-cheat-sheet-the-cascade-explained",
          },
          {
            name: "Selectors, Specificity and Inheritance",
            url: "selectors-specificity-and-inheritance",
          },
          {
            name: "The Box Model: Margin, Padding, Border",
            url: "the-box-model-margin-padding-border",
          },
          {
            name: "Flexbox: Complete Visual Guide",
            url: "flexbox-complete-visual-guide",
          },
          {
            name: "CSS Grid: Complete Visual Guide",
            url: "css-grid-complete-visual-guide",
          },
          {
            name: "Responsive Design: Media Queries & Mobile First",
            url: "responsive-design-media-queries-mobile-first",
          },
          {
            name: "CSS Variables and Custom Properties",
            url: "css-variables-and-custom-properties",
          },
          {
            name: "Animations & Transitions: Keyframes and Timing Functions",
            url: "animations-transitions-keyframes-and-timing-functions",
          },
          {
            name: "Pseudo-classes and Pseudo-elements",
            url: "pseudo-classes-and-pseudo-elements",
          },
          {
            name: "CSS Architecture: BEM, SMACSS, Utility-First",
            url: "css-architecture-bem-smacss-utility-first",
          },
          {
            name: "TailwindCSS: Setup, Configuration & Real Usage",
            url: "tailwindcss-setup-configuration-real-usage",
          },
          {
            name: "CSS Modules: Scoped Styles Without a Runtime",
            url: "css-modules-scoped-styles-without-a-runtime",
          },
          {
            name: "Dark Mode Implementation",
            url: "dark-mode-implementation",
          },
          {
            name: "Performance: Render Blocking, Paint Layers, will-change",
            url: "performance-render-blocking-paint-layers-will-change",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    url: "programming",
    name: "Programming",
    description:
      "Build a deep base in JavaScript, TypeScript, DSA, Git, and the tools every serious engineer uses daily.",
    icon: CodeLineDuotone,
    children: [
      {
        id: 5,
        url: "javascript",
        name: "JavaScript",
        description: "The core programming language of the web and beyond",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        children: [
          { name: "JavaScript Cheat Sheet", url: "javascript-cheat-sheet" },
          {
            name: "Variables: var, let, const and Hoisting",
            url: "variables-var-let-const-hoisting",
          },
          {
            name: "Data Types, Type Coercion and typeof",
            url: "data-types-type-coercion-typeof",
          },
          {
            name: "Operators, Expressions and Control Flow",
            url: "operators-expressions-control-flow",
          },
          {
            name: "Functions: Declarations, Expressions, Arrow Functions",
            url: "functions-declarations-expressions-arrow-functions",
          },
          {
            name: "Scope, Closures and the Lexical Environment",
            url: "scope-closures-lexical-environment",
          },
          {
            name: "The Prototype Chain and Inheritance",
            url: "prototype-chain-inheritance",
          },
          {
            name: "Object-Oriented Programming in JavaScript (Classes & Prototypes)",
            url: "oop-javascript-classes-prototypes",
          },
          {
            name: "DOM Manipulation: Selecting, Creating, Modifying Elements",
            url: "dom-manipulation-elements",
          },
          {
            name: "Events: Bubbling, Capturing, Delegation",
            url: "events-bubbling-capturing-delegation",
          },
          {
            name: "The Event Loop: Call Stack, Microtasks, Macrotasks",
            url: "event-loop-call-stack-microtasks-macrotasks",
          },
          {
            name: "Asynchronous JS: Callbacks -> Promises -> Async/Await",
            url: "async-js-callbacks-promises-async-await",
          },
          {
            name: "Fetch API & Working with HTTP Requests",
            url: "fetch-api-http-requests",
          },
          {
            name: "Error Handling: try/catch, Error Types, Custom Errors",
            url: "error-handling-try-catch-custom-errors",
          },
          {
            name: "ES6-ES2024 Features You Must Know",
            url: "es6-es2024-features",
          },
          {
            name: "Modules: ESM vs CommonJS",
            url: "modules-esm-vs-commonjs",
          },
          {
            name: "Memory Management and Garbage Collection",
            url: "memory-management-garbage-collection",
          },
          {
            name: "JavaScript in the Browser vs Node.js",
            url: "javascript-browser-vs-nodejs",
          },
          {
            name: "Web APIs: localStorage, sessionStorage, Clipboard, Geolocation",
            url: "web-apis-localstorage-sessionstorage-clipboard-geolocation",
          },
          {
            name: "Regular Expressions in JavaScript",
            url: "regex-javascript",
          },
        ],
      },
      {
        id: 6,
        url: "data-structures-algorithms",
        name: "Data Structures & Algorithms",
        description:
          "The thinking tools every real software engineer must have",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        children: [
          {
            name: "Why DSA Matters for Real Engineering",
            url: "why-dsa-matters",
          },
          {
            name: "Big O Notation: Time and Space Complexity",
            url: "big-o-notation-time-space",
          },
          { name: "Arrays and Dynamic Arrays", url: "arrays-dynamic-arrays" },
          {
            name: "Linked Lists: Singly, Doubly, Circular",
            url: "linked-lists-singly-doubly-circular",
          },
          { name: "Stacks and Queues", url: "stacks-queues" },
          { name: "Hash Maps and Hash Sets", url: "hash-maps-hash-sets" },
          {
            name: "Trees: Binary Trees, BSTs, Balanced Trees",
            url: "trees-binary-bst-balanced",
          },
          { name: "Graphs: Representations, BFS, DFS", url: "graphs-bfs-dfs" },
          { name: "Heaps and Priority Queues", url: "heaps-priority-queues" },
          {
            name: "Sorting Algorithms: Bubble, Merge, Quick, Radix",
            url: "sorting-algorithms-bubble-merge-quick-radix",
          },
          {
            name: "Searching Algorithms: Binary Search",
            url: "searching-algorithms-binary-search",
          },
          {
            name: "Recursion and Divide & Conquer",
            url: "recursion-divide-conquer",
          },
          {
            name: "Dynamic Programming: Memoization & Tabulation",
            url: "dynamic-programming-memoization-tabulation",
          },
          { name: "Greedy Algorithms", url: "greedy-algorithms" },
          {
            name: "Sliding Window & Two Pointer Patterns",
            url: "sliding-window-two-pointers",
          },
          {
            name: "Solving LeetCode Problems Systematically",
            url: "solving-leetcode-systematically",
          },
        ],
      },
      {
        id: 7,
        url: "typescript",
        name: "TypeScript",
        description: "Type-safe JavaScript for large, serious applications",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        children: [
          { name: "TypeScript Cheat Sheet", url: "typescript-cheat-sheet" },
          {
            name: "Why TypeScript: The Case for Static Typing",
            url: "why-typescript-static-typing",
          },
          {
            name: "Types vs Interfaces: When to Use What",
            url: "types-vs-interfaces",
          },
          {
            name: "Primitive Types, Union, Intersection and Literal Types",
            url: "primitive-union-intersection-literal-types",
          },
          {
            name: "Enums: Numeric, String and Const Enums",
            url: "enums-numeric-string-const",
          },
          {
            name: "Generics: Writing Reusable, Type-Safe Code",
            url: "generics-type-safe-code",
          },
          {
            name: "Utility Types: Partial, Required, Pick, Omit, Record, ReturnType",
            url: "utility-types-partial-required-pick-omit-record-returntype",
          },
          {
            name: "Type Narrowing and Type Guards",
            url: "type-narrowing-type-guards",
          },
          {
            name: "Mapped Types and Conditional Types",
            url: "mapped-conditional-types",
          },
          {
            name: "Decorators and Metadata Reflection",
            url: "decorators-metadata-reflection",
          },
          {
            name: "Module Augmentation and Declaration Merging",
            url: "module-augmentation-declaration-merging",
          },
          {
            name: "tsconfig.json: Every Option Explained",
            url: "tsconfig-options-explained",
          },
          {
            name: "TypeScript with React: Props, Events, Refs",
            url: "typescript-react-props-events-refs",
          },
          {
            name: "TypeScript with Node.js and Express",
            url: "typescript-node-express",
          },
          {
            name: "Working with External APIs Using Types",
            url: "external-apis-using-types",
          },
          {
            name: "Advanced Patterns: Builder, Branded Types, Infer",
            url: "advanced-patterns-builder-branded-infer",
          },
        ],
      },
      {
        id: 8,
        url: "version-control-git",
        name: "Version Control & Git",
        description: "Master the tool every professional engineer uses daily",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        children: [
          {
            name: "Git Core Concepts: Repository, Commit, Staging",
            url: "git-core-concepts",
          },
          {
            name: "Branching: Creating, Switching, Merging",
            url: "git-branching-merging",
          },
          {
            name: "Rebasing: Interactive Rebase and History Cleanup",
            url: "git-rebasing-interactive",
          },
          { name: "Cherry-picking Commits", url: "git-cherry-pick" },
          {
            name: "Resolving Merge Conflicts Like a Pro",
            url: "git-merge-conflicts",
          },
          {
            name: "Git Stash, Reflog and Recovery",
            url: "git-stash-reflog-recovery",
          },
          {
            name: "GitHub & GitLab: Pull Requests, Issues, Reviews",
            url: "github-gitlab-prs-issues-reviews",
          },
          {
            name: "Conventional Commits and Semantic Versioning",
            url: "conventional-commits-semantic-versioning",
          },
          {
            name: "Git Tags and Release Management",
            url: "git-tags-release-management",
          },
          {
            name: "Monorepos: Turborepo and Nx",
            url: "monorepos-turborepo-nx",
          },
          {
            name: "Git Submodules and Git Worktrees",
            url: "git-submodules-worktrees",
          },
          {
            name: "Git Hooks with Husky and lint-staged",
            url: "git-hooks-husky-lint-staged",
          },
          {
            name: "GitHub Actions: Your First Workflow",
            url: "github-actions-first-workflow",
          },
        ],
      },
      {
        id: 9,
        url: "tooling-developer-environment",
        name: "Tooling & Developer Environment",
        description: "Set up a professional-grade development workflow",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pnpm/pnpm-original.svg",
        children: [
          {
            name: "Terminal & Shell: Bash, Zsh, Fish Basics",
            url: "terminal-shell-bash-zsh-fish",
          },
          {
            name: "Useful CLI Tools Every Dev Should Know",
            url: "useful-cli-tools",
          },
          {
            name: "npm vs yarn vs pnpm: Differences and When to Use Each",
            url: "npm-vs-yarn-vs-pnpm",
          },
          {
            name: "package.json Deep Dive: Scripts, Peers, Workspaces",
            url: "package-json-deep-dive",
          },
          {
            name: "Bundlers: Vite, Webpack, esbuild, Rollup Compared",
            url: "bundlers-vite-webpack-esbuild-rollup",
          },
          {
            name: "Transpilers: Babel and SWC Explained",
            url: "transpilers-babel-swc",
          },
          {
            name: "Linting with ESLint: Config, Rules, Plugins",
            url: "eslint-config-rules-plugins",
          },
          {
            name: "Formatting with Prettier: Setup and Integration",
            url: "prettier-setup-integration",
          },
          {
            name: "Editor Setup: VSCode Extensions for Productivity",
            url: "vscode-extensions-productivity",
          },
          {
            name: "Environment Variables: .env, dotenv, Secret Management",
            url: "environment-variables-dotenv-secrets",
          },
          {
            name: "Path Aliases and Module Resolution",
            url: "path-aliases-module-resolution",
          },
        ],
      },
    ],
  },

  {
    id: 4,
    url: "frontend",
    name: "Frontend",
    description:
      "Build modern UIs with React, explore Vue and Svelte, manage state, and architect scalable systems.",
    icon: AtomLineDuotone,

    children: [
      {
        id: 10,
        url: "react",
        name: "React",
        description: "Build modern and dynamic user interfaces.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",

        children: [
          { name: "React Cheat Sheet", url: "react-cheat-sheet" },
          {
            name: "Why React: The Component Model Philosophy",
            url: "why-react-the-component-model-philosophy",
          },
          {
            name: "JSX: What It Actually Compiles To",
            url: "jsx-what-it-actually-compiles-to",
          },
          {
            name: "Props, State and the Rendering Model",
            url: "props-state-and-the-rendering-model",
          },
          {
            name: "The Virtual DOM and Reconciliation",
            url: "the-virtual-dom-and-reconciliation",
          },
          {
            name: "useState and useReducer",
            url: "usestate-and-usereducer",
          },
          {
            name: "useEffect: Side Effects, Cleanup and Dependencies",
            url: "useeffect-side-effects-cleanup-and-dependencies",
          },
          {
            name: "useRef: DOM Access and Persistent Values",
            url: "useref-dom-access-and-persistent-values",
          },
          {
            name: "useMemo and useCallback: When and Why",
            url: "usememo-and-usecallback-when-and-why",
          },
          {
            name: "Custom Hooks: Extracting and Sharing Logic",
            url: "custom-hooks-extracting-and-sharing-logic",
          },
          {
            name: "Context API: Global State Without a Library",
            url: "context-api-global-state-without-a-library",
          },
          {
            name: "React Router v6: Layouts, Loaders, Actions",
            url: "react-router-v6-layouts-loaders-actions",
          },
          {
            name: "Forms: Controlled vs Uncontrolled Inputs",
            url: "forms-controlled-vs-uncontrolled-inputs",
          },
          {
            name: "React Hook Form and Zod Validation",
            url: "react-hook-form-and-zod-validation",
          },
          {
            name: "Portals, Suspense and Error Boundaries",
            url: "portals-suspense-and-error-boundaries",
          },
          {
            name: "Performance: Profiling, Virtualization, Memoization",
            url: "performance-profiling-virtualization-memoization",
          },
          {
            name: "React 19: New Hooks, Server Components, Actions",
            url: "react-19-new-hooks-server-components-actions",
          },
          {
            name: "Testing React Components with Testing Library",
            url: "testing-react-components-with-testing-library",
          },
        ],
      },

      {
        id: 11,
        url: "react-alternatives",
        name: "React Alternatives: Vue & Svelte",
        description: "Explore modern frontend frameworks beyond React.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",

        children: [
          {
            name: "Vue 3 vs React: Core Differences and Mental Model",
            url: "vue-3-vs-react-core-differences-and-mental-model",
          },
          {
            name: "Vue 3 Basics: Composition API, Reactivity, Templates",
            url: "vue-3-basics-composition-api-reactivity-templates",
          },
          {
            name: "Svelte: How It Works Without a Virtual DOM",
            url: "svelte-how-it-works-without-a-virtual-dom",
          },
          {
            name: "Svelte Basics: Stores, Reactivity, Transitions",
            url: "svelte-basics-stores-reactivity-transitions",
          },
          {
            name: "When to Pick Vue or Svelte Over React",
            url: "when-to-pick-vue-or-svelte-over-react",
          },
        ],
      },

      {
        id: 12,
        url: "state-management",
        name: "State Management",
        description: "Tame complexity in large frontend applications.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",

        children: [
          {
            name: "Local State vs Global State vs Server State",
            url: "local-state-vs-global-state-vs-server-state",
          },
          {
            name: "When NOT to Use Global State",
            url: "when-not-to-use-global-state",
          },
          {
            name: "Context API: Patterns and Pitfalls",
            url: "context-api-patterns-and-pitfalls",
          },
          {
            name: "Zustand: Simple Global State That Scales",
            url: "zustand-simple-global-state-that-scales",
          },
          {
            name: "Redux Toolkit: Actions, Slices, Thunks, DevTools",
            url: "redux-toolkit-actions-slices-thunks-devtools",
          },
          {
            name: "Jotai and Recoil: Atomic State Model",
            url: "jotai-and-recoil-atomic-state-model",
          },
          {
            name: "TanStack Query: Fetching, Caching, Syncing Server State",
            url: "tanstack-query-fetching-caching-syncing-server-state",
          },
          {
            name: "Optimistic Updates and Background Refetching",
            url: "optimistic-updates-and-background-refetching",
          },
          {
            name: "State Machines with XState",
            url: "state-machines-with-xstate",
          },
          {
            name: "Choosing the Right State Tool for the Right Problem",
            url: "choosing-the-right-state-tool-for-the-right-problem",
          },
        ],
      },

      {
        id: 13,
        url: "advanced-frontend-architecture",
        name: "Advanced Frontend Architecture",
        description:
          "Structure large frontend codebases like a senior engineer.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg",

        children: [
          {
            name: "Folder Structure Patterns for Scale",
            url: "folder-structure-patterns-for-scale",
          },
          {
            name: "Feature-Sliced Design Architecture",
            url: "feature-sliced-design-architecture",
          },
          {
            name: "Design Systems: Building Component Libraries",
            url: "design-systems-building-component-libraries",
          },
          {
            name: "Storybook: Developing and Documenting Components in Isolation",
            url: "storybook-developing-and-documenting-components-in-isolation",
          },
          {
            name: "Visual Regression Testing with Chromatic and Percy",
            url: "visual-regression-testing-with-chromatic-and-percy",
          },
          {
            name: "Compound Component Pattern",
            url: "compound-component-pattern",
          },
          {
            name: "Render Props and Higher-Order Components",
            url: "render-props-and-higher-order-components",
          },
          {
            name: "Headless UI: Radix, Headless UI, Ariakit",
            url: "headless-ui-radix-headless-ui-ariakit",
          },
          {
            name: "Accessibility in Real Applications (Beyond the Basics)",
            url: "accessibility-in-real-applications-beyond-the-basics",
          },
          {
            name: "Internationalization (i18n) with react-i18next",
            url: "internationalization-i18n-with-react-i18next",
          },
          {
            name: "Frontend Performance: Core Web Vitals in Practice",
            url: "frontend-performance-core-web-vitals-in-practice",
          },
          {
            name: "Code Splitting, Lazy Loading and Bundle Analysis",
            url: "code-splitting-lazy-loading-and-bundle-analysis",
          },
          {
            name: "Web Workers for Offloading Heavy Computation",
            url: "web-workers-for-offloading-heavy-computation",
          },
          {
            name: "Progressive Web Apps (PWA): Service Workers, Manifest, Offline",
            url: "progressive-web-apps-pwa-service-workers-manifest-offline",
          },
        ],
      },
    ],
  },

  {
    id: 5,
    url: "fullstack",
    name: "Fullstack",
    description:
      "Go fullstack with Next.js and Remix, server components, data fetching strategies and server actions.",
    icon: LayersMinimalisticLineDuotone,

    children: [
      {
        id: 14,
        url: "nextjs",
        name: "Next.js",
        description: "Build production-grade fullstack React apps.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",

        children: [
          {
            name: "Next.js Architecture: How It Works Under the Hood",
            url: "nextjs-architecture-how-it-works-under-the-hood",
          },
          {
            name: "App Router vs Pages Router: A Complete Comparison",
            url: "app-router-vs-pages-router-a-complete-comparison",
          },
          {
            name: "File-Based Routing: Layouts, Pages, Loading, Error",
            url: "file-based-routing-layouts-pages-loading-error",
          },
          {
            name: "Server Components vs Client Components: The Mental Model",
            url: "server-components-vs-client-components-the-mental-model",
          },
          {
            name: "Data Fetching: fetch(), cache(), and revalidate",
            url: "data-fetching-fetch-cache-and-revalidate",
          },
          {
            name: "SSR, SSG, ISR and CSR — Choosing the Right Strategy",
            url: "ssr-ssg-isr-and-csr-choosing-the-right-strategy",
          },
          {
            name: "Server Actions: Forms and Mutations Without an API",
            url: "server-actions-forms-and-mutations-without-an-api",
          },
          {
            name: "API Routes: Building Endpoints Inside Next.js",
            url: "api-routes-building-endpoints-inside-nextjs",
          },
          {
            name: "Middleware: Auth Guards, Redirects, Geo-Routing",
            url: "middleware-auth-guards-redirects-geo-routing",
          },
          {
            name: "Edge Runtime vs Node.js Runtime",
            url: "edge-runtime-vs-nodejs-runtime",
          },
          {
            name: "Image Optimization with next/image",
            url: "image-optimization-with-next-image",
          },
          {
            name: "Font Optimization with next/font",
            url: "font-optimization-with-next-font",
          },
          {
            name: "Metadata API and Dynamic SEO",
            url: "metadata-api-and-dynamic-seo",
          },
          {
            name: "Caching, Revalidation and the Next.js Cache Model",
            url: "caching-revalidation-and-the-nextjs-cache-model",
          },
          {
            name: "Streaming and Suspense in the App Router",
            url: "streaming-and-suspense-in-the-app-router",
          },
          {
            name: "Deployment on Vercel vs Self-Hosted",
            url: "deployment-on-vercel-vs-self-hosted",
          },
          {
            name: "Internationalization with Next.js",
            url: "internationalization-with-nextjs",
          },
        ],
      },

      {
        id: 15,
        url: "remix",
        name: "Remix",
        description: "Build fast web apps using remix framework.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/remix/remix-original.svg",

        children: [
          {
            name: "Remix vs Next.js: When to Pick Which",
            url: "remix-vs-nextjs-when-to-pick-which",
          },
          {
            name: "Remix Core Concepts: Loaders, Actions, Forms",
            url: "remix-core-concepts-loaders-actions-forms",
          },
          {
            name: "Nested Routing and Layout Nesting in Remix",
            url: "nested-routing-and-layout-nesting-in-remix",
          },
          {
            name: "Error Boundaries and CatchBoundaries in Remix",
            url: "error-boundaries-and-catchboundaries-in-remix",
          },
          {
            name: "Remix Deployment: Vercel, Fly.io, Cloudflare Pages",
            url: "remix-deployment-vercel-flyio-cloudflare-pages",
          },
        ],
      },
    ],
  },

  {
    id: 6,
    url: "databases",
    name: "Databases",
    icon: DatabaseLineDuotone,
    description:
      "Design, query, and scale databases using SQL, NoSQL, Redis, and modern ORMs.",

    children: [
      {
        id: 16,
        url: "databases",
        name: "Databases",
        description: "Store, model, query and scale your application data.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",

        children: [
          {
            name: "Relational vs Non-Relational: How to Choose",
            url: "relational-vs-non-relational-how-to-choose",
          },
          {
            name: "SQL Fundamentals: SELECT, INSERT, UPDATE, DELETE",
            url: "sql-fundamentals-select-insert-update-delete",
          },
          {
            name: "Joins: INNER, LEFT, RIGHT, FULL, CROSS",
            url: "joins-inner-left-right-full-cross",
          },
          {
            name: "Subqueries, CTEs and Window Functions",
            url: "subqueries-ctes-and-window-functions",
          },
          {
            name: "PostgreSQL: Setup, Config and Advanced Features",
            url: "postgresql-setup-config-and-advanced-features",
          },
          {
            name: "MySQL: Differences from PostgreSQL",
            url: "mysql-differences-from-postgresql",
          },
          {
            name: "MongoDB: Document Model, Collections, Queries",
            url: "mongodb-document-model-collections-queries",
          },
          {
            name: "SQLite for Local and Edge Use Cases: Turso, Cloudflare D1",
            url: "sqlite-for-local-and-edge-use-cases-turso-cloudflare-d1",
          },
          {
            name: "Database Design: Normalization (1NF, 2NF, 3NF)",
            url: "database-design-normalization-1nf-2nf-3nf",
          },
          {
            name: "Entity-Relationship Diagrams (ERDs)",
            url: "entity-relationship-diagrams-erds",
          },
          {
            name: "Indexing: B-Tree, Hash, Partial, Composite Indexes",
            url: "indexing-b-tree-hash-partial-composite-indexes",
          },
          {
            name: "Query Optimization and EXPLAIN ANALYZE",
            url: "query-optimization-and-explain-analyze",
          },
          {
            name: "ACID Properties and Transactions",
            url: "acid-properties-and-transactions",
          },
          {
            name: "Concurrency: Locks, Deadlocks, Isolation Levels",
            url: "concurrency-locks-deadlocks-isolation-levels",
          },
          {
            name: "Redis: Caching, TTL, Pub/Sub, Sorted Sets",
            url: "redis-caching-ttl-pub-sub-sorted-sets",
          },
          {
            name: "Database Migrations: Strategy and Best Practices",
            url: "database-migrations-strategy-and-best-practices",
          },
          {
            name: "Backups, Replication and High Availability",
            url: "backups-replication-and-high-availability",
          },
          {
            name: "Choosing the Right Database for the Right Problem",
            url: "choosing-the-right-database-for-the-right-problem",
          },
        ],
      },

      {
        id: 17,
        url: "orms-query-builders",
        name: "ORMs & Query Builders",
        description: "Interact with databases using type-safe.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",

        children: [
          {
            name: "ORMs vs Query Builders vs Raw SQL: Trade-offs",
            url: "orms-vs-query-builders-vs-raw-sql-trade-offs",
          },
          {
            name: "Prisma: Schema-First ORM Setup",
            url: "prisma-schema-first-orm-setup",
          },
          {
            name: "Prisma: Relations, Nested Writes, Transactions",
            url: "prisma-relations-nested-writes-transactions",
          },
          {
            name: "Prisma: Migrations Workflow",
            url: "prisma-migrations-workflow",
          },
          {
            name: "Drizzle ORM: Schema Definition and Type Safety",
            url: "drizzle-orm-schema-definition-and-type-safety",
          },
          {
            name: "Drizzle: Migrations and Drizzle Studio",
            url: "drizzle-migrations-and-drizzle-studio",
          },
          {
            name: "Kysely: Type-Safe Query Builder",
            url: "kysely-type-safe-query-builder",
          },
          {
            name: "Connection Pooling with PgBouncer and Prisma Accelerate",
            url: "connection-pooling-with-pgbouncer-and-prisma-accelerate",
          },
          {
            name: "N+1 Query Problem and How to Fix It",
            url: "n-plus-1-query-problem-and-how-to-fix-it",
          },
          {
            name: "Seeding Databases for Development and Testing",
            url: "seeding-databases-for-development-and-testing",
          },
        ],
      },
    ],
  },

  {
    id: 7,
    url: "backend",
    name: "Backend",
    icon: ServerLineDuotone,
    description:
      "Build production APIs, implement auth flows and handle real-time communication.",

    children: [
      {
        id: 18,
        url: "backend-fundamentals",
        name: "Backend Fundamentals",
        description:
          "Build the server-side logic that powers every application.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",

        children: [
          {
            name: "How HTTP Really Works: Methods, Headers, Status Codes, Body",
            url: "how-http-really-works-methods-headers-status-codes-body",
          },
          {
            name: "The Request Lifecycle in a Node.js Server",
            url: "the-request-lifecycle-in-a-nodejs-server",
          },
          {
            name: "Node.js Runtime: Event Loop Deep Dive",
            url: "nodejs-runtime-event-loop-deep-dive",
          },
          {
            name: "Node.js Streams and Buffers",
            url: "nodejs-streams-and-buffers",
          },
          {
            name: "Node.js Worker Threads and Child Processes",
            url: "nodejs-worker-threads-and-child-processes",
          },
          {
            name: "Express.js: Routing, Middleware, Error Handling",
            url: "expressjs-routing-middleware-error-handling",
          },
          {
            name: "Fastify: Performance-First Alternative to Express",
            url: "fastify-performance-first-alternative-to-express",
          },
          {
            name: "Hono: Edge-Ready Lightweight Framework",
            url: "hono-edge-ready-lightweight-framework",
          },
          {
            name: "REST API Design: Principles, Conventions, Versioning",
            url: "rest-api-design-principles-conventions-versioning",
          },
          {
            name: "CRUD Operations and Resource Modeling",
            url: "crud-operations-and-resource-modeling",
          },
          {
            name: "Request Validation with Zod",
            url: "request-validation-with-zod",
          },
          {
            name: "File Uploads: Multipart, S3 Pre-signed URLs",
            url: "file-uploads-multipart-s3-pre-signed-urls",
          },
          {
            name: "Pagination: Cursor-Based vs Offset-Based",
            url: "pagination-cursor-based-vs-offset-based",
          },
          {
            name: "Rate Limiting and Throttling",
            url: "rate-limiting-and-throttling",
          },
          {
            name: "Logging with Pino and Winston",
            url: "logging-with-pino-and-winston",
          },
          {
            name: "Error Handling Architecture",
            url: "error-handling-architecture",
          },
          {
            name: "Background Jobs with BullMQ and Redis",
            url: "background-jobs-with-bullmq-and-redis",
          },
          {
            name: "Scheduled Tasks with Cron",
            url: "scheduled-tasks-with-cron",
          },
          {
            name: "Email Sending: Nodemailer, Resend, Postmark",
            url: "email-sending-nodemailer-resend-postmark",
          },
        ],
      },

      {
        id: 19,
        url: "auth",
        name: "Authentication & Authorization",
        description:
          "Identity, security and access control for real applications.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg",

        children: [
          {
            name: "Authentication vs Authorization: The Difference",
            url: "authentication-vs-authorization-the-difference",
          },
          {
            name: "Sessions and Cookies: How They Work",
            url: "sessions-and-cookies-how-they-work",
          },
          {
            name: "JWT: Structure, Signing, Verification, Expiry",
            url: "jwt-structure-signing-verification-expiry",
          },
          {
            name: "OAuth 2.0: The Full Flow Explained (Authorization Code, PKCE)",
            url: "oauth-2-full-flow-explained-authorization-code-pkce",
          },
          {
            name: "OpenID Connect and Identity Tokens",
            url: "openid-connect-and-identity-tokens",
          },
          {
            name: "Auth.js (NextAuth): Setup, Providers, Callbacks",
            url: "authjs-nextauth-setup-providers-callbacks",
          },
          {
            name: "Clerk: Managed Auth with Advanced Features",
            url: "clerk-managed-auth-with-advanced-features",
          },
          {
            name: "Lucia Auth: Lightweight DIY Auth",
            url: "lucia-auth-lightweight-diy-auth",
          },
          {
            name: "Implementing RBAC: Roles, Permissions, Policies",
            url: "implementing-rbac-roles-permissions-policies",
          },
          {
            name: "Multi-Factor Authentication: TOTP, WebAuthn, Passkeys",
            url: "multi-factor-authentication-totp-webauthn-passkeys",
          },
          {
            name: "Password Hashing: bcrypt, argon2, scrypt",
            url: "password-hashing-bcrypt-argon2-scrypt",
          },
          {
            name: "Refresh Tokens and Token Rotation",
            url: "refresh-tokens-and-token-rotation",
          },
          {
            name: "Auth Security: Timing Attacks, Brute Force, Account Takeover",
            url: "auth-security-timing-attacks-brute-force-account-takeover",
          },
          {
            name: "API Key Management and Hashed Storage",
            url: "api-key-management-and-hashed-storage",
          },
        ],
      },

      {
        id: 20,
        url: "apis-protocols",
        name: "APIs & Communication Protocols",
        description: "Design and consume APIs across every major paradigm.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",

        children: [
          {
            name: "REST API Best Practices: Naming, Status Codes, Errors",
            url: "rest-api-best-practices-naming-status-codes-errors",
          },
          {
            name: "API Documentation with OpenAPI and Swagger UI",
            url: "api-documentation-with-openapi-and-swagger-ui",
          },
          {
            name: "GraphQL: Schema, Resolvers, Queries, Mutations",
            url: "graphql-schema-resolvers-queries-mutations",
          },
          {
            name: "GraphQL: DataLoader, N+1, Subscriptions",
            url: "graphql-dataloader-n-plus-1-subscriptions",
          },
          {
            name: "tRPC: End-to-End Type Safety Without a Schema",
            url: "trpc-end-to-end-type-safety-without-a-schema",
          },
          {
            name: "gRPC: Protocol Buffers, Services and Use Cases",
            url: "grpc-protocol-buffers-services-and-use-cases",
          },
          {
            name: "WebSockets: Full-Duplex Communication",
            url: "websockets-full-duplex-communication",
          },
          {
            name: "Socket.io: Rooms, Namespaces, Broadcasting",
            url: "socketio-rooms-namespaces-broadcasting",
          },
          {
            name: "Server-Sent Events (SSE) for Streaming Data",
            url: "server-sent-events-sse-for-streaming-data",
          },
          {
            name: "Webhooks: Receiving, Validating and Retrying",
            url: "webhooks-receiving-validating-and-retrying",
          },
          {
            name: "API Versioning Strategies",
            url: "api-versioning-strategies",
          },
          {
            name: "API Gateway Pattern",
            url: "api-gateway-pattern",
          },
          {
            name: "Rate Limiting and Quota Design",
            url: "rate-limiting-and-quota-design",
          },
        ],
      },
    ],
  },

  {
    id: 8,
    url: "testing",
    name: "Testing",
    icon: TestTubeMinimalisticLineDuotone,
    description:
      "Write unit, integration, and E2E tests, then wire them into CI pipelines to ship with confidence.",

    children: [
      {
        id: 21,
        url: "unit-integration-testing",
        name: "Unit & Integration Testing",
        description: "Build confidence with fast unit tests.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg",
        children: [
          {
            name: "The Testing Pyramid: Unit, Integration, E2E",
            url: "the-testing-pyramid-unit-integration-e2e",
          },
          {
            name: "What Makes Code Testable",
            url: "what-makes-code-testable",
          },
          {
            name: "Vitest: Setup, Config, Matchers",
            url: "vitest-setup-config-matchers",
          },
          {
            name: "Jest vs Vitest: Differences and Migration",
            url: "jest-vs-vitest-differences-and-migration",
          },
          {
            name: "Unit Testing Pure Functions and Utilities",
            url: "unit-testing-pure-functions-and-utilities",
          },
          {
            name: "Mocking: Modules, APIs, Timers and Dates",
            url: "mocking-modules-apis-timers-and-dates",
          },
          {
            name: "React Testing Library: Queries, Events, Async",
            url: "react-testing-library-queries-events-async",
          },
          {
            name: "Testing Custom Hooks",
            url: "testing-custom-hooks",
          },
          {
            name: "Integration Testing: Testing API + Database Together",
            url: "integration-testing-testing-api-database-together",
          },
          {
            name: "Contract Testing with Pact",
            url: "contract-testing-with-pact",
          },
          {
            name: "Test-Driven Development (TDD) in Practice",
            url: "test-driven-development-tdd-in-practice",
          },
          {
            name: "Code Coverage: Istanbul, V8 and What to Actually Measure",
            url: "code-coverage-istanbul-v8-and-what-to-actually-measure",
          },
          {
            name: "Snapshot Testing: When It Helps and When It Hurts",
            url: "snapshot-testing-when-it-helps-and-when-it-hurts",
          },
        ],
      },

      {
        id: 22,
        url: "e2e-ci-testing",
        name: "E2E & CI Testing",
        description: "Automate browser flows and continuous integration.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
        children: [
          {
            name: "Playwright: E2E Tests, Selectors, Assertions",
            url: "playwright-e2e-tests-selectors-assertions",
          },
          {
            name: "Cypress: Alternative E2E with Time Travel Debugging",
            url: "cypress-alternative-e2e-with-time-travel-debugging",
          },
          {
            name: "Visual Regression Testing with Chromatic and Percy",
            url: "visual-regression-testing-with-chromatic-and-percy",
          },
          {
            name: "Testing in CI: Running Tests on Every Push",
            url: "testing-in-ci-running-tests-on-every-push",
          },
          {
            name: "Parallelizing Tests for Faster Pipelines",
            url: "parallelizing-tests-for-faster-pipelines",
          },
          {
            name: "Performance Testing and Load Testing (k6)",
            url: "performance-testing-and-load-testing-k6",
          },
        ],
      },
    ],
  },

  {
    id: 9,
    url: "devops",
    name: "DevOps",
    icon: BoxMinimalisticLineDuotone,
    description:
      "Containerize with Docker, automate with CI/CD, and deploy to the cloud using Terraform/Kubernetes.",

    children: [
      {
        id: 23,
        url: "linux-cli",
        name: "Linux & Command Line",
        description: "Operate servers and infrastructure like an engineer.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",

        children: [
          {
            name: "Linux File System Hierarchy",
            url: "linux-file-system-hierarchy",
          },
          {
            name: "Essential Linux Commands Every Dev Must Know",
            url: "essential-linux-commands-every-dev-must-know",
          },
          {
            name: "File Permissions: chmod, chown, umask",
            url: "file-permissions-chmod-chown-umask",
          },
          {
            name: "Process Management: ps, kill, top, systemd",
            url: "process-management-ps-kill-top-systemd",
          },
          {
            name: "Networking Commands: curl, wget, netstat, ss, dig, ping",
            url: "networking-commands-curl-wget-netstat-ss-dig-ping",
          },
          {
            name: "SSH: Key Generation, Config, Tunneling, Reverse Proxies",
            url: "ssh-key-generation-config-tunneling-reverse-proxies",
          },
          {
            name: "Cron Jobs and Scheduled Tasks",
            url: "cron-jobs-and-scheduled-tasks",
          },
          {
            name: "Shell Scripting: Bash Variables, Loops, Functions",
            url: "shell-scripting-bash-variables-loops-functions",
          },
          {
            name: "Package Managers: apt, yum, brew",
            url: "package-managers-apt-yum-brew",
          },
          {
            name: "Environment Variables and Shell Config (.bashrc, .zshrc)",
            url: "environment-variables-and-shell-config-bashrc-zshrc",
          },
          {
            name: "Text Processing: grep, awk, sed, jq",
            url: "text-processing-grep-awk-sed-jq",
          },
          {
            name: "Log Viewing: tail, journalctl, less",
            url: "log-viewing-tail-journalctl-less",
          },
        ],
      },

      {
        id: 24,
        url: "docker",
        name: "Docker & Containerization",
        description: "Package and run software consistently anywhere.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",

        children: [
          {
            name: "Why Docker: The Problem It Solves",
            url: "why-docker-the-problem-it-solves",
          },
          {
            name: "Images vs Containers vs Registries",
            url: "images-vs-containers-vs-registries",
          },
          {
            name: "Writing a Dockerfile: FROM, RUN, COPY, CMD, ENTRYPOINT",
            url: "writing-a-dockerfile-from-run-copy-cmd-entrypoint",
          },
          {
            name: "Dockerfile Best Practices: Layer Caching, Multi-Stage Builds",
            url: "dockerfile-best-practices-layer-caching-multi-stage-builds",
          },
          {
            name: "Docker Compose: Multi-Container Applications",
            url: "docker-compose-multi-container-applications",
          },
          {
            name: "Volumes and Bind Mounts",
            url: "volumes-and-bind-mounts",
          },
          {
            name: "Networking Between Containers",
            url: "networking-between-containers",
          },
          {
            name: "Environment Variables in Docker",
            url: "environment-variables-in-docker",
          },
          {
            name: "Publishing to Docker Hub and GitHub Container Registry",
            url: "publishing-to-docker-hub-and-github-container-registry",
          },
          {
            name: "Docker in Development vs Production",
            url: "docker-in-development-vs-production",
          },
          {
            name: "Debugging Containers: exec, logs, inspect",
            url: "debugging-containers-exec-logs-inspect",
          },
        ],
      },

      {
        id: 25,
        url: "cicd",
        name: "CI/CD & Automation",
        description: "Ship faster and safer with automated pipelines.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",

        children: [
          {
            name: "What is CI/CD and Why It Matters",
            url: "what-is-cicd-and-why-it-matters",
          },
          {
            name: "GitHub Actions: Syntax, Events, Jobs, Steps",
            url: "github-actions-syntax-events-jobs-steps",
          },
          {
            name: "Building a CI Pipeline: Lint, Test, Build",
            url: "building-a-ci-pipeline-lint-test-build",
          },
          {
            name: "Building a CD Pipeline: Deploy on Merge",
            url: "building-a-cd-pipeline-deploy-on-merge",
          },
          {
            name: "Matrix Builds and Parallelism",
            url: "matrix-builds-and-parallelism",
          },
          {
            name: "Caching Dependencies in GitHub Actions",
            url: "caching-dependencies-in-github-actions",
          },
          {
            name: "Secrets Management in Pipelines",
            url: "secrets-management-in-pipelines",
          },
          {
            name: "Environments: Preview, Staging, Production",
            url: "environments-preview-staging-production",
          },
          {
            name: "Release Automation with Changesets and Semantic Release",
            url: "release-automation-with-changesets-and-semantic-release",
          },
          {
            name: "GitLab CI: Equivalent Concepts",
            url: "gitlab-ci-equivalent-concepts",
          },
          {
            name: "Blue/Green and Canary Deployments",
            url: "blue-green-and-canary-deployments",
          },
        ],
      },

      {
        id: 26,
        url: "cloud-infrastructure",
        name: "Cloud & Infrastructure",
        description: "Deploy and scale applications.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",

        children: [
          {
            name: "Cloud Computing Models: IaaS, PaaS, SaaS, FaaS",
            url: "cloud-computing-models-iaas-paas-saas-faas",
          },
          {
            name: "AWS Core Services: EC2, VPC, IAM, S3, RDS, CloudFront",
            url: "aws-core-services-ec2-vpc-iam-s3-rds-cloudfront",
          },
          {
            name: "AWS Lambda and Serverless Architecture",
            url: "aws-lambda-and-serverless-architecture",
          },
          {
            name: "Google Cloud Platform: GCS, Cloud Run, Firebase",
            url: "google-cloud-platform-gcs-cloud-run-firebase",
          },
          {
            name: "Azure: App Service, Functions, Blob Storage",
            url: "azure-app-service-functions-blob-storage",
          },
          {
            name: "CDN and Edge Networks: Cloudflare, Fastly",
            url: "cdn-and-edge-networks-cloudflare-fastly",
          },
          {
            name: "DNS Management and Domain Configuration",
            url: "dns-management-and-domain-configuration",
          },
          {
            name: "Load Balancers: ALB, Nginx, Caddy",
            url: "load-balancers-alb-nginx-caddy",
          },
          {
            name: "Nginx as a Reverse Proxy: SSL, proxy_pass, Caching Headers",
            url: "nginx-as-a-reverse-proxy-ssl-proxy-pass-caching-headers",
          },
          {
            name: "Infrastructure as Code with Terraform",
            url: "infrastructure-as-code-with-terraform",
          },
          {
            name: "Kubernetes: Pods, Deployments, Services, Ingress",
            url: "kubernetes-pods-deployments-services-ingress",
          },
          {
            name: "Managed Kubernetes: EKS, GKE, AKS",
            url: "managed-kubernetes-eks-gke-aks",
          },
          {
            name: "Secrets Management: AWS Secrets Manager, Vault",
            url: "secrets-management-aws-secrets-manager-vault",
          },
          {
            name: "Cost Optimization in the Cloud",
            url: "cost-optimization-in-the-cloud",
          },
        ],
      },
    ],
  },

  {
    id: 10,
    url: "security",
    name: "Security",
    icon: ShieldUpLineDuotone,
    description:
      "Secure your apps, understand networking deeply, and harden your production infrastructure.",

    children: [
      {
        id: 27,
        url: "security-networking-deep",
        name: "Security & Networking Deep Dive",
        description: "How systems are attacked and how to defend them.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redhat/redhat-original.svg",
        children: [
          {
            name: "Networking Fundamentals: OSI Model, IP, TCP, UDP",
            url: "networking-fundamentals-osi-model-ip-tcp-udp",
          },
          {
            name: "TLS/SSL: Certificates, Handshake, HTTPS",
            url: "tls-ssl-certificates-handshake-https",
          },
          {
            name: "DNS Deep Dive: Records, TTL, CDN Setup",
            url: "dns-deep-dive-records-ttl-cdn-setup",
          },
          {
            name: "Firewalls, Proxies and Reverse Proxies",
            url: "firewalls-proxies-and-reverse-proxies",
          },
          {
            name: "OWASP Top 10: The Most Critical Security Risks",
            url: "owasp-top-10-the-most-critical-security-risks",
          },
          {
            name: "SQL Injection: Attack and Defense",
            url: "sql-injection-attack-and-defense",
          },
          {
            name: "XSS (Cross-Site Scripting): Types, Payloads, Prevention",
            url: "xss-cross-site-scripting-types-payloads-prevention",
          },
          {
            name: "CSRF: How It Works and How to Prevent It",
            url: "csrf-how-it-works-and-how-to-prevent-it",
          },
          {
            name: "Clickjacking and Frame Busting",
            url: "clickjacking-and-frame-busting",
          },
          {
            name: "Content Security Policy (CSP) in Depth",
            url: "content-security-policy-csp-in-depth",
          },
          {
            name: "Secure HTTP Headers: HSTS, X-Frame-Options, CORP, COEP",
            url: "secure-http-headers-hsts-x-frame-options-corp-coep",
          },
          {
            name: "Rate Limiting and DDoS Mitigation",
            url: "rate-limiting-and-ddos-mitigation",
          },
          {
            name: "Dependency Vulnerabilities: npm audit, Snyk, Dependabot",
            url: "dependency-vulnerabilities-npm-audit-snyk-dependabot",
          },
          {
            name: "Secrets Scanning and Credential Leak Prevention",
            url: "secrets-scanning-and-credential-leak-prevention",
          },
          {
            name: "Subdomain Takeover: How It Happens and How to Prevent It",
            url: "subdomain-takeover-how-it-happens-and-how-to-prevent-it",
          },
          {
            name: "Supply Chain Attacks: What They Are and How to Defend",
            url: "supply-chain-attacks-what-they-are-and-how-to-defend",
          },
          {
            name: "Penetration Testing Basics",
            url: "penetration-testing-basics",
          },
          {
            name: "Security Headers Checklist for Production Apps",
            url: "security-headers-checklist-for-production-apps",
          },
        ],
      },
    ],
  },

  {
    id: 11,
    url: "ecosystem",
    name: "Ecosystem",
    icon: MonitorSmartphoneLineDuotone,
    description:
      "Extend your skills to mobile with React Native and desktop with Electron and Tauri.",

    children: [
      {
        id: 28,
        url: "react-native",
        name: "Mobile Development with React Native",
        description: "Build cross-platform mobile apps.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",

        children: [
          {
            name: "React Native vs Expo: Which to Use",
            url: "react-native-vs-expo-which-to-use",
          },
          {
            name: "How React Native Works Under the Hood (New Architecture)",
            url: "how-react-native-works-under-the-hood-new-architecture",
          },
          {
            name: "Core Components: View, Text, Image, ScrollView, FlatList",
            url: "core-components-view-text-image-scrollview-flatlist",
          },
          {
            name: "Navigation with Expo Router and React Navigation",
            url: "navigation-with-expo-router-and-react-navigation",
          },
          {
            name: "Styling in React Native: StyleSheet vs NativeWind",
            url: "styling-in-react-native-stylesheet-vs-nativewind",
          },
          {
            name: "Device APIs: Camera, GPS, Notifications, Contacts",
            url: "device-apis-camera-gps-notifications-contacts",
          },
          {
            name: "Animations with Reanimated 3",
            url: "animations-with-reanimated-3",
          },
          {
            name: "Gestures with React Native Gesture Handler",
            url: "gestures-with-react-native-gesture-handler",
          },
          {
            name: "State Management in React Native Apps",
            url: "state-management-in-react-native-apps",
          },
          {
            name: "Offline Support and Local Storage (MMKV, SQLite)",
            url: "offline-support-and-local-storage-mmkv-sqlite",
          },
          {
            name: "Push Notifications with Expo and Firebase",
            url: "push-notifications-with-expo-and-firebase",
          },
          {
            name: "App Store and Play Store Submission",
            url: "app-store-and-play-store-submission",
          },
          {
            name: "Over-the-Air Updates with Expo EAS",
            url: "over-the-air-updates-with-expo-eas",
          },
          {
            name: "React Native vs Flutter: A Comparison",
            url: "react-native-vs-flutter-a-comparison",
          },
        ],
      },

      {
        id: 29,
        url: "desktop",
        name: "Desktop App Development",
        description: "Build cross-platform desktop applications.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg",

        children: [
          {
            name: "Desktop App Options: Electron vs Tauri — How to Choose",
            url: "desktop-app-options-electron-vs-tauri-how-to-choose",
          },
          {
            name: "Electron: Architecture, Main vs Renderer Process",
            url: "electron-architecture-main-vs-renderer-process",
          },
          {
            name: "Electron: IPC Communication and Security",
            url: "electron-ipc-communication-and-security",
          },
          {
            name: "Tauri: Rust-Powered Lightweight Alternative to Electron",
            url: "tauri-rust-powered-lightweight-alternative-to-electron",
          },
          {
            name: "Native OS Integration: File System, Tray, Notifications",
            url: "native-os-integration-file-system-tray-notifications",
          },
          {
            name: "Auto-Updates and Distribution",
            url: "auto-updates-and-distribution",
          },
          {
            name: "Packaging for Windows, macOS and Linux",
            url: "packaging-for-windows-macos-and-linux",
          },
          {
            name: "Performance Considerations in Desktop Apps",
            url: "performance-considerations-in-desktop-apps",
          },
          {
            name: "When to Build Desktop vs Web",
            url: "when-to-build-desktop-vs-web",
          },
        ],
      },
    ],
  },

  {
    id: 12,
    url: "system-design",
    name: "System Design",
    icon: TranslationLineDuotone,
    description:
      "Design scalable systems, optimize performance, and apply clean software architecture patterns.",

    children: [
      {
        id: 30,
        url: "performance-optimization",
        name: "Performance & Optimization",
        description: "Make every layer of your stack faster and leaner.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg",

        children: [
          {
            name: "Core Web Vitals: LCP, CLS, INP — What They Mean in Practice",
            url: "core-web-vitals-lcp-cls-inp-what-they-mean-in-practice",
          },
          {
            name: "Browser Performance: Render Blocking, Paint, Compositing",
            url: "browser-performance-render-blocking-paint-compositing",
          },
          {
            name: "JavaScript Performance: Profiling in Chrome DevTools",
            url: "javascript-performance-profiling-in-chrome-devtools",
          },
          {
            name: "React Performance: Memo, Virtualization, Profiler",
            url: "react-performance-memo-virtualization-profiler",
          },
          {
            name: "Bundle Analysis: Finding and Eliminating Bloat",
            url: "bundle-analysis-finding-and-eliminating-bloat",
          },
          {
            name: "Image Optimization: Formats, Sizes, Lazy Loading",
            url: "image-optimization-formats-sizes-lazy-loading",
          },
          {
            name: "Font Loading Strategies",
            url: "font-loading-strategies",
          },
          {
            name: "Database Performance: Query Plans, Index Usage",
            url: "database-performance-query-plans-index-usage",
          },
          {
            name: "Caching Strategies: Browser, CDN, Server, Application",
            url: "caching-strategies-browser-cdn-server-application",
          },
          {
            name: "HTTP/2 and HTTP/3: Multiplexing and QUIC",
            url: "http2-and-http3-multiplexing-and-quic",
          },
          {
            name: "Edge Computing and Latency Optimization",
            url: "edge-computing-and-latency-optimization",
          },
          {
            name: "Profiling Node.js: CPU Profiles and Heap Snapshots",
            url: "profiling-nodejs-cpu-profiles-and-heap-snapshots",
          },
        ],
      },

      {
        id: 31,
        url: "monitoring-observability",
        name: "Monitoring & Observability",
        description: "Know exactly what your production system is doing.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",

        children: [
          {
            name: "The Three Pillars: Logs, Metrics, Traces",
            url: "the-three-pillars-logs-metrics-traces",
          },
          {
            name: "Structured Logging with Pino",
            url: "structured-logging-with-pino",
          },
          {
            name: "Distributed Tracing with OpenTelemetry",
            url: "distributed-tracing-with-opentelemetry",
          },
          {
            name: "Error Tracking with Sentry: Setup and Source Maps",
            url: "error-tracking-with-sentry-setup-and-source-maps",
          },
          {
            name: "Uptime Monitoring: Better Uptime, Checkly",
            url: "uptime-monitoring-better-uptime-checkly",
          },
          {
            name: "Metrics Collection with Prometheus",
            url: "metrics-collection-with-prometheus",
          },
          {
            name: "Dashboards with Grafana",
            url: "dashboards-with-grafana",
          },
          {
            name: "Alerting: When and What to Alert On",
            url: "alerting-when-and-what-to-alert-on",
          },
          {
            name: "Log Aggregation: Loki, Datadog, Logtail",
            url: "log-aggregation-loki-datadog-logtail",
          },
          {
            name: "APM Tools: Datadog APM, New Relic",
            url: "apm-tools-datadog-apm-new-relic",
          },
          {
            name: "Health Check Endpoints and Readiness Probes",
            url: "health-check-endpoints-and-readiness-probes",
          },
          {
            name: "On-Call Practices and Incident Response",
            url: "on-call-practices-and-incident-response",
          },
        ],
      },

      {
        id: 32,
        url: "system-design",
        name: "System Design",
        description:
          "Design scalable, fault-tolerant, production-grade systems.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ros/ros-original.svg",

        children: [
          {
            name: "How to Approach a System Design Problem",
            url: "how-to-approach-a-system-design-problem",
          },
          {
            name: "Scalability: Vertical vs Horizontal Scaling",
            url: "scalability-vertical-vs-horizontal-scaling",
          },
          {
            name: "Load Balancing: Algorithms and Strategies",
            url: "load-balancing-algorithms-and-strategies",
          },
          {
            name: "Caching at Every Layer: CDN, Reverse Proxy, App, DB",
            url: "caching-at-every-layer-cdn-reverse-proxy-app-db",
          },
          {
            name: "Database Scaling: Read Replicas, Sharding, Partitioning",
            url: "database-scaling-read-replicas-sharding-partitioning",
          },
          {
            name: "CAP Theorem and Consistency Trade-offs",
            url: "cap-theorem-and-consistency-trade-offs",
          },
          {
            name: "Message Queues: Kafka, RabbitMQ, SQS",
            url: "message-queues-kafka-rabbitmq-sqs",
          },
          {
            name: "Event-Driven Architecture and CQRS",
            url: "event-driven-architecture-and-cqrs",
          },
          {
            name: "Microservices vs Monolith: Trade-offs in Depth",
            url: "microservices-vs-monolith-trade-offs-in-depth",
          },
          {
            name: "API Gateway and Service Mesh (Istio, Kong)",
            url: "api-gateway-and-service-mesh-istio-kong",
          },
          {
            name: "Rate Limiting at Scale",
            url: "rate-limiting-at-scale",
          },
          {
            name: "Designing for Failure: Circuit Breakers, Retries, Timeouts",
            url: "designing-for-failure-circuit-breakers-retries-timeouts",
          },
          {
            name: "Real-World Architectures: Netflix, Uber, WhatsApp",
            url: "real-world-architectures-netflix-uber-whatsapp",
          },
          {
            name: "Designing a URL Shortener",
            url: "designing-a-url-shortener",
          },
          {
            name: "Designing a Chat System",
            url: "designing-a-chat-system",
          },
          {
            name: "Designing a Social Feed",
            url: "designing-a-social-feed",
          },
          {
            name: "Designing a Notification System",
            url: "designing-a-notification-system",
          },
        ],
      },

      {
        id: 33,
        url: "software-architecture",
        name: "Software Architecture",
        description: "Design maintainable, testable and extensible codebases.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codepen/codepen-original.svg",

        children: [
          {
            name: "SOLID Principles With Real Code Examples",
            url: "solid-principles-with-real-code-examples",
          },
          {
            name: "DRY, KISS, YAGNI: When Rules Conflict",
            url: "dry-kiss-yagni-when-rules-conflict",
          },
          {
            name: "Design Patterns: Creational (Factory, Builder, Singleton)",
            url: "design-patterns-creational-factory-builder-singleton",
          },
          {
            name: "Design Patterns: Structural (Adapter, Decorator, Proxy, Facade)",
            url: "design-patterns-structural-adapter-decorator-proxy-facade",
          },
          {
            name: "Design Patterns: Behavioral (Observer, Strategy, Command, Iterator)",
            url: "design-patterns-behavioral-observer-strategy-command-iterator",
          },
          {
            name: "MVC, MVP, MVVM: Frontend and Backend Variants",
            url: "mvc-mvp-mvvm-frontend-and-backend-variants",
          },
          {
            name: "Repository Pattern and Data Abstraction",
            url: "repository-pattern-and-data-abstraction",
          },
          {
            name: "Service Layer and Use Cases",
            url: "service-layer-and-use-cases",
          },
          {
            name: "Domain-Driven Design (DDD): Entities, Aggregates, Repositories",
            url: "domain-driven-design-ddd-entities-aggregates-repositories",
          },
          {
            name: "Clean Architecture: Dependency Rule and Layer Separation",
            url: "clean-architecture-dependency-rule-and-layer-separation",
          },
          {
            name: "Event Sourcing and CQRS",
            url: "event-sourcing-and-cqrs",
          },
          {
            name: "Monorepo Architecture: Turborepo, Nx",
            url: "monorepo-architecture-turborepo-nx",
          },
        ],
      },
    ],
  },

  {
    id: 13,
    url: "ai",
    name: "AI Engineering",
    icon: StarsLineDuotone,
    description:
      "Integrate LLMs, build RAG pipelines, design agents, and ship AI features responsibly in production apps.",
    children: [
      {
        id: 34,
        url: "ai-llm-engineering",
        name: "AI & LLM Engineering",
        description: "Build intelligent, AI-powered features",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg",
        children: [
          {
            name: "How Large Language Models Work (Without the Math)",
            url: "how-large-language-models-work",
          },
          {
            name: "Tokens, Context Windows and Temperature",
            url: "tokens-context-windows-temperature",
          },
          {
            name: "OpenAI API: Chat, Completions, Vision, Embeddings",
            url: "openai-api-chat-completions-vision-embeddings",
          },
          {
            name: "Anthropic API: Claude and the Messages Format",
            url: "anthropic-api-claude-messages-format",
          },
          {
            name: "Prompt Engineering: System Prompts, Roles, Few-Shot",
            url: "prompt-engineering-system-prompts-roles-few-shot",
          },
          {
            name: "Streaming Responses in Web Apps",
            url: "streaming-responses-web-apps",
          },
          {
            name: "Vercel AI SDK: useChat, useCompletion, Server-Side Streaming",
            url: "vercel-ai-sdk-usechat-usecompletion-streaming",
          },
          {
            name: "Function Calling and Tool Use",
            url: "function-calling-tool-use",
          },
          {
            name: "Structured Output with JSON Mode and Zod",
            url: "structured-output-json-mode-zod",
          },
          {
            name: "RAG: Retrieval-Augmented Generation Architecture",
            url: "rag-retrieval-augmented-generation",
          },
          {
            name: "Vector Embeddings and Similarity Search",
            url: "vector-embeddings-similarity-search",
          },
          {
            name: "Vector Databases: Pinecone, pgvector, Qdrant",
            url: "vector-databases-pinecone-pgvector-qdrant",
          },
          {
            name: "Building AI Agents: Memory, Tools, Loops",
            url: "building-ai-agents-memory-tools-loops",
          },
          {
            name: "LangChain and LlamaIndex Overview",
            url: "langchain-llamaindex-overview",
          },
          {
            name: "Fine-Tuning vs Prompting: When to Use Each",
            url: "fine-tuning-vs-prompting",
          },
          {
            name: "AI Output Validation: Hallucination Handling and Guardrails in Production",
            url: "ai-output-validation-guardrails",
          },
          {
            name: "Cost Optimization for AI Features",
            url: "cost-optimization-ai-features",
          },
        ],
      },
    ],
  },

  {
    id: 14,
    url: "career",
    name: "Career",
    icon: CupLineDuotone,
    description:
      "Contribute to open source, navigate interviews, grow as an engineer, and build a good career.",
    children: [
      {
        id: 35,
        url: "open-source",
        name: "Open Source & Community",
        description: "Contribute to the ecosystem and build your reputation",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        children: [
          {
            name: "How to Read and Navigate a Large Codebase",
            url: "read-navigate-large-codebase",
          },
          {
            name: "Finding Your First OSS Contribution",
            url: "first-oss-contribution",
          },
          {
            name: "Making a Good Pull Request",
            url: "good-pull-request",
          },
          {
            name: "Writing Useful Issues and Bug Reports",
            url: "writing-issues-bug-reports",
          },
          {
            name: "Maintaining Your Own Open Source Project",
            url: "maintaining-open-source-project",
          },
          {
            name: "Semantic Versioning and Changelogs",
            url: "semantic-versioning-changelogs",
          },
          {
            name: "Publishing npm Packages",
            url: "publishing-npm-packages",
          },
          {
            name: "Building a Developer Brand on GitHub",
            url: "developer-brand-github",
          },
          {
            name: "Technical Writing and Documentation",
            url: "technical-writing-documentation",
          },
        ],
      },
      {
        id: 36,
        url: "career-mastery",
        name: "Career & Engineering Mastery",
        description: "Operate at a senior level, get hired and keep growing",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
        children: [
          {
            name: "Clean Code in Practice: Naming, Functions, Comments",
            url: "clean-code-naming-functions-comments",
          },
          {
            name: "Code Review: How to Give and Receive Feedback",
            url: "code-review-feedback",
          },
          {
            name: "Working in a Team: PRs, Async Communication and Collaboration",
            url: "teamwork-prs-async-collaboration",
          },
          {
            name: "Technical Documentation: ADRs, RFCs, READMEs",
            url: "technical-documentation-adrs-rfcs-readmes",
          },
          {
            name: "Debugging Systematically: Reproducing, Isolating, Fixing",
            url: "debugging-systematically",
          },
          {
            name: "On-Call and Production Incident Response",
            url: "on-call-incident-response",
          },
          {
            name: "Agile and Scrum: How Real Teams Work",
            url: "agile-scrum-real-teams",
          },
          {
            name: "Engineering Estimation: Story Points and T-Shirt Sizing",
            url: "engineering-estimation-story-points",
          },
          {
            name: "Writing a Resume That Gets Past ATS",
            url: "resume-ats-optimization",
          },
          {
            name: "Building a Portfolio That Stands Out",
            url: "building-portfolio-stand-out",
          },
          {
            name: "Technical Interview Preparation: Coding, System Design, Behavioral",
            url: "technical-interview-preparation",
          },
          {
            name: "How to Evaluate a Job Offer",
            url: "evaluate-job-offer",
          },
          {
            name: "Career Paths: IC vs Engineering Manager",
            url: "career-paths-ic-vs-engineering-manager",
          },
          {
            name: "Freelancing and Consulting as an Engineer",
            url: "freelancing-consulting-engineer",
          },
          {
            name: "Building in Public: Twitter, LinkedIn, YouTube",
            url: "building-in-public",
          },
          {
            name: "The Compound Effect: Learning Systems for Long-Term Growth",
            url: "compound-effect-learning-systems",
          },
        ],
      },
    ],
  },
];
