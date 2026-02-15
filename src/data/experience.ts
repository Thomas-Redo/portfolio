export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  techUsed: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    company: "Redo",
    role: "Full-Stack Engineer",
    location: "Draper, UT",
    period: "October 2025 – Present",
    description:
      "Building and shipping production systems on Redo's e-commerce returns and exchanges platform serving 5,000+ merchants including Liquid Death, Nike Strength, Popflex, and Freckled Poppy. Merged 77 PRs in under 4 months — ranked \"Elite\" tier by industry benchmarks (LinearB 2026, 8.1M PRs, 4,800 teams).",
    highlights: [
      "Designed and built the Conversion Monitor from scratch — an 8,500+ line full-stack observability system with Snowflake data pipeline, anomaly detection engine, Slack alerting with de-duplication, historical recording across 1,700+ teams, and an admin dashboard with interactive charting",
      "Built multi-platform refund orchestration across 6 e-commerce providers (Shopify GraphQL, BigCommerce, CommentSold, Commerce Cloud with Adyen/PayPal/Optty/GlobalE) for the PP+ claims system with idempotent safeguards",
      "Shipped an international pricing system end-to-end — price rounding engine with penny psychology, Shopify GraphQL catalog discovery handling 50+ catalogs, batch mutations, team settings UI, RPC endpoint, and automated nightly cron sync",
      "Fixed a checkout-blocking bug directly impacting merchant revenue, plus cart token invalidation, currency label issues, and default image overhaul across all merchants",
      "Shipped CSV export system with 29+ dynamic columns and role-based redaction, recycle dashboard (40 files), billing system improvements, and BigCommerce integration fixes",
      "20.0 PRs/month average (Elite tier, industry median is 12.4). 60% merged same day. 86% merge rate. 23,779 lines added across 407 files",
    ],
    techUsed: [
      "TypeScript",
      "React",
      "Node.js",
      "Bazel",
      "MongoDB",
      "Snowflake",
      "Temporal",
      "Shopify GraphQL",
      "BigCommerce API",
      "AWS",
    ],
  },
  {
    company: "HARTECHO LLC",
    role: "Software Engineer, Full Stack",
    location: "Salt Lake City, UT",
    period: "May 2022 – October 2025",
    description:
      "Co-founded and led engineering at a software company building custom ecommerce solutions. Led a team of 5, shipped 12 production stores, and processed $3M+ in transactions.",
    highlights: [
      "Led a team of 5 to build and deploy 12 custom-coded ecommerce stores with mobile load times averaging 1.2s, reducing bounce rates and improving conversions by 30%",
      "Refactored multiple projects from Vue to Nuxt 3 and migrated hosting from AWS Amplify to Vercel, improving mobile page load speeds by up to 7 seconds",
      "Owned the CI/CD pipeline and automated testing workflow for serverless scalability, saving 700+ hours of labor across projects",
      "Integrated PayPal, Stripe, and Square payment gateways processing $3M+ in sales, with automated abandoned cart flows boosting recovered revenue by 20%",
      "Designed dynamic routing and metadata injection system that increased organic traffic by 18% on average",
      "Built custom admin portals for orders, inventory, promotions, and customers — cutting client reliance on developer support by over 80%",
    ],
    techUsed: [
      "TypeScript",
      "Vue",
      "Nuxt 3",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
      "GCP",
      "Vercel",
      "GitHub Actions",
    ],
  },
  {
    company: "Brigham Young University",
    role: "Junior Software Engineer",
    location: "Provo, UT",
    period: "April 2020 – April 2022",
    description:
      "Led NPC behavior development on a university video game project, managed version control across a 50+ student team, and maintained 30,000+ lines of legacy C++ code.",
    highlights: [
      "Led a team of 4 to design and implement 100+ NPC behaviors and mechanics, contributing to a 5th place ranking in the Rookie's international video game competition",
      "Managed SVN branching and merging using TortoiseSVN across a 50+ student multi-developer environment",
      "Debugged and maintained 30,000+ lines of legacy C++ code",
    ],
    techUsed: ["C++", "C", "Unreal Engine", "Blueprint", "TortoiseSVN"],
  },
];

export const education: Education[] = [
  {
    institution: "Brigham Young University",
    degree: "Bachelor of Science in Computer Science",
    period: "Graduated August 2022",
    highlights: [
      "Minor in Business Management",
      "5th place — Rookie's International Video Game Competition",
    ],
  },
];

export const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "C++", "Java", "SQL", "HTML", "CSS"],
  frontend: [
    "React",
    "Next.js",
    "Vue 3",
    "Nuxt 3",
    "Tailwind CSS",
    "Three.js",
    "D3.js",
    "Framer Motion",
  ],
  backend: [
    "Node.js",
    "Express",
    "REST APIs",
    "tRPC",
    "Temporal",
    "WebSockets",
    "AWS Lambda",
    "GCP Cloud Functions",
  ],
  databases: ["PostgreSQL", "MongoDB", "Redis", "Snowflake", "Prisma", "Drizzle"],
  infrastructure: [
    "Docker",
    "Bazel",
    "GitHub Actions",
    "Vercel",
    "AWS (S3, Lambda, CloudFront)",
    "GCP",
    "Cloudflare R2",
  ],
  tools: [
    "Git",
    "Stripe",
    "PayPal",
    "Square",
    "Shopify GraphQL",
    "BigCommerce API",
    "Klaviyo",
    "Playwright",
    "Vitest",
  ],
};
