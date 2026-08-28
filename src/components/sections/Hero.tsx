import Button from "@/components/ui/Button";

// Ported from the "top" section of Developer Portfolio.dc.html.
export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-[120px] pb-[96px] flex flex-wrap gap-[60px] items-end justify-between"
    >
      {/* Ambient glow, not a card. A radial-gradient with no explicit size defaults to
          "farthest-corner" sizing: its 100%-radius is the distance from the center point to the
          box's FARTHEST corner, not its nearest edge. With the center near the top-right of a
          ~1139x550 section, the right edge is only ~171px away and the bottom edge ~467px away,
          but the farthest-corner distance (to bottom-left) is ~1075px — so the 70% stop lands
          at ~752px, far past those close edges. The gradient hits the edge while still solidly
          colored, long before it's had room to fade. Fix: make the box itself much bigger than
          the section (w-screen, breaking out of <main>'s max-width entirely; h-[150%]) so the
          farthest-corner distance grows well past where the fade completes in every direction.
          left-1/2 -translate-x-1/2 centers a w-screen element on the viewport regardless of the
          parent's own width/padding — the standard full-bleed-inside-a-constrained-container
          technique. It only works without an overflow-hidden ancestor narrower than the
          viewport, though — the section itself used to have overflow-hidden, which clipped this
          right back down to the section's own (max-w-constrained) box, undoing the breakout
          entirely. w-screen never exceeds the real viewport width on its own, so dropping that
          overflow-hidden doesn't reopen the horizontal-scroll risk it was guarding against;
          see the outer wrapper in page.tsx for that safety net now. #6a4cf5 is --gradient-violet
          as rgb(); custom properties can't be interpolated into a gradient() function, so the
          value has to be inlined here. Muted opacity since it's the first color anywhere on an
          otherwise monochrome site; dimmed further on mobile where there's no empty space
          beside the text for it to sit in. */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[150%] w-screen -translate-x-1/2 -translate-y-1/2 max-[809px]:opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 30%, rgba(106,76,245,0.25) 0%, transparent 45%), " +
            "radial-gradient(circle at 66% 62%, rgba(106,76,245,0.12) 0%, transparent 45%)",
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
