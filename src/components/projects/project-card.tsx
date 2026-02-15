import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-neutral-800/50 bg-neutral-900/50 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-neutral-800">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-2xl font-bold text-neutral-700">
              {project.title[0]}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center gap-3">
          <h3 className="text-lg font-semibold text-neutral-100">
            {project.title}
          </h3>
          <span className="text-xs text-neutral-600">{project.year}</span>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-neutral-400">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge variant="outline">+{project.techStack.length - 4}</Badge>
          )}
        </div>
      </div>
    </Link>
  );
}
