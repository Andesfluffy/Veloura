# Veloura Marketing Experience

Veloura is a luxury-grade marketing site built with Next.js App Router, Tailwind CSS, and TypeScript. The aesthetic blends matte-black minimalism with muted gold accents, subtle motion, and glassmorphism to communicate trust, eccentricity, and calm ambition.

## Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/docs/app) with strict TypeScript
- [React 19](https://react.dev/) and [Framer Motion](https://www.framer.com/motion/) for motion and interactions
- [Tailwind CSS v4](https://tailwindcss.com/) with custom theme tokens defined in CSS
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) for client validation
- [Radix UI Tooltip](https://www.radix-ui.com/primitives/docs/components/tooltip) for accessible hover states

## Getting Started

1. Install dependencies (pnpm recommended):
   ```bash
   pnpm install
   ```
2. Run the development server:
   ```bash
   pnpm dev
   ```
3. Visit [http://localhost:3000](http://localhost:3000) to explore the site.

## Tooling & Scripts

- `pnpm dev` – start the local Next.js server.
- `pnpm build` / `pnpm start` – production build & serve.
- `pnpm lint` – runs ESLint (Next core-web-vitals + project rules).
- `pnpm typecheck` – strict TypeScript validation.
- `pnpm format` – Prettier check (Tailwind-aware). Use `pnpm format:write` to auto-fix formatting.

## Project Structure Highlights

```
src/
  app/
    (marketing)/        // All marketing pages (home + routes)
    api/lead/route.ts   // Lead capture stub
  components/
    ui/                 // Buttons, inputs, modal, tooltip, etc.
    layout/             // Header, footer, container, structured data helper
    sections/           // Reusable marketing sections for the home page
  data/                 // Feature grid, testimonials, curriculum, pricing, FAQs
  lib/                  // Copy, constants, analytics stub, utilities, validation
  styles/globals.css    // Tailwind theme tokens & global styles
public/
  og/                   // Open-graph images
  textures/             // Noise + lava gold overlays
  shapes/               // SVG flourishes
```

### Copy & Content

- `src/lib/copy.ts` centralises headline/body copy.
- Collection content lives in `src/data/*` (features, pricing, FAQs, etc.). Update these files to refresh page content.

### Theme & Colors

- All color tokens are defined in `src/styles/globals.css` (`--veloura-*`).
- Update the CSS variables to adjust the palette and gradients.
- Tailwind utility tokens are set via `@theme inline`; classes reference semantic names like `bg-[rgba(231,214,179,0.1)]` built from those variables.

### Motion & Accessibility

- Motion respects `prefers-reduced-motion` across marquee, hero, cards, and navigation.
- Keyboard focus rings use gold glows (`focus-ring` helper class).
- Semantic HTML + landmarks used across layouts and sections.

### Forms & API

- Lead form validation is handled with Zod on the client and server.
- `/api/lead` logs submissions in-memory and returns `{ ok: true }` for demo usage—swap with your real data layer when ready.

## Customisation Guide

1. **Brand voice** – Update `copy.ts` to adjust taglines, CTAs, and microcopy for each page.
2. **Color palette** – Edit the `--veloura-*` variables in `globals.css`. The rest of the theme reacts automatically.
3. **Assets** – Replace textures and OG images in `public/`. Maintain the same filenames for immediate swaps.
4. **Curriculum & pricing** – Edit the arrays in `src/data/curriculum.ts` and `src/data/pricing.ts`. Cards and tables render dynamically from these sources.
5. **Navigation** – Update `NAV_ITEMS` in `src/lib/constants.ts` to add or remove pages.

## SEO & Analytics

- Metadata and Open Graph defaults are defined in `src/app/layout.tsx` and per-page metadata files.
- JSON-LD for organization + breadcrumbs is injected per route via `StructuredData` helper.
- `src/lib/analytics.ts` contains a `track` stub (`console.info`). Replace it with your measurement platform when ready.

## Accessibility & Testing

- Designed for WCAG AA+ contrast ratios on dark backgrounds.
- Components include keyboard and screen-reader affordances (modal focus handling, tooltip delays, carousel controls).
- Run `pnpm lint`, `pnpm typecheck`, and `pnpm build` before deploying.

## Deployment

The project is deployment-ready on platforms that support Next.js (e.g., Vercel, Netlify with Next adapter). Ensure `pnpm build` succeeds and supply environment variables for production analytics when you integrate them.
