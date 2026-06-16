# Bharat Bhusan Dash

### Senior QA Engineer · SDET · Test Automation

> Quality is a clinical requirement, not a checkbox.

9+ years in US healthcare software — architecting test automation frameworks, validating clinical data pipelines, and owning release sign-off on regulated medical platforms where a missed defect is a patient-safety risk.

🌐 **[bharatdash.vercel.app](https://bharatdash.vercel.app)** · 💼 **[LinkedIn](https://www.linkedin.com/in/bharatbhusandash)** · 📫 **bharatdash8@outlook.com** · 📍 Bhubaneswar, India

---

## At a glance

| | |
|---|---|
| **9+** years in quality engineering | **5,000+** automated tests authored |
| **50+** automation suites designed & built | **5** promotions in one organization (Intern → Testing Team Lead) |
| **2.5+** years leading QA for a cardiovascular CT diagnostics platform | **25+** member QA org operated within |

*Every number here is evidence-backed — no estimated percentages, no invented coverage figures. The same standard I hold defect reports to.*

---

## Core skills

Skills are tiered by **evidence of use**, not padded into a keyword wall:

🟢 **Expert** — daily, expert-level use · 🔵 **Proficient** — strong working proficiency · 🟡 **Emerging** — active, differentiating practice · ⚪ **Migration** — legacy depth, sold as migration capability

### Test Automation
*TypeScript/JavaScript-stack automation: framework architecture, Page Object Model, data-driven patterns, visual regression, flake reduction.*

| Skill | Tier |
|---|---|
| Cypress | 🟢 Expert |
| TestCafe | 🟢 Expert |
| JavaScript | 🟢 Expert |
| Framework architecture (POM, data-driven) | 🟢 Expert |
| Playwright | 🔵 Proficient |
| TypeScript | 🔵 Proficient |
| Visual regression testing | 🔵 Proficient |
| Protractor → Playwright/Cypress migration | ⚪ Migration |

### API Testing
*REST endpoint validation from schema to data contract — including parity checks against exports and UI state.*

| Skill | Tier |
|---|---|
| Postman | 🟢 Expert |
| Swagger / OpenAPI | 🟢 Expert |
| REST validation & negative testing | 🟢 Expert |
| Contract & parity verification | 🔵 Proficient |

### Database & Data Validation
*Backend verification and clinical data reconciliation across CSV, API, and report outputs.*

| Skill | Tier |
|---|---|
| SQL (Oracle SQL Developer) | 🟢 Expert |
| Clinical data reconciliation | 🟢 Expert |
| MongoDB | 🔵 Proficient |
| Bash data tooling (diff, dedup, extract) | 🔵 Proficient |

### CI/CD & Tooling
*Suites wired into pipelines, version-control discipline, and test-cycle management at scale.*

| Skill | Tier |
|---|---|
| Git · GitHub · Bitbucket | 🟢 Expert |
| Jira | 🟢 Expert |
| Zephyr Scale | 🟢 Expert |
| GitHub Actions · Jenkins · Bamboo | 🔵 Proficient |
| AWS (CI/CD · Secrets Manager) | 🔵 Proficient |
| Xray | 🔵 Proficient |

### Quality Engineering & Leadership
*The strategy layer: planning what to test, proving what was tested, and owning the release decision.*

| Skill | Tier |
|---|---|
| Test strategy & release planning | 🟢 Expert |
| Risk-based testing | 🟢 Expert |
| Release validation & sign-off | 🟢 Expert |
| Defect management & RCA | 🟢 Expert |
| Agile / Scrum ceremonies | 🟢 Expert |

### AI-Augmented QA
*Not a buzzword — internal tooling in production use by my team.*

| Skill | Tier |
|---|---|
| Claude Code plugin development | 🟡 Emerging |
| Test-cycle audit automation (Zephyr) | 🟡 Emerging |
| MCP integrations (Cypress MCP) | 🟡 Emerging |
| Automated QA reporting (Zephyr → Slack) | 🟡 Emerging |

---

## Experience

All within **Mindfire Solutions** — nine years, one discipline, one domain (US healthcare).

| Role | Period | Focus |
|---|---|---|
| **Testing Team Lead** | Jun 2026 – Present | Lead QA for cardiovascular CT imaging platform — release readiness, go/no-go sign-off, mentoring, hiring frameworks |
| **Associate Test Lead** | Mar 2022 – Jun 2026 | Chronic care management engagement (TestCafe stack), then cardiovascular imaging from Oct 2023 |
| **Senior Software Test Engineer** | Jan 2019 – Mar 2022 | Post-acute care engagement — 50+ suites (100+ tests each), CI/CD with Bamboo/Jenkins/Bitbucket |
| **Software Test Engineer → Trainee → Intern** | Jan 2017 – Jan 2019 | Foundations: JS automation, Postman API testing, SQL/MongoDB, CI/CD discipline |

*Client names are masked by domain per vendor confidentiality — described as what they are (cardiovascular CT diagnostics, chronic care management, post-acute care) rather than named. Available in interviews.*

---

## Selected work

| Case study | Domain | Outcome |
|---|---|---|
| **Release Validation — Cardiovascular Imaging Platform** | Medical imaging | QA lead with sign-off accountability for the largest release in the program's history |
| **Clinical Data Reconciliation** | Data validation | Distinguished a real data inconsistency from an aggregation convention across CSV/API/PDF outputs — prevented both a false bug report and a silent ship |
| **API Export Endpoint Validation** | API testing | Caught 2 ship-blocking defects pre-release (HTML-instead-of-CSV routing bug; duplicate records) |
| **Jurisdiction-Switching State Bug** | Functional testing | Data-isolation defect caught in QA in a regulated, multi-jurisdiction product |
| **AI-Augmented QA Tooling** | QA engineering · Tooling | Built an internal Claude Code plugin (test-cycle auditing + Zephyr → Slack reporting), adopted by the team |
| **Production Crash — Root-Cause Support** | Root-cause analysis | RCA traced a crash to a specific PR; strengthened release checks around dependency changes |

---

## Recognition & education

- 🏆 **Best Performer — March 2025**, company-wide monthly recognition
- 📜 **Claude Code in Action** — Anthropic
- 🎓 **Master of Computer Applications (MCA)** — College of Engineering and Technology, Bhubaneswar (2014–2017)
- 🎓 **BSc Computer Science** — Samanta Chandra Sekhara Autonomous College (2011–2014)

---

## About this repository

This repo is the source for [bharatdash.vercel.app](https://bharatdash.vercel.app) — a single-page portfolio built as a work sample. A QA engineer's site should read like a test report, not a brochure: the hero is a live "spec runner" (my introduction typed out as passing assertions), and the PASS / ✓ language carries through every section.

**Tech stack**

- [Next.js 14](https://nextjs.org/) (App Router) · React 18 · TypeScript (strict)
- Tailwind CSS with a CSS-variable token system (dark default, light-theme toggle)
- Framer Motion (scroll reveals, animated counters, spec-runner typing) — `prefers-reduced-motion` respected
- lucide-react icons · Vercel Web Analytics · fully static prerender · ~133 kB first load

**Run locally**

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

**Structure**

```
app/            layout (SEO metadata, theme bootstrap), page, global styles & tokens
components/     one component per section — presentation only
lib/data.ts     every word of site content lives here; edit this, not components
public/         resume PDF
```

> Content architecture: all copy lives in `lib/data.ts`; components are presentation-only. Edit the data file, not the components.

---

## Contact

Open to senior QA leadership, SDET, and quality-strategy roles — particularly where software quality has real-world consequences.

📫 **bharatdash8@outlook.com** · 💼 **[linkedin.com/in/bharatbhusandash](https://www.linkedin.com/in/bharatbhusandash)**

References and detailed recommendations available on request — including development leads and client-side stakeholders I've shipped releases with.

---

<sub>© Bharat Bhusan Dash. Site code free to learn from; content is mine.</sub>
