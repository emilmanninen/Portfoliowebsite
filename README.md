# Developer Portfolio

Single-page portfolio site for Emil Manninen — a self-taught fullstack developer (~1 year in) job hunting in Finland. Goal: a recruiter understands who I am, sees real project work, and can contact me in a few seconds of scanning.

The visual design (dark editorial tone, oversized display type, gradient spotlight cards) originated in [Claude Design](https://claude.ai/design) and was implemented here as a Next.js site.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — Figtree (display), Inter (body), JetBrains Mono, self-hosted at build time
- Static site: no backend, no database. Contact is mailto + GitHub/LinkedIn links, not a form.

## Project structure

```
src/
  app/                 # root layout, global styles, the single page
  components/
    ui/                # Button, IconButton — design-system primitives
    layout/            # TopNav, Footer
    sections/          # Hero, About, Projects, Contact
  data/
    projects.ts        # project card content
  styles/
    tokens/            # colors, typography, spacing, radius, elevation, motion
```

Design tokens and component boundaries are ported from the Claude Design handoff rather than styled ad hoc, so the site stays consistent if the source design system changes.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Status

Static structure and layout are in place and responsive behavior has been verified across mobile/tablet/desktop breakpoints. Headline, bio, project descriptions, and some contact links are still placeholder content pending real copy — see `CLAUDE.md` for the working roadmap.
