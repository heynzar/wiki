export const updates_by_months = [
  {
    month: "June 2026",
    updates: [
      {
        date: "10 June 2026",
        title: "Rust Ownership Deep Dive",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
        link: "/docs/rust/ownership",
        changes: [
          "Added visual diagrams explaining borrow checking",
          "Expanded lifetime examples with real-world patterns",
        ],
      },
      {
        date: "2 June 2026",
        title: "Advanced TypeScript Generics",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        link: "/docs/typescript/generics",
        changes: [
          "Added new examples for constrained generics",
          "Created section comparing interfaces vs. type aliases",
        ],
      },
    ],
  },

  {
    month: "June 2025",
    updates: [
      {
        date: "21 June 2025",
        title: "Deep Dive Into Java Fundamentals",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        link: "/docs/java/fundamentals",
        changes: [
          "Published an in-depth guide on Java runtime architecture",
          "Added examples explaining the JVM, JDK, and JRE relationship",
          "Expanded the section on memory management and garbage collection",
        ],
      },

      {
        date: "15 June 2025",
        title: "Modern Frontend Patterns Overview",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        link: "/docs/frontend/patterns",
        changes: [
          "Added a new chapter on state management strategies (signals, atoms, context, stores)",
          "Introduced a comparison between traditional React patterns vs. React 19 patterns",
          "Included diagrams for component composition and rendering flow",
        ],
      },

      {
        date: "13 June 2025",
        title: "Web Performance Optimization Updates",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        link: "/docs/performance/intro",
        changes: [
          "Added a new checklist for measuring performance with Lighthouse & Web Vitals",
          "Updated code samples for lazy loading and bundle splitting",
        ],
      },

      {
        date: "7 June 2025",
        title: "API Design & REST Best Practices",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        link: "/docs/backend/rest",
        changes: [
          "Added new section on versioning strategies for public APIs",
          "Clarified naming conventions and resource modelling with examples",
        ],
      },

      {
        date: "1 June 2025",
        title: "CSS Architecture Improvements",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        link: "/docs/css/architecture",
        changes: [
          "Expanded BEM and utility-first comparison with pros and cons",
          "Added new examples for scalable component-based CSS structure",
        ],
      },
    ],
  },

  {
    month: "May 2025",
    updates: [
      {
        date: "29 May 2025",
        title: "JavaScript Core Concepts Refresh",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        link: "/docs/javascript/core",
        changes: [
          "Rewrote the Closure section with clearer step-by-step explanations",
          "Added new diagrams explaining the Event Loop and Microtasks",
        ],
      },
    ],
  },

  {
    month: "April 2025",
    updates: [
      {
        date: "18 April 2025",
        title: "Databases: Indexing & Query Planning",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        link: "/docs/database/indexing",
        changes: [
          "Added guide for B-tree, Hash, and GIN indexes",
          "Created a performance comparison table for different index types",
        ],
      },
      {
        date: "5 April 2025",
        title: "Docker & Containerization Basics",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        link: "/docs/devops/docker",
        changes: [
          "Updated examples for multi-stage builds",
          "Added troubleshooting section for common container networking issues",
        ],
      },
    ],
  },
] as const;
