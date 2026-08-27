// Ported from the "about" section of Developer Portfolio.dc.html. The skill tags below are
// pulled from your stated stack (CLAUDE.md "Coding preferences"): comfortable-with -> Core
// skills, newer/basic -> Also exploring. Flag if you want this split adjusted.
const coreSkills = [
  "JavaScript / TypeScript",
  "React",
  "Next.js",
  "Node / Express",
  "PostgreSQL",
  "Prisma",
];

const alsoExploring = ["Python", "Java / Spring Boot", "Docker"];

export default function About() {
  return (
    <section
      id="about"
      className="py-[96px] border-t border-[var(--hairline-soft)] grid grid-cols-1 md:grid-cols-[260px_1fr] gap-[60px]"
    >
      <div>
        <p className="t-caption text-[var(--ink-muted)] uppercase tracking-[0.09em]">About</p>
      </div>

      <div className="flex flex-col gap-[48px] max-w-[760px]">
        <p className="t-subhead text-[var(--ink)]" style={{ textWrap: "pretty" }}>
          Self-taught developer, about a year in. I learn by building — most of what&apos;s
          here started as &quot;can I make this work&quot; rather than a course exercise.
          Currently focused on backend and API work, but comfortable moving across the stack
          when a project calls for it.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
          <div className="flex flex-col gap-[15px]">
            <p className="t-caption text-[var(--ink-muted)] uppercase tracking-[0.09em]">
              Core skills
            </p>
            <div className="flex flex-wrap gap-[8px]">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="t-body-sm px-[14px] py-[8px] rounded-[var(--radius-pill)] bg-[var(--surface-2)] text-[var(--ink)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[15px]">
            <p className="t-caption text-[var(--ink-muted)] uppercase tracking-[0.09em]">
              Also exploring
            </p>
            <div className="flex flex-wrap gap-[8px]">
              {alsoExploring.map((skill) => (
                <span
                  key={skill}
                  className="t-body-sm px-[13px] py-[7px] rounded-[var(--radius-pill)] border border-[var(--hairline)] text-[var(--ink-muted)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
