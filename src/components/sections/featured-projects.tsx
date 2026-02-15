import { Section, SectionHeader } from "@/components/ui/section";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section id="projects">
      <SectionHeader
        label="Selected Work"
        title="Featured Projects"
        description="A selection of projects that represent the range of my work — from SaaS products and ecommerce platforms to data tools and AI systems."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
