import { experience, education, skills } from "@/data/experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thomas Hart — Resume",
};

export default function PrintResumePage() {
  return (
    <div className="resume-print mx-auto max-w-[800px] bg-white p-8 font-serif text-[#333]">
      <style>{`
        @media print {
          @page { margin: 0.5in; }
          body { background: white !important; }
          header, footer, nav { display: none !important; }
        }
        .resume-print { line-height: 1.5; }
        .resume-print h1 { font-size: 28px; font-weight: bold; margin-bottom: 4px; color: #111; }
        .resume-print h2 { font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-top: 16px; margin-bottom: 4px; color: #111; border-bottom: 2px solid #666; padding-bottom: 2px; }
        .resume-print .contact { font-size: 13px; color: #555; margin-bottom: 8px; }
        .resume-print .contact a { color: #2563eb; text-decoration: none; }
        .resume-print .entry-header { display: flex; justify-content: space-between; align-items: baseline; margin-top: 10px; }
        .resume-print .entry-header strong { font-size: 14px; }
        .resume-print .entry-header .date { font-size: 13px; font-style: italic; color: #555; }
        .resume-print .subtitle { font-size: 13px; color: #555; margin-bottom: 4px; }
        .resume-print ul { margin: 4px 0 8px 20px; font-size: 13px; line-height: 1.4; }
        .resume-print li { margin-bottom: 3px; }
        .resume-print .tech { font-size: 12px; color: #555; margin-top: 4px; }
        .resume-print .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 13px; }
        .resume-print .skills-grid .label { font-weight: 600; font-size: 12px; text-transform: uppercase; color: #555; letter-spacing: 0.5px; }
      `}</style>

      <h1>THOMAS HART</h1>
      <div className="contact">
        thomashartdev@gmail.com |{" "}
        <a
          href="https://linkedin.com/in/thomashartdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/Thomas-Redo"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

      <h2>Work Experience</h2>
      {experience.map((job) => (
        <div key={`${job.company}-${job.role}`}>
          <div className="entry-header">
            <strong>
              {job.role} — {job.company} — {job.location}
            </strong>
            <span className="date">{job.period}</span>
          </div>
          <ul>
            {job.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="tech">
            <em>Tech: {job.techUsed.join(", ")}</em>
          </div>
        </div>
      ))}

      <h2>Education</h2>
      {education.map((edu) => (
        <div key={edu.institution}>
          <div className="entry-header">
            <strong>
              {edu.institution} — {edu.degree}
            </strong>
            <span className="date">{edu.period}</span>
          </div>
          <ul>
            {edu.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} style={{ marginBottom: 4 }}>
            <span className="label">{category}: </span>
            {(items as string[]).join(", ")}
          </div>
        ))}
      </div>
    </div>
  );
}
