import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/experience";

export const metadata = {
  title: "About — Thomas Hart",
  description:
    "Software engineer with a CS degree and years of experience building production software.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <Section>
        <SectionHeader
          label="About"
          title="Thomas Hart"
          description="Software engineer, company founder, and builder. I've been writing code since before AI made it easy — and now I use AI to ship faster than ever."
        />

        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-6 text-neutral-400 leading-relaxed">
            <p>
              {/* TODO: Fill in personal story — CS education, what got you into coding,
                  the journey from university to founding Hartecho to building your own products */}
              Personal story and background goes here. Talk about CS degree,
              early projects, founding Hartecho, and the evolution into building
              your own products and tools.
            </p>
            <p>
              {/* TODO: Philosophy on engineering — manual foundations + AI acceleration */}
              Engineering philosophy goes here. The foundation is manual — years
              of understanding data structures, algorithms, system design, and
              debugging without AI assistance. Now AI is a force multiplier on
              top of that base.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-neutral-200">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="mb-3 text-sm font-medium uppercase tracking-widest text-neutral-600">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
