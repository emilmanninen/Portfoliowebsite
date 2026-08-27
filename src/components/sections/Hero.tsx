import Button from "@/components/ui/Button";

// Ported from the "top" section of Developer Portfolio.dc.html.
export default function Hero() {
  return (
    <section
      id="top"
      className="pt-[120px] pb-[96px] flex flex-wrap gap-[60px] items-end justify-between"
    >
      <div className="flex-1 min-w-0 basis-[520px] max-w-[860px] flex flex-col gap-[40px]">
        <div className="flex items-center gap-[12px]">
          <span className="flex gap-[4px]">
            <span className="w-[8px] h-[8px] bg-[var(--ink)]" />
            <span className="w-[8px] h-[8px] bg-[var(--ink-muted)]" />
          </span>
          <span className="t-caption text-[var(--ink-muted)] uppercase tracking-[0.09em]">
            Junior fullstack developer
          </span>
        </div>

        <h1
          className="t-display-xxl uppercase max-w-[12ch]"
          style={{
            fontSize: "clamp(62px, 9vw, 110px)",
            letterSpacing: "-0.05em",
            textWrap: "balance",
          }}
        >
          Building things that work.
        </h1>

        <p className="t-body-lg text-[var(--ink-muted)] max-w-[46ch]">
          Based in Jyväskylä, Finland, available immediately. Looking for a junior developer
          role — backend-leaning, comfortable across the stack.
        </p>

        <div className="flex flex-wrap gap-[12px]">
          <Button size="lg" href="#projects">
            View projects
          </Button>
          <Button size="lg" variant="secondary" href="#contact">
            Download CV
          </Button>
        </div>
      </div>

      <div className="flex-none w-[220px] h-[280px] bg-[var(--surface-1)] rounded-[var(--radius-lg)] shadow-[var(--elev-1)] flex items-center justify-center">
        <span className="t-caption text-[var(--ink-muted)]">Photo placeholder</span>
      </div>
    </section>
  );
}
