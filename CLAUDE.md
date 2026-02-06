# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

InnovaLaw corporate website — a law firm in Santiago, Chile specializing in legal consulting. Single-page application in Spanish with smooth-scroll anchor navigation between sections. No routing library; sections are navigated via `#inicio`, `#servicios`, `#nosotros`, `#contacto` anchors.

## Commands

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # TypeScript check + Vite production build (tsc && vite build)
npm run preview    # Preview production build locally
npm run lint       # ESLint (flat config, ESLint 9)
```

**Note:** There are no `test`, `lint:fix`, `format`, or `typecheck` scripts configured. The `build` command runs `tsc` as the type-check step.

## Tech Stack

- **React 19** + **TypeScript 5.9** (strict mode) + **Vite 7**
- **Tailwind CSS 4** — uses `@theme` directive in `src/index.css` for custom design tokens
- **Framer Motion** — all animations (scroll-triggered, hover, entrance, mobile menu)
- **Node.js 22** (specified in `.node-version`)
- **Deployment:** Cloudflare Pages via GitHub Actions on push/PR to `main`

## Architecture

### Atomic Design Pattern

Components follow atoms → molecules → organisms hierarchy:

```
src/components/
├── atoms/        Button, Input, SectionTitle
├── molecules/    ContactForm, ServiceCard, FeatureItem
└── organisms/    Navbar, HeroSection, StatsSection, ServicesSection,
                  AboutSection, CTA, ContactSection, Footer
```

`App.tsx` composes all organisms in a single vertical layout — there are no routes or pages.

### State Management

Component-local state only (`useState`, `useRef`). No global state library. Key stateful components:
- `Navbar`: `isOpen` (mobile menu), `scrolled` (scroll-based style change)
- `ContactForm`: `submitted` (success message display)

### Animation Patterns

All animations use Framer Motion:
- **Scroll-triggered:** `useInView(ref, { once: true, margin: '-100px' })` pattern
- **Staggered entrance:** `delay: index * 0.1` on mapped items
- **Hover/tap:** `whileHover`, `whileTap` props
- **Conditional mount:** `AnimatePresence` for mobile menu toggle

### Styling

Tailwind CSS 4 with custom theme tokens defined in `src/index.css` via `@theme`:
- Colors: `primary` (#0170B9), `accent` (#c9a84c gold), `navy` (#0a1628), `cream` (#faf8f5), `warm-gray` (#e6e2dc)
- Typography: **Cormorant Garamond** (serif, headings) + **DM Sans** (sans-serif, body) — loaded via Google Fonts in `index.html`
- Custom utility classes in `index.css`: `.glass`, `.card-hover`, `.hero-gradient`, `.line-accent`, `.noise::before`, `.border-glow`, `.link-underline`

### Component Conventions

- Functional components only, TypeScript interfaces for all props
- Props destructured in function signature
- Data arrays (services, stats, features) defined inline within their organism component
- Exportable type interfaces (e.g., `ServiceProps`) when reused

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml`:
1. Node.js 22 setup
2. `npm ci` → `npm run build`
3. Deploy `dist/` to Cloudflare Pages (`innovalaw-web` project)

Required GitHub secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`

Manual deploy: `npx wrangler pages deploy dist --project-name=innovalaw-web`
