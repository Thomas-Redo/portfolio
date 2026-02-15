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

function GalleryImage({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`group/img relative overflow-hidden rounded-xl border border-neutral-800/50 bg-neutral-900 transition-all duration-500 hover:border-neutral-700/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.08)] ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const gallery = project.gallery;

  return (
    <div className="pt-20">
      <Section>
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-indigo-400"
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

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-2 text-xl text-neutral-500">{project.tagline}</p>
        </div>

        {/* Hero image */}
        <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-800/50 bg-neutral-900">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              priority
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900">
              <span className="text-6xl font-bold text-neutral-700">
                {project.title}
              </span>
            </div>
          )}
        </div>

        {/* Gallery — mixed layout inspired by the old hartecho portfolio */}
        {gallery.length > 0 && (
          <div className="mb-16 space-y-4">
            {/* Row 1: Three equal columns (first 3 images) */}
            {gallery.length >= 3 && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {gallery.slice(0, 3).map((img) => (
                  <GalleryImage
                    key={img}
                    src={img}
                    alt={`${project.title} screenshot`}
                    className="aspect-[4/3]"
                  />
                ))}
              </div>
            )}

            {/* Row 2: One large full-width image (4th image) */}
            {gallery.length >= 4 && (
              <GalleryImage
                src={gallery[3]}
                alt={`${project.title} screenshot`}
                className="aspect-[21/9]"
              />
            )}

            {/* Row 3: Two equal columns (5th and 6th images) */}
            {gallery.length >= 6 && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {gallery.slice(4, 6).map((img) => (
                  <GalleryImage
                    key={img}
                    src={img}
                    alt={`${project.title} screenshot`}
                    className="aspect-[16/10]"
                  />
                ))}
              </div>
            )}

            {/* Row 4: Three columns for remaining images (7+) */}
            {gallery.length > 6 && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {gallery.slice(6).map((img) => (
                  <GalleryImage
                    key={img}
                    src={img}
                    alt={`${project.title} screenshot`}
                    className="aspect-[4/3]"
                  />
                ))}
              </div>
            )}

            {/* Handle galleries with < 3 images */}
            {gallery.length < 3 && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {gallery.map((img) => (
                  <GalleryImage
                    key={img}
                    src={img}
                    alt={`${project.title} screenshot`}
                    className="aspect-[16/10]"
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Content */}
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
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500/50" />
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
                    className="inline-flex items-center gap-2 rounded-lg border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-400 transition-all hover:bg-indigo-500/20"
                  >
                    Live Site &rarr;
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-neutral-400 transition-colors hover:text-indigo-400"
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
