# Developer Portfolio

[![CI](https://github.com/emilmanninen/Portfoliowebsite/actions/workflows/ci.yml/badge.svg)](https://github.com/emilmanninen/Portfoliowebsite/actions/workflows/ci.yml)

Single-page portfolio site for Emil Manninen — a self-taught fullstack developer (~1 year in) job hunting in Finland. Goal: a recruiter understands who I am, sees real project work, and can contact me in a few seconds of scanning.

**Live:** [emilmanninen.com](https://emilmanninen.com/)

The visual design (dark editorial tone, oversized display type, gradient spotlight cards) originated in [Claude Design](https://claude.ai/design) and was implemented here as a Next.js site.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — Figtree (display), Inter (body), JetBrains Mono, self-hosted at build time
- Static site: no backend, no database. Contact is direct external links — Gmail compose, GitHub, LinkedIn — not a form.
- [Vitest](https://vitest.dev) + [React Testing Library](https://testing-library.com/react) for unit tests
- GitHub Actions CI: lint, test, and build run on every push to `main` and every PR

## Project structure

```
.github/workflows/     # CI: lint, test, build
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
vitest.config.mts       # test runner config (jsdom environment)
vitest.setup.ts         # extends expect() with jest-dom matchers
```

Design tokens and component boundaries are ported from the Claude Design handoff rather than styled ad hoc, so the site stays consistent if the source design system changes.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build       # production build
npm run lint        # eslint
npm run test        # vitest, single run (what CI runs)
npm run test:watch  # vitest, watch mode
```

## Status

Layout is static and responsive across mobile/tablet/desktop. Copy (headline, bio, project descriptions), project screenshots, and all contact/live-demo links are real, not placeholders. The one exception is "Download CV" — it currently scrolls to the Contact section rather than serving an actual file, since the CV itself hasn't been finalized yet.
