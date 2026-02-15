import { Section, SectionHeader } from "@/components/ui/section";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects — Thomas Hart",
  description:
    "A collection of software projects spanning SaaS, ecommerce, data visualization, and AI.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <Section>
        <SectionHeader
          label="All Projects"
          title="What I've Built"
          description="Production systems serving real users, processing real data, and handling real money. Not tutorials or toy apps."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </Section>
    </div>
  );
}
