import Button from "@/components/ui/Button";

// Ported from the "top" section of Developer Portfolio.dc.html.
export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-[120px] pb-[96px] flex flex-wrap gap-[60px] items-end justify-between"
    >
      {/* Ambient glow, not a card. Full-bleed breakout: the section itself doesn't set a
          max-w, it inherits the 1139px content width from <main className="max-w-[var(
          --container-max)] ...">. left-1/2 w-screen -translate-x-1/2 is the standard trick to
          escape that regardless — it centers a viewport-width element on the viewport itself,
          ignoring the parent's own (narrower, off-center-from-viewport) box. top-0 bottom-0
          keeps the height tied to the section exactly, same as before — only width is breaking
          out here, per the ask; the text column below keeps its own max-w-[860px] untouched.

          This does NOT fully fix the hard-edge issue by itself — see the follow-up message.
          farthest-corner sizing is still driven by the section's HEIGHT (742px, unchanged by
          going full-bleed on width), so the top/bottom edges are still close relative to the
          farthest-corner radius even in a wider box. Kept as asked; flagging so it's not
          mistaken for a complete fix. */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-screen -translate-x-1/2 blur-3xl max-[809px]:opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle farthest-corner at 78% 30%, rgba(106,76,245,0.25) 0%, transparent 92%), " +
            "radial-gradient(circle farthest-corner at 65% 78%, rgba(106,76,245,0.12) 0%, transparent 92%)",
        }}
      />

      <div className="relative z-10 flex-1 min-w-0 basis-[520px] max-w-[860px] flex flex-col gap-[40px]">
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
          Shipping things that work.
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
    </section>
  );
}
