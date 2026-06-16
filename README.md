# Bharat Bhusan Dash — QA Engineering Portfolio

Personal portfolio of a Senior QA Engineer / SDET with 9+ years in US healthcare software — test automation architecture, API & clinical data validation, and QA leadership on regulated medical platforms.

**Live site:** [bharatdash.vercel.app](https://bharatdash.vercel.app) · **LinkedIn:** [linkedin.com/in/bharatbhusandash](https://www.linkedin.com/in/bharatbhusandash)

## The idea

A QA engineer's portfolio should read like a test report, not a brochure. The hero is a live "spec runner" — my introduction typed out as passing assertions — and that PASS/✓ language carries through every section: evidence-tiered skills, an engagement record with verifiable outcomes, and a dashboard that refuses to show any number I can't defend in an interview.

Two deliberate content choices worth noting:

- **Skills are tiered by evidence** (Expert / Proficient / Emerging / Migration), not padded into a keyword wall.
- **Client engagements are masked by domain** — described as what they are (cardiovascular CT diagnostics, chronic care management, post-acute care) without naming clients, per vendor confidentiality. Names available in interviews.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) · React 18 · TypeScript (strict)
- Tailwind CSS with a CSS-variable token system (dark default, light theme toggle)
- Framer Motion (scroll reveals, animated counters, spec-runner typing) with `prefers-reduced-motion` respected
- lucide-react icons · fully static prerender · ~133 kB first load

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

```
app/            layout (SEO metadata, theme bootstrap), page, global styles & tokens
components/     one component per section — presentation only
lib/data.ts     every word of site content lives here; edit this, not components
public/         resume PDF
```

## Features

- Spec-runner hero animation with typed assertions and pass summary
- Dark/light theme with persistence, glassmorphism cards, ambient grid backdrop
- Evidence-tiered skills matrix and a test-framework anatomy ("the architecture I build to")
- Featured engagement record + role timeline, de-duplicated by design
- Animated counters, expandable case-study cards, accessible keyboard navigation
- SEO/OpenGraph metadata, fully responsive down to mobile

## About me

Testing Team Lead at Mindfire Solutions. I've shipped automation on four framework generations (Protractor → TestCafe → Cypress → Playwright/TypeScript), led QA within a 25+ member organization, and currently lead testing for a cardiovascular imaging platform — where the pixels can be right while the numbers are wrong, so the numbers get tested too.

📫 bharatdash8@outlook.com

---

© Bharat Bhusan Dash. Site code free to learn from; content is mine.
