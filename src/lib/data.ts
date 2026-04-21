'use strict';

export interface Project {
  id: string;
  title: string;
  desc: string;
  longDesc: string;
  tech: string[];
  category: string;
  github?: string;
  link?: string;
  challenges: string[];
  results: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readingTime: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Regulatory Management Information System (RIMS)",
    desc: "A mission-critical enterprise system for regulatory bodies, built with Yii2 and MSSQL, handling complex workflows and compliance tracking.",
    longDesc: "RIMS is a comprehensive regulatory platform designed to streamline permit applications, inspections, and compliance management. It features a sophisticated workflow engine, automated notifications, and deep integration with enterprise ERPs. The system manages the entire lifecycle of regulatory processes with high security and data integrity.",
    tech: ["PHP", "Yii2", "MSSQL", "Bootstrap", "ERP Integration"],
    category: "Enterprise",
    github: "#",
    link: "#",
    challenges: [
      "Architecting a flexible workflow engine for diverse regulatory processes.",
      "Optimizing complex database transactions for high-volume data entry.",
      "Implementing secure digital signatures and document management."
    ],
    results: [
      "Digitized 100% of the manual permit application process.",
      "Reduced application processing time by over 60% through automation.",
      "Enhanced transparency and tracking for all regulatory stakeholders."
    ]
  },
  {
    id: "02",
    title: "Sinapi Africa",
    desc: "A premium web platform for a mission-driven organization, built with Next.js and Tailwind CSS for high performance and UX.",
    longDesc: "Sinapi Africa is a modern web application designed to showcase organizational impact and drive engagement. It features a custom-built content management flow, responsive design, and performance optimizations that ensure a seamless user experience across all devices.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    category: "Web App",
    github: "#",
    link: "https://sinapi-revamp.vercel.app/",
    challenges: [
      "Designing a high-UX interface that aligns with brand identity.",
      "Implementing performant animations without compromising load times.",
      "Optimizing SEO and content structure for maximum visibility."
    ],
    results: [
      "Achieved 95+ Lighthouse scores across performance and accessibility.",
      "Successfully launched a modern digital presence for the organization.",
      "Improved user engagement through interactive and dynamic content."
    ]
  },
  {
    id: "03",
    title: "High-Performance API Engine",
    desc: "Scalable data processing system utilizing FastAPI and PostgreSQL for real-time analytics.",
    longDesc: "This backend engine handles massive data ingestion and processing for analytical dashboards. Built with a focus on speed and scalability, it utilizes asynchronous processing and optimized database schemas to provide sub-second responses for complex data queries.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker", "Redis"],
    category: "Backend",
    github: "#",
    link: "#",
    challenges: [
      "Managing high-velocity data ingestion with minimal latency.",
      "Scaling the infrastructure to handle traffic spikes.",
      "Ensuring high availability and data consistency."
    ],
    results: [
      "Processed over 1M+ data points daily with zero downtime.",
      "Reduced API response latency by 40% through intelligent caching.",
      "Provided a robust foundation for real-time business intelligence."
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "optimizing-yii2-for-high-traffic",
    title: "Optimizing Yii2 for High-Traffic APIs",
    date: "Nov 05, 2023",
    readingTime: "8 min read",
    tags: ["PHP", "Yii2", "Performance"],
    excerpt: "Deep dive into query caching and active record optimization in PHP environments.",
    content: `
      ## The Bottleneck: Active Record at Scale
      When building enterprise APIs with Yii2, the Active Record pattern is incredibly productive but can become a significant performance bottleneck as traffic scales. Every database query, if not handled carefully, can lead to the "N+1" problem or excessive memory consumption.

      ### 1. Eager Loading vs Lazy Loading
      The first step in optimization is always ensuring you're using \`with()\` to eager load related models. 

      ### 2. Selective Column Fetching
      Avoid \`SELECT *\`. In Yii2, use \`select(['column1', 'column2'])\` to minimize the data payload moving between your DB and PHP application.

      ### 3. Using asArray()
      For read-only API endpoints, calling \`asArray()\` skips the expensive process of instantiating Active Record objects, often resulting in a 2x-3x performance boost for large result sets.

      ### 4. Query Caching
      Implement Yii2's built-in query caching. It's as simple as wrapping your query in a dependency check. This drastically reduces the load on your database for static or semi-static data.
    `
  },
  {
    slug: "blazor-vs-react-perspective",
    title: "Blazor vs React: A Full-Stack Perspective",
    date: "Oct 20, 2023",
    readingTime: "12 min read",
    tags: ["C#", "JavaScript", "Architecture"],
    excerpt: "Comparing the development workflow and performance of C# WebAssembly against JS frameworks.",
    content: `
      ## The Shift to C# on the Frontend
      For years, JavaScript has been the undisputed king of the frontend. However, with the maturity of WebAssembly, Microsoft's Blazor has emerged as a serious contender for .NET developers.

      ### The Developer Experience
      The biggest advantage of Blazor is the ability to share models and logic between your backend (ASP.NET Core) and your frontend. No more duplicating DTOs or validation logic in TypeScript.

      ### Performance Considerations
      While React is incredibly fast and has a mature ecosystem, Blazor WebAssembly has a larger initial download size. However, once loaded, the execution speed of compiled C# can be impressive for computationally heavy tasks.

      ### Which One to Choose?
      If you are already deep in the .NET ecosystem, Blazor offers unparalleled productivity. For projects requiring a massive library of third-party UI components or targeting a broad mobile audience, React remains the safer bet.
    `
  }
];
