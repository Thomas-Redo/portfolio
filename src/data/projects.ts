export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: "saas" | "ecommerce" | "data" | "ai" | "tooling";
  featured: boolean;
  image: string;
  gallery: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
  year: string;
  status: "active" | "completed" | "in-development";
}

export const projects: Project[] = [
  {
    slug: "pixel-wand",
    title: "PixelWand",
    tagline: "Image optimization SaaS with API access",
    description:
      "A production SaaS platform for image optimization — format conversion, compression, and batch processing with a developer API. Handles thousands of conversions with Stripe billing, R2 storage, and a polished conversion interface.",
    longDescription:
      "PixelWand started as a tool I needed myself — a fast, no-nonsense image optimizer that could handle bulk conversions without quality loss. It grew into a full SaaS with tiered pricing, API keys for developer access, and a pipeline that processes images through WebP, AVIF, and PNG optimization. The backend handles presigned URL uploads to Cloudflare R2, server-side processing, and automatic cleanup. Stripe handles subscriptions with usage-based billing. The whole thing is deployed on Vercel with edge functions for the API layer.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Stripe",
      "Cloudflare R2",
      "Sharp",
      "Vercel",
    ],
    category: "saas",
    featured: true,
    image: "/images/projects/pixel-wand.png",
    gallery: [],
    highlights: [
      "Full SaaS with Stripe subscriptions and usage-based billing",
      "Developer API with key management and rate limiting",
      "Presigned URL uploads to Cloudflare R2 for zero-server file handling",
      "WebP, AVIF, and PNG optimization with quality preservation",
      "Production-deployed with CI/CD and monitoring",
    ],
    year: "2025",
    status: "active",
  },
  {
    slug: "day-trader",
    title: "Day Trader",
    tagline: "AI-powered algorithmic trading system",
    description:
      "An autonomous trading system with machine learning models, event-driven strategies, backtesting infrastructure, and live market execution. Built in Python with extensive data pipelines and model training workflows.",
    longDescription:
      "This project is a full algorithmic trading platform — from data ingestion and feature engineering through model training, backtesting, and live execution. It uses ensemble ML models trained on historical market data combined with event-driven signals from news pipelines. The backtesting framework simulates realistic market conditions including slippage and commission. The live trader connects to brokerage APIs for real-time execution with position management, stop-losses, and portfolio rebalancing. Everything runs as background processes with monitoring and alerting.",
    techStack: [
      "Python",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Docker",
      "REST APIs",
      "PostgreSQL",
      "Redis",
    ],
    category: "ai",
    featured: true,
    image: "/images/projects/day-trader.png",
    gallery: [],
    highlights: [
      "Ensemble ML models with automated training and evaluation",
      "Event-driven strategy engine processing real-time news signals",
      "Full backtesting framework with realistic market simulation",
      "Live execution with position management and risk controls",
      "Dockerized deployment with background workers and monitoring",
    ],
    year: "2024–2026",
    status: "active",
  },
  {
    slug: "murderdata",
    title: "MurderData",
    tagline: "Interactive homicide data exploration platform",
    description:
      "A data-rich visualization platform for exploring homicide statistics across the US. Features interactive maps, filterable datasets, zodiac analysis, and community-driven data provenance — built for true crime researchers and data enthusiasts.",
    longDescription:
      "MurderData is a full-stack data platform that makes FBI homicide data explorable and visual. The frontend features interactive choropleth maps, filterable data tables, and statistical breakdowns by demographics, geography, weapons, and relationships. The community layer adds field-level data provenance — users can contribute corrections with source citations, and every data point tracks its edit history. The zodiac analysis feature was a fun addition that went viral in the true crime community. The backend handles large dataset aggregation with optimized queries and caching.",
    techStack: [
      "Next.js",
      "TypeScript",
      "D3.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Zod",
      "Vercel",
    ],
    category: "data",
    featured: true,
    image: "/images/projects/murderdata.png",
    gallery: [],
    highlights: [
      "Interactive choropleth maps with drill-down by state and county",
      "Community data provenance with field-level edit history",
      "Complex filtering across demographics, geography, and time periods",
      "Optimized aggregation queries handling 800K+ records",
      "Zodiac analysis feature that gained traction in the true crime community",
    ],
    year: "2025–2026",
    status: "active",
  },
  {
    slug: "hartecho-site",
    title: "Hartecho",
    tagline: "Full-stack ecommerce platform with customer portal",
    description:
      "The main website and ecommerce platform for Hartecho — a software company I co-founded. Includes a marketing site, service pages, portfolio showcase, blog, and a customer portal where clients track project progress, invoices, and deliverables.",
    longDescription:
      "Hartecho is the software company I co-founded, and this is its digital home. The public-facing site handles SEO-optimized marketing pages, a dynamic portfolio, service breakdowns, and a blog. The ecommerce side processes service bookings and digital product purchases. The customer portal — currently being integrated — gives clients a dashboard to track active projects, view invoices, download deliverables, and communicate with the team. Built with Nuxt 3 for SSR performance, MongoDB for flexible data modeling, and server routes for API logic.",
    techStack: [
      "Nuxt 3",
      "Vue 3",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "AWS Lambda",
      "S3",
    ],
    category: "ecommerce",
    featured: true,
    image: "/images/projects/hartecho-site.png",
    gallery: [],
    highlights: [
      "Full marketing site with SEO optimization and dynamic portfolio",
      "Customer portal with project tracking and invoice management",
      "Server-side rendered for performance and SEO",
      "Integrated blog with CMS-like content management",
      "Built and operated as a real business serving paying clients",
    ],
    year: "2023–2026",
    status: "active",
  },
  {
    slug: "perception",
    title: "Perception",
    tagline: "Scientific relationship perception tool",
    description:
      "A scientifically-grounded tool for visualizing how people perceive their relationships. Features interactive 3D body maps where users can map emotional and physical responses, with radar chart visualizations for comparison and self-reflection.",
    longDescription:
      "Perception grew out of an interest in how people experience relationships differently — physically and emotionally. The core interaction is a 3D body map where users can paint regions to indicate where they feel different emotions or sensations in response to their partner. The data feeds into radar visualizations that break down relationship dimensions like trust, attraction, communication, and security. It's grounded in actual psychology research on body mapping and relationship science. The 3D rendering uses WebGL for smooth interaction, and all data is stored locally for privacy.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Three.js",
      "WebGL",
      "D3.js",
      "Tailwind CSS",
      "Zod",
    ],
    category: "tooling",
    featured: true,
    image: "/images/projects/perception.png",
    gallery: [],
    highlights: [
      "Interactive 3D body maps with WebGL rendering",
      "Radar chart visualizations for multi-dimensional relationship analysis",
      "Grounded in psychology research on somatic experiencing",
      "Privacy-first — all data stored locally on device",
      "Unique concept with no direct competitors",
    ],
    year: "2025–2026",
    status: "active",
  },
  {
    slug: "office-aesthetics",
    title: "Office Aesthetics",
    tagline: "Curated office products marketplace",
    description:
      "An ecommerce platform for curated office products and workspace accessories. Features product reviews, affiliate integration, wishlists, and a clean shopping experience focused on workspace aesthetics.",
    longDescription:
      "Office Aesthetics is an ecommerce platform built around the idea that your workspace should look and feel intentional. The product catalog is curated — not a dump of everything on Amazon — with editorial reviews, bundle recommendations, and workspace inspiration galleries. The platform handles affiliate product linking, user wishlists, order tracking, and a review system with verified purchases. Built with Nuxt 3 for SSR and MongoDB for the product catalog with flexible schema for different product categories.",
    techStack: [
      "Nuxt 3",
      "Vue 3",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "PayPal API",
      "AWS S3",
    ],
    category: "ecommerce",
    featured: false,
    image: "/images/projects/office-aesthetics.png",
    gallery: [],
    highlights: [
      "Curated product catalog with editorial reviews",
      "Affiliate integration with Amazon and direct brands",
      "User accounts with wishlists and order history",
      "Bundle recommendations and workspace inspiration galleries",
      "Seed scripts for realistic product data in development",
    ],
    year: "2024–2026",
    status: "active",
  },
];
