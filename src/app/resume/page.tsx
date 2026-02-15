"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { experience, education, skills } from "@/data/experience";

const categoryLabels: Record<string, string> = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  databases: "Databases & ORMs",
  infrastructure: "Infrastructure",
  tools: "Tools & Integrations",
};

export default function ResumePage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="mb-8 flex items-center justify-between">
          <SectionHeader
            label="Resume"
            title="Thomas Hart"
            description="Full-Stack Engineer"
          />
          <a
            href="/thomas-hart-resume.pdf"
            download
            className="flex-shrink-0 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
          >
            Download PDF
          </a>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-neutral-400">
          <span>thomashartdev@gmail.com</span>
          <span className="text-neutral-700">&middot;</span>
          <a
            href="https://linkedin.com/in/thomashartdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 transition-colors hover:text-indigo-300"
          >
            LinkedIn
          </a>
          <span className="text-neutral-700">&middot;</span>
          <a
            href="https://github.com/Thomas-Redo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 transition-colors hover:text-indigo-300"
          >
            GitHub
          </a>
        </div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job) => (
              <div
                key={`${job.company}-${job.role}`}
                className="rounded-xl border border-neutral-800/50 bg-neutral-900/30 p-6"
              >
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    {job.role}
                  </h3>
                  <span className="text-sm text-neutral-500">{job.period}</span>
                </div>
                <p className="mb-3 text-sm text-neutral-500">
                  {job.company} — {job.location}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-neutral-400">
                  {job.description}
                </p>
                <ul className="mb-4 space-y-2">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm text-neutral-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500/50" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {job.techUsed.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="rounded-xl border border-neutral-800/50 bg-neutral-900/30 p-6"
              >
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-neutral-500">{edu.period}</span>
                </div>
                <p className="mb-3 text-sm text-neutral-500">
                  {edu.institution}
                </p>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm text-neutral-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500/50" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Technical Skills
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-xl border border-neutral-800/50 bg-neutral-900/30 p-5"
              >
                <h4 className="mb-3 text-xs font-medium uppercase tracking-widest text-neutral-500">
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
      </Section>
    </div>
  );
}
