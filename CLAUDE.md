# CLAUDE.md

Project context for Claude Code. Read this fully before making changes.

## What this is

Personal portfolio website for **Bharat Bhusan Dash** — Senior QA Engineer / SDET / Test Automation, 9+ years in US healthcare software at Mindfire Solutions. The site positions him for senior QA leadership, SDET, and quality-strategy roles. Single-page Next.js app, statically prerendered.

## Commands

```bash
npm install      # install deps
npm run dev      # dev server at localhost:3000
npm run build    # production build — MUST pass before any change is considered done
```

## Architecture

- **Next.js 14 (App Router) + TypeScript (strict) + Tailwind CSS + Framer Motion + lucide-react**
- Single page: `app/page.tsx` composes section components in order:
  `Navbar → Hero → MetricsStrip → About → Skills → Automation → Experience → Projects → Dashboard → Certifications → Testimonials → Contact → Footer`
- **ALL site copy lives in `lib/data.ts`.** Components are presentation-only. Never hardcode content in a component; edit the data file.
- Resume served from `public/Bharat_Dash_Resume.pdf` (download buttons in Hero and Contact).

## Design system

- Theme tokens are CSS variables (space-separated RGB triplets) in `app/globals.css`, consumed by Tailwind as `rgb(var(--x) / <alpha-value>)`. Dark is default; `html.light` switches themes. Theme toggle persists via `localStorage` (the only localStorage use — keep it that way).
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (mono) — loaded via Google Fonts `@import` at the top of `globals.css`.
- Signature visual language: **the test-report motif.** The hero is a "spec runner" (typed assertions gaining green ✓ PASS), and PASS-chip / ✓ semantics repeat across skills tiers, experience bullets, project cards, and the dashboard. New sections should speak this language, not introduce a new one. The Automation section's framework-anatomy tree uses the same terminal styling.
- Utility classes: `.glass` (card), `.chip` (mono pill), tier color classes. Reuse them.
- Accessibility floor: skip-link, `prefers-reduced-motion` respected (Framer + CSS), visible focus rings, semantic landmarks. Do not regress these.

## Content rules — NON-NEGOTIABLE

These encode decisions made deliberately with the owner. Do not "improve" past them.

1. **Client confidentiality / masking.** All client engagements are described by domain only ("US-based medical imaging client", "US-based chronic care management client", "US-based post-acute care client"). NEVER add real client names, product names, ticket IDs, internal endpoint paths, PR numbers, or colleague names — anywhere in this repo, including comments and commit messages. The phrase "later acquired by a Fortune 5 healthcare organization" on the post-acute card is the agreed ceiling of identifiability.
2. **No fabricated metrics.** The only numbers allowed are evidence-backed: 9+ years, 50+ suites, 5,000+ tests authored, 5 promotions, 25+ member QA org, 2.5+ years on current engagement. `dashboard.verifiedMetrics` stays an empty array until the owner supplies real, defensible figures (it renders nothing while empty). Never invent coverage percentages or time savings.
3. **No Selenium.** Excluded by the owner's explicit instruction. Do not add it to skills, cards, copy, or metadata.
4. **Skills are evidence-tiered** (EXPERT / PROFICIENT / EMERGING / MIGRATION). Never inflate a tier or add an untiered skill. Protractor appears only as migration capability, never as a current skill.
5. **Best Performer (March 2025)** appears ONLY in the Dashboard achievements and Certifications sections — deliberately excluded from the current-engagement record.
6. **Testimonials** section is intentionally UNMOUNTED from `app/page.tsx` until real recommendations exist (the component file remains). A "references on request" line lives in Contact meanwhile. Never add placeholder quotes; when real quotes land, populate `testimonials` in `lib/data.ts` and re-mount the section.
7. **Role ↔ engagement mapping is fixed history** — do not reshuffle:
   - Senior Software Test Engineer (Jan 2019 – Mar 2022) → post-acute care engagement (longest)
   - Associate Test Lead (Mar 2022 – Jun 2026) → chronic care client (Mar 2022 – Oct 2023), then imaging client from Oct 2023
   - Testing Team Lead (Jun 2026 – present) → imaging client; promotion earned while embedded on that engagement
8. **Timeline ↔ engagement de-duplication:** detailed achievements live in the featured engagement block; role-timeline entries stay thin and point to it. Don't restate the same fact in both.
9. **Headline counters render once** — in the MetricsStrip only. The Dashboard deliberately does NOT repeat them (pipeline + achievements + owner-supplied verifiedMetrics only). Do not re-add counters there.
10. **Resume PDF is one page.** Body type is already at its floor (8.8pt). Any added bullet requires removing one.

## Voice

Engineering-confident, evidence-first, zero filler. Banned phrasings: "hardworking", "passionate", "thrives in dynamic environments", "adapted quickly" (show the adaptation instead). Claims should be survivable in a skeptical interview — when in doubt, understate.

## Known TODOs (owner input required — do not guess)

- `site.siteUrl` is a placeholder; set the real domain after deploy (used in SEO metadata).
- Post-acute engagement start date (card currently says "THROUGH MAR 2022" with no start).
- `dashboard.verifiedMetrics` — awaiting real numbers from Zephyr/CI history.
- `public/Bharat_Dash_Resume.pdf` is a generated stand-in; owner to replace with final resume.
- Testimonials — awaiting real LinkedIn recommendations.
