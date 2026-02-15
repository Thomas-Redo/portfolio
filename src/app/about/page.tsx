"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/experience";

const categoryLabels: Record<string, string> = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  databases: "Databases & ORMs",
  infrastructure: "Infrastructure",
  tools: "Tools & Integrations",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <Section>
        <SectionHeader
          label="About"
          title="Thomas Hart"
          description="Software engineer, company founder, and builder."
        />

        <div className="grid gap-16 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 leading-relaxed text-neutral-400 lg:col-span-3"
          >
            <p className="text-lg text-neutral-300">
              I started writing code at Brigham Young University over 6 years
              ago — C++, Java, algorithms, systems programming, the whole CS
              curriculum. No AI, no Copilot, just a text editor and
              documentation. That foundation is everything.
            </p>
            <p>
              During university I worked as a junior software engineer on a
              video game project in Unreal Engine, leading NPC behavior
              development and debugging tens of thousands of lines of legacy
              C++. Our team placed 5th in an international competition.
            </p>
            <p>
              After graduating, I co-founded HARTECHO — a software company
              building custom ecommerce stores for businesses. I led a team of
              5, shipped 12 production sites, integrated payment systems that
              processed over $3 million in transactions, and built the CI/CD
              pipelines and admin portals that made the whole operation run.
            </p>
            <p>
              Now I&apos;m a full-stack engineer at Redo, working on their
              ecommerce returns platform at scale. On the side, I build my own
              products — SaaS tools, data platforms, AI trading systems,
              creative apps. I use AI as a force multiplier, but the
              architecture decisions, debugging instincts, and engineering
              judgment come from years of doing it the hard way first.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://linkedin.com/in/thomashartdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Thomas-Redo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
              >
                GitHub
              </a>
              <a
                href="mailto:thomashartdev@gmail.com"
                className="text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
              >
                thomashartdev@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-indigo-400">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="mb-3 text-xs font-medium uppercase tracking-widest text-neutral-600">
                    {categoryLabels[category] ?? category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
