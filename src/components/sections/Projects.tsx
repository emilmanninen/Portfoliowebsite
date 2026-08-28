import Image from "next/image";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

// Ported from the "projects" section of Developer Portfolio.dc.html. The source file hard-coded
// three near-identical <article> blocks; here they're generated from src/data/projects.ts so the
// markup only needs to be right once. Card hover (lift + shadow swap) is CSS group-hover instead
// of the source's style-hover attribute + JS state, same visual result, zero client JS.
export default function Projects() {
  return (
    <section
      id="projects"
      className="py-[96px] border-t border-[var(--hairline-soft)] flex flex-col gap-[40px]"
    >
      <div className="flex flex-wrap items-end justify-between gap-[30px]">
        <h2 className="t-display-lg uppercase">Selected work</h2>
        <p className="t-body text-[var(--ink-muted)] max-w-[34ch]">
          A few things I&apos;ve built recently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="group bg-[var(--surface-1)] rounded-[var(--radius-xl)] p-[20px] flex flex-col gap-[20px] shadow-[var(--elev-1)] transition-[transform,box-shadow,background-color] duration-[var(--dur-base)] ease-[var(--ease-standard)] hover:-translate-y-[2px] hover:shadow-[var(--elev-2)] hover:bg-[var(--surface-2)]"
          >
            {(() => {
              const imageBox = (
                <div className="relative aspect-[16/10] rounded-[var(--radius-md)] bg-[var(--surface-2)] flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    // object-contain, never cover — the design system's rule for real screenshots
                    // is "keep aspect ratio and never crop", so this letterboxes instead of cropping
                    // when the source doesn't match the card's 16:10 box.
                    <Image
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-contain"
                      // The first card's image is the one Next flagged as the LCP candidate — priority
                      // preloads it and skips lazy-loading, instead of the browser discovering it late.
                      priority={index === 0}
                    />
                  ) : (
                    <span className="t-caption text-[var(--ink-muted)]">Screenshot placeholder</span>
                  )}
                </div>
              );

              // Same destination as the "Live demo" button below — clicking the screenshot is
              // just a bigger target for the same link, not a second destination.
              return project.liveHref ? (
                <a
                  href={project.liveHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open live demo of ${project.name}`}
                  className="block"
                >
                  {imageBox}
                </a>
              ) : (
                imageBox
              );
            })()}

            <div className="flex flex-col gap-[8px]">
              <h3 className="t-headline">{project.name}</h3>
              {/* Fixed to 4 lines (line-clamp caps it, min-h reserves the space even when a
                  blurb is shorter) so the tags/GitHub row lines up at the same height across
                  every card regardless of blurb length — otherwise a 2-line blurb next to a
                  4-line one pushes everything below it out of alignment. 4 lines is what the
                  longest current blurb (ToolShare's) actually needs at this card width; a much
                  longer blurb added later would still get clamped, just worth knowing. */}
              <p className="t-body text-[var(--ink-muted)] line-clamp-4 min-h-[78px]">
                {project.blurb}
              </p>
            </div>

            <div className="flex flex-wrap gap-[6px]">
              {project.tags.map((tag, i) => (
                <span
                  key={`${project.name}-${tag}-${i}`}
                  className="t-micro px-[10px] py-[5px] rounded-[var(--radius-pill)] bg-[var(--canvas)] text-[var(--ink-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-[8px] mt-auto">
              <Button size="sm" variant="secondary" href={project.githubHref}>
                GitHub
              </Button>
              {project.liveHref && (
                <Button size="sm" variant="primary" href={project.liveHref}>
                  Live demo
                </Button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
