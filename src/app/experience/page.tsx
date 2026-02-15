import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { experience, education } from "@/data/experience";

export const metadata = {
  title: "Experience — Thomas Hart",
  description:
    "Professional experience and education in software engineering.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-20">
      <Section>
        <SectionHeader
          label="Career"
          title="Experience & Education"
          description="From studying computer science to founding a software company to building my own products."
        />

        <div className="space-y-16">
          <div>
            <h3 className="mb-8 text-lg font-semibold text-neutral-200">
              Work Experience
            </h3>
            {experience.length > 0 ? (
              <div className="space-y-12">
                {experience.map((job) => (
                  <div
                    key={`${job.company}-${job.role}`}
                    className="border-l-2 border-neutral-800 pl-8"
                  >
                    <div className="mb-2">
                      <h4 className="text-lg font-medium text-neutral-100">
                        {job.role}
                      </h4>
                      <p className="text-sm text-neutral-500">
                        {job.company} &middot; {job.period}
                      </p>
                    </div>
                    <p className="mb-4 text-neutral-400">{job.description}</p>
                    <ul className="mb-4 space-y-2">
                      {job.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-3 text-sm text-neutral-500"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.techUsed.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-neutral-500">
                {/* TODO: Fill in work experience */}
                Work experience entries to be added.
              </p>
            )}
          </div>

          <div>
            <h3 className="mb-8 text-lg font-semibold text-neutral-200">
              Education
            </h3>
            {education.length > 0 ? (
              <div className="space-y-8">
                {education.map((edu) => (
                  <div
                    key={edu.institution}
                    className="border-l-2 border-neutral-800 pl-8"
                  >
                    <h4 className="text-lg font-medium text-neutral-100">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-neutral-500">
                      {edu.institution} &middot; {edu.period}
                    </p>
                    {edu.highlights.length > 0 && (
                      <ul className="mt-3 space-y-2">
                        {edu.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-3 text-sm text-neutral-500"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-neutral-500">
                {/* TODO: Fill in education */}
                Education entries to be added.
              </p>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
