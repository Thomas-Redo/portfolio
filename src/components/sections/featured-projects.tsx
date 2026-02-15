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
        description="Production software — not tutorials. Each project serves real users, processes real data, or handles real money."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {featured.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
