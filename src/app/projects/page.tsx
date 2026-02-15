import { Section, SectionHeader } from "@/components/ui/section";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects — Thomas Hart",
  description: "A collection of software projects spanning SaaS, ecommerce, data visualization, and AI.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <Section>
        <SectionHeader
          label="All Projects"
          title="What I've Built"
          description="Each project represents real engineering work — production systems serving users, processing data, and handling payments. Not tutorials or toy apps."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
}
