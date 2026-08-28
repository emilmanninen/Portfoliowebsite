"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";

type NavLink = { label: string; href: string; download?: string };

type TopNavProps = {
  brand: string;
  links: NavLink[];
  primary: NavLink;
  secondary?: NavLink;
};

// 56px sticky bar, opaque canvas (no backdrop-blur — the design system deliberately avoids
// frosted-glass navbars). Ported from components/navigation/TopNav.jsx. Nav links collapse into
// a hamburger overlay below the DS's 810px tablet breakpoint; the primary pill stays on the bar.
export default function TopNav({ brand, links, primary, secondary }: TopNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-[var(--canvas)]">
      <div className="h-[56px] max-w-[var(--container-max)] mx-auto px-[var(--space-xl)] flex items-center gap-[var(--space-lg)]">
        <a
          href="#top"
          className="t-body-sm flex-none text-[var(--ink)] font-medium tracking-[-0.3px] no-underline"
        >
          {brand}
        </a>

        <nav className="hidden min-[810px]:flex gap-[var(--space-xs)] flex-1 justify-center">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="t-body-sm px-[12px] py-[8px] rounded-[var(--radius-pill)] text-[var(--ink-muted)] no-underline hover:text-[var(--ink)] transition-colors duration-[var(--dur-base)] ease-[var(--ease-standard)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-[var(--space-xs)] flex-none">
          {/* Button/IconButton set an unconditional `inline-flex` in their own base styles, which
              would out-rank a `hidden` class passed straight into them (both land in the same
              Tailwind utility layer, and `.inline-flex` sorts after `.hidden`, so it would win
              the cascade at every viewport). Wrapping in a span that owns the visibility classes
              avoids that collision. */}
          {secondary && (
            <span className="hidden min-[810px]:inline-flex">
              <Button variant="secondary" size="sm" href={secondary.href}>
                {secondary.label}
              </Button>
            </span>
          )}
          <span className="hidden min-[810px]:inline-flex">
            <Button size="sm" href={primary.href} download={primary.download}>
              {primary.label}
            </Button>
          </span>

          <span className="min-[810px]:hidden">
            <IconButton
              label={open ? "Close menu" : "Menu"}
              size={44}
              onClick={() => setOpen((o) => !o)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </IconButton>
          </span>
        </div>
      </div>

      {open && (
        <div className="min-[810px]:hidden border-t border-[var(--hairline-soft)] px-[var(--space-xl)] pt-[var(--space-md)] pb-[var(--space-lg)] flex flex-col gap-[var(--space-sm)]">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="t-body-lg text-[var(--ink)] no-underline"
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-wrap gap-[var(--space-xs)] pt-[var(--space-sm)]">
            {secondary && (
              <Button variant="secondary" size="sm" href={secondary.href} onClick={() => setOpen(false)}>
                {secondary.label}
              </Button>
            )}
            <Button
              size="sm"
              href={primary.href}
              download={primary.download}
              onClick={() => setOpen(false)}
            >
              {primary.label}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
