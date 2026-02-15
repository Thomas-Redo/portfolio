"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const categoryColors: Record<string, string> = {
  saas: "from-indigo-500/20 to-blue-500/20",
  ecommerce: "from-emerald-500/20 to-teal-500/20",
  data: "from-orange-500/20 to-amber-500/20",
  ai: "from-purple-500/20 to-pink-500/20",
  tooling: "from-cyan-500/20 to-sky-500/20",
};

const categoryBorders: Record<string, string> = {
  saas: "hover:border-indigo-500/30",
  ecommerce: "hover:border-emerald-500/30",
  data: "hover:border-orange-500/30",
  ai: "hover:border-purple-500/30",
  tooling: "hover:border-cyan-500/30",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className={`group relative block overflow-hidden rounded-2xl border border-neutral-800/50 bg-neutral-900/30 transition-all duration-500 ${categoryBorders[project.category] ?? "hover:border-neutral-700"}`}
      >
        {/* Gradient overlay on hover */}
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${categoryColors[project.category] ?? ""} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />

        <div className="relative aspect-[16/9] overflow-hidden bg-neutral-800/50">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900">
              <span className="text-4xl font-black text-neutral-700 transition-colors group-hover:text-neutral-600">
                {project.title}
              </span>
            </div>
          )}
        </div>

        <div className="relative p-6">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white transition-colors group-hover:text-white">
              {project.title}
            </h3>
            <span className="text-xs font-medium text-neutral-600">
              {project.year}
            </span>
          </div>

          <p className="mb-5 text-sm leading-relaxed text-neutral-400">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 5 && (
              <Badge variant="outline">+{project.techStack.length - 5}</Badge>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
