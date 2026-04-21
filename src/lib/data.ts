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
    title: "Enterprise ERP Solution",
    desc: "A robust resource planning system built with Yii2 and MSSQL, featuring complex reporting and API integrations.",
    longDesc: "This enterprise-grade ERP was designed to handle complex business logic for large-scale operations. It integrates multiple departments including Finance, HR, and Inventory Management into a unified platform. The system emphasizes data integrity and high-performance reporting through optimized SQL queries and sophisticated caching strategies.",
    tech: ["PHP", "Yii2", "MSSQL", "Docker", "Redis"],
    category: "Full Stack",
    github: "#",
    link: "#",
    challenges: [
      "Handling real-time synchronization between disparate legacy databases.",
      "Optimizing SQL Server performance for tables with millions of records.",
      "Implementing a granular RBAC (Role-Based Access Control) system."
    ],
    results: [
      "Reduced report generation time by 75% through query optimization.",
      "Centralized 15+ business processes into a single source of truth.",
      "Successfully scaled to support 500+ concurrent internal users."
    ]
  },
  {
    id: "02",
    title: "Real-time Analytics Engine",
    desc: "High-performance data processor utilizing FastAPI and PostgreSQL with AWS Lambda deployment.",
    longDesc: "An asynchronous data processing engine designed to ingest and analyze massive streams of telemetry data. Built with Python's FastAPI, it leverages high-concurrency capabilities to process incoming webhooks and sensor data in near real-time, storing aggregated results in a highly available PostgreSQL cluster.",
    tech: ["Python", "FastAPI", "PostgreSQL", "AWS", "Celery"],
    category: "DevOps",
    github: "#",
    link: "#",
    challenges: [
      "Managing high-velocity data ingestion without bottlenecking the API.",
      "Implementing efficient data aggregation pipelines for historical analysis.",
      "Ensuring sub-100ms response times for real-time dashboard queries."
    ],
    results: [
      "Achieved ingestion rates of 10k+ events per second on a single node.",
      "Implemented a serverless architecture that reduced infrastructure costs by 40%.",
      "Provided 99.99% availability during peak traffic bursts."
    ]
  },
  {
    id: "03",
    title: "FinTech Banking Portal",
    desc: "Secure banking dashboard developed using ASP.NET Core and Blazor for a rich client-side experience.",
    longDesc: "A secure, modern banking interface that brings desktop-like performance to the web via Blazor WebAssembly. This portal handles sensitive financial transactions with multi-layered security, including JWT authentication and encrypted communication channels, while providing a highly interactive user experience for portfolio management.",
    tech: ["C#", "ASP.NET Core", "Blazor", "MSSQL", "Entity Framework"],
    category: "Finance",
    github: "#",
    link: "#",
    challenges: [
      "Ensuring strict compliance with financial security standards (PCI-DSS).",
      "Managing complex state across a multi-step transactional workflow.",
      "Optimizing Blazor WebAssembly payload sizes for slow network conditions."
    ],
    results: [
      "Developed a highly responsive UI that outperformed previous legacy systems.",
      "Implemented an end-to-end encryption layer for all transaction payloads.",
      "Simplified complex account management tasks into intuitive user journeys."
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
