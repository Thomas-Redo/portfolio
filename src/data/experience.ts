export interface Experience {
  company: string;
  role: string;
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
  // TODO: Fill in with Thomas's actual work experience
];

export const education: Education[] = [
  // TODO: Fill in with Thomas's actual education
];

export const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
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
    "Fastify",
    "REST APIs",
    "tRPC",
    "WebSockets",
    "AWS Lambda",
  ],
  databases: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle"],
  infrastructure: [
    "Docker",
    "GitHub Actions",
    "Vercel",
    "AWS (S3, Lambda, CloudFront)",
    "Cloudflare R2",
  ],
  tools: [
    "Git",
    "Stripe",
    "PayPal API",
    "Playwright",
    "Vitest",
    "ESLint",
    "Prettier",
  ],
};
