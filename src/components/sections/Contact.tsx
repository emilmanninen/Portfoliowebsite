import Button from "@/components/ui/Button";

// Ported from the "contact" section of Developer Portfolio.dc.html. Per CLAUDE.md this is
// mailto + external profile links only — no contact form. Hrefs are placeholders until you
// give me the real Gmail address, GitHub handle, LinkedIn URL, and a CV file to link.
export default function Contact() {
  return (
    <section
      id="contact"
      className="py-[96px] border-t border-[var(--hairline-soft)] flex flex-col gap-[40px]"
    >
      <div className="flex items-center gap-[12px]">
        <span className="flex gap-[4px]">
          <span className="w-[8px] h-[8px] bg-[var(--ink)]" />
          <span className="w-[8px] h-[8px] bg-[var(--ink-muted)]" />
        </span>
        <span className="t-caption text-[var(--ink-muted)] uppercase tracking-[0.09em]">
          Contact
        </span>
      </div>

      <h2 className="t-display-lg uppercase max-w-[16ch]">Short prompt line placeholder</h2>

      <div className="flex flex-wrap items-center gap-[12px]">
        <Button size="lg" variant="secondary" href="mailto:eme.manninen@gmail.com">
          Gmail
        </Button>
        <Button size="lg" variant="secondary" href="#">
          GitHub
        </Button>
        <Button size="lg" variant="secondary" href="#">
          LinkedIn
        </Button>
        <Button size="lg" href="#">
          Download CV
        </Button>
      </div>
    </section>
  );
}
