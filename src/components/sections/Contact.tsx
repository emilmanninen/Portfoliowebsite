import Button from "@/components/ui/Button";

// Ported from the "contact" section of Developer Portfolio.dc.html. Per CLAUDE.md this is
// direct links only, no contact form — Gmail opens a pre-addressed compose window instead of
// a mailto: link (recruiters on a work machine without a configured mail client would otherwise
// hit a dead "no app to handle this" prompt).
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

      <h2 className="t-display-lg uppercase max-w-[16ch]">Open to opportunities</h2>

      <div className="flex flex-wrap items-center gap-[12px]">
        <Button
          size="lg"
          variant="secondary"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=eme.manninen@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gmail
        </Button>
        <Button
          size="lg"
          variant="secondary"
          href="https://github.com/emilmanninen"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
        <Button
          size="lg"
          variant="secondary"
          href="https://www.linkedin.com/in/emil-manninen-78680129b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Button>
        <Button size="lg" href="/emil-manninen-cv.pdf" download="Emil Manninen - CV.pdf">
          Download CV
        </Button>
      </div>
    </section>
  );
}
