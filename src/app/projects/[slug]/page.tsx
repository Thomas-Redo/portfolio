import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Thomas Hart`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="pt-20">
      <Section>
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center text-sm text-neutral-500 transition-colors hover:text-neutral-300"
        >
          &larr; All Projects
        </Link>

        <div className="mb-12">
          <div className="mb-4 flex items-center gap-4">
            <Badge>{project.category}</Badge>
            <span className="text-sm text-neutral-600">{project.year}</span>
            <span className="text-sm text-neutral-600">&middot;</span>
            <span className="text-sm capitalize text-neutral-600">
              {project.status.replace("-", " ")}
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-neutral-100 md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-2 text-xl text-neutral-500">{project.tagline}</p>
        </div>

        <div className="relative mb-16 aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-800/50 bg-neutral-900">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-6xl font-bold text-neutral-800">
                {project.title[0]}
              </span>
            </div>
          )}
        </div>

        <div className="grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-lg font-semibold text-neutral-200">
              Overview
            </h2>
            <p className="mb-8 leading-relaxed text-neutral-400">
              {project.longDescription}
            </p>

            <h2 className="mb-4 text-lg font-semibold text-neutral-200">
              Highlights
            </h2>
            <ul className="space-y-3">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-neutral-400"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-600" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-neutral-200">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            {(project.liveUrl || project.githubUrl) && (
              <div className="mt-8 space-y-3">
                <h2 className="text-lg font-semibold text-neutral-200">
                  Links
                </h2>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-neutral-400 transition-colors hover:text-neutral-200"
                  >
                    Live Site &rarr;
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-neutral-400 transition-colors hover:text-neutral-200"
                  >
                    Source Code &rarr;
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
