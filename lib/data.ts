/* ═══════════════════════════════════════════════════════════════
   SINGLE SOURCE OF CONTENT
   Every word on the site comes from this file. Edit here, not in
   components.

   Items tagged TODO need your input before you publish:
     1. github   — add your public GitHub URL (or leave "" to hide)
     2. siteUrl  — your real domain once deployed (used for SEO)
     3. verifiedMetrics — optional coverage / time-savings numbers.
        Stays hidden until you fill it. Do NOT invent values.
     4. testimonials — empty on purpose. Add real LinkedIn
        recommendations only; the section adapts automatically.
   ═══════════════════════════════════════════════════════════════ */

export const site = {
  name: "Bharat Bhusan Dash",
  shortName: "Bharat Dash",
  role: "Senior QA Engineer · SDET · Test Automation",
  siteUrl: "https://bharatdash.vercel.app",
  email: "bharatdash8@outlook.com",
  linkedin: "https://www.linkedin.com/in/bharatbhusandash",
  github: "https://github.com/bharatdash",
  location: "Bhubaneswar, Odisha, India",
  resumePath: "/Bharat_Dash_Resume.pdf",
  description:
    "Senior QA Engineer and SDET with 9+ years in US healthcare software — chronic care management, post-acute care, and medical imaging. Test automation (Playwright, Cypress, TestCafe, JavaScript), API and database validation, CI/CD, and QA leadership.",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Automation", href: "#automation" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Contact", href: "#contact" },
];

/* ── Hero ───────────────────────────────────────────────────── */

export const hero = {
  eyebrow: "AUTOMATION ARCHITECTURE · QA LEADERSHIP · HEALTHCARE",
  headline: "Quality is a clinical requirement, not a checkbox.",
  sub: "I lead QA for a cardiovascular diagnostics platform — architecting test automation frameworks, validating clinical data pipelines, and signing off releases where a missed defect is a patient-safety risk.",
  subShort:
    "QA lead for a cardiovascular diagnostics platform — automation architecture, clinical data validation, release sign-off.",
  // The spec-runner animation in the hero terminal
  specTitle: "bharat.spec.ts",
  specDescribe: "describe('Bharat Bhusan Dash', () => {",
  specLines: [
    "it('leads QA for clinical-grade software')",
    "it('builds automation frameworks that scale')",
    "it('validates data, not just pixels')",
    "it('ships releases that hold in production')",
  ],
  specSummary: "4 passing (9y 5m)",
  ctaPrimary: { label: "View case studies", href: "#projects" },
  ctaSecondary: { label: "Download resume", href: "/Bharat_Dash_Resume.pdf" },
};

/* ── Verified headline metrics (all evidence-backed) ────────── */

export const metrics = [
  { value: 9, suffix: "+", label: "Years in quality engineering" },
  { value: 50, suffix: "+", label: "Automation suites designed & built" },
  { value: 5000, suffix: "+", label: "Automated tests authored" },
  { value: 5, suffix: "", label: "Promotions in one organization" },
];

/* ── About ──────────────────────────────────────────────────── */

export const about = {
  heading: "Nine years deep in one discipline, one domain.",
  paragraphs: [
    "I started as a QA intern in 2017 and never treated testing as a stepping stone to development — quality engineering is the engineering discipline I chose. At Mindfire Solutions I progressed through every level of the QA ladder, from writing my first automation scripts as a trainee to leading the testing function for the largest healthcare release in my program's history.",
    "All nine years have been in US healthcare — three products spanning the care continuum: a chronic care management platform, a post-acute care transitions platform later acquired by a Fortune 5 healthcare organization, and currently a cardiovascular diagnostics platform for a US-based medical imaging client. The current work means a kind of testing most QA engineers never do — reconciling clinical computation outputs across CSV exports, API payloads, and generated PDF reports, and tracing discrepancies to underlying computation conventions instead of dismissing them as expected behavior.",
    "My philosophy: stress-test, don't validate. A QA function that exists to confirm the happy path is overhead; one that finds what everyone else assumed was fine is leverage. I apply the same standard to AI tooling — which I use aggressively in my QA workflows, and verify ruthlessly.",
  ],
  highlights: [
    { label: "Domain", value: "Healthcare · Medical imaging" },
    { label: "Current role", value: "Testing Team Lead, Mindfire Solutions" },
    { label: "Recognition", value: "Best Performer, March 2025" },
    { label: "Education", value: "MCA, CET Bhubaneswar" },
  ],
};

/* ── Skills ─────────────────────────────────────────────────── */

export type SkillTier = "EXPERT" | "PROFICIENT" | "EMERGING" | "MIGRATION";

export const tierLegend: Record<SkillTier, string> = {
  EXPERT: "Daily, expert-level use",
  PROFICIENT: "Strong working proficiency",
  EMERGING: "Active, differentiating practice",
  MIGRATION: "Legacy depth, sold as migration capability",
};

export const skillGroups: {
  title: string;
  blurb: string;
  skills: { name: string; tier: SkillTier }[];
}[] = [
  {
    title: "Test Automation",
    blurb:
      "TypeScript/JavaScript-stack automation: framework architecture, Page Object Model, data-driven patterns, visual regression, flake reduction.",
    skills: [
      { name: "Cypress", tier: "EXPERT" },
      { name: "TestCafe", tier: "EXPERT" },
      { name: "JavaScript", tier: "EXPERT" },
      { name: "Playwright", tier: "PROFICIENT" },
      { name: "TypeScript", tier: "PROFICIENT" },
      { name: "Visual regression testing", tier: "PROFICIENT" },
      { name: "Framework architecture (POM, data-driven)", tier: "EXPERT" },
      { name: "Protractor → Playwright/Cypress migration", tier: "MIGRATION" },
    ],
  },
  {
    title: "API Testing",
    blurb:
      "REST endpoint validation from schema to data contract — including parity checks against exports and UI state.",
    skills: [
      { name: "Postman", tier: "EXPERT" },
      { name: "Swagger / OpenAPI", tier: "EXPERT" },
      { name: "REST validation & negative testing", tier: "EXPERT" },
      { name: "Contract & parity verification", tier: "PROFICIENT" },
    ],
  },
  {
    title: "Database & Data Validation",
    blurb:
      "Backend verification and clinical data reconciliation across CSV, API, and report outputs.",
    skills: [
      { name: "SQL (Oracle SQL Developer)", tier: "EXPERT" },
      { name: "MongoDB", tier: "PROFICIENT" },
      { name: "Clinical data reconciliation", tier: "EXPERT" },
      { name: "Bash data tooling (diff, dedup, extract)", tier: "PROFICIENT" },
    ],
  },
  {
    title: "CI/CD & Tooling",
    blurb:
      "Suites wired into pipelines, version control discipline, and test-cycle management at scale.",
    skills: [
      { name: "GitHub Actions", tier: "PROFICIENT" },
      { name: "Jenkins", tier: "PROFICIENT" },
      { name: "Bamboo", tier: "PROFICIENT" },
      { name: "AWS (CI/CD · Secrets Manager)", tier: "PROFICIENT" },
      { name: "Git · GitHub · Bitbucket", tier: "EXPERT" },
      { name: "Jira", tier: "EXPERT" },
      { name: "Zephyr Scale", tier: "EXPERT" },
      { name: "Xray", tier: "PROFICIENT" },
    ],
  },
  {
    title: "Quality Engineering & Leadership",
    blurb:
      "The strategy layer: planning what to test, proving what was tested, and owning the release decision.",
    skills: [
      { name: "Test strategy & release planning", tier: "EXPERT" },
      { name: "Risk-based testing", tier: "EXPERT" },
      { name: "Release validation & sign-off", tier: "EXPERT" },
      { name: "Defect management & RCA", tier: "EXPERT" },
      { name: "Agile / Scrum ceremonies", tier: "EXPERT" },
    ],
  },
  {
    title: "AI-Augmented QA",
    blurb:
      "Not a buzzword — internal tooling in production use by my team.",
    skills: [
      { name: "Claude Code plugin development", tier: "EMERGING" },
      { name: "Test-cycle audit automation (Zephyr)", tier: "EMERGING" },
      { name: "MCP integrations (Cypress MCP)", tier: "EMERGING" },
      { name: "Automated QA reporting (Zephyr → Slack)", tier: "EMERGING" },
    ],
  },
];

/* ── Client engagements ─────────────────────────────────────────
   All within Mindfire Solutions. Client names intentionally masked
   (vendor confidentiality) — described by domain instead. Do NOT
   add real client names here without approval from whoever owns
   the client relationship.
   TODO: add the post-acute engagement start date if you want it shown. */

export const currentEngagement = {
  title: "US-based medical imaging client — Cardiovascular CT Diagnostics",
  statusChip: "● CURRENT ENGAGEMENT",
  periodChip: "OCT 2023 — PRESENT · 2.5+ YEARS",
  narrative:
    "I joined this engagement with zero medical-imaging background — coronary CT scans, plaque morphology, vessel territories, FFR were a foreign language. The choice was to stay a button-clicking outsider or learn the domain deeply enough to question the platform's numbers. Two and a half years later, I lead its testing function — promoted to Testing Team Lead while embedded on this project.",
  bullets: [
    {
      lead: "Earned the domain.",
      text: "Went from reading my first CT analysis report to validating clinical computation outputs — reconciling plaque and FFR figures across exports, APIs, and generated reports — the kind of QA that requires understanding the medicine, not just the software.",
    },
    {
      lead: "Grew the mandate.",
      text: "Scope expanded from test execution to release ownership: the client's largest-ever release shipped through validation cycles I planned and led.",
    },
    {
      lead: "Embedded, not outsourced.",
      text: "Daily standups, release planning, DEV-lead defect triage, production root-cause analysis — operating as part of the client's core engineering team across time zones, not as an external test vendor.",
    },
    {
      lead: "Raised the engineering bar I was measured by.",
      text: "Standardized defect reporting with development-lead approval gates and root-cause documentation — process improvements the client's own team adopted.",
    },
    {
      lead: "Brought tooling they didn't ask for.",
      text: "Introduced AI-assisted QA automation — test-cycle auditing and daily test-health reporting — that became part of how the team works.",
    },
    {
      lead: "Tested under regulation.",
      text: "Learned to treat multi-jurisdiction data isolation as a compliance requirement, finding boundary defects before they became audit findings.",
    },
  ],
  stack: [
    "Playwright",
    "TypeScript",
    "Cypress",
    "GitHub Actions",
    "API automation",
    "DB verification",
    "Visual testing",
    "AI-assisted QA tooling",
    "Zephyr Scale",
  ],
};

export const completedEngagements = [
  {
    client: "US-based chronic care management client",
    periodChip: "MAR 2022 — OCT 2023",
    domain:
      "Technology-enabled chronic care management platform helping payers and providers engage rising-risk patients between visits — improving outcomes before patients become high-acuity. First engagement as Associate Test Lead.",
    bullets: [
      "Owned TestCafe automation development and maintenance alongside full test-strategy formulation, design, reviews, and documentation.",
      "API and database testing against a Java/REST backend; HL7 integration context (Mirth).",
      "CI/CD pipelines on AWS, with AWS Secrets Manager for secure test-data handling.",
      "Progress reporting and metrics; defect RCA with error-log analysis.",
    ],
    stack: [
      "TestCafe",
      "JavaScript",
      "React/Java stack",
      "REST APIs",
      "AWS",
      "AWS Secrets Manager",
      "Mirth (HL7)",
      "Zephyr",
      "GitHub",
    ],
  },
  {
    client: "US-based post-acute care client",
    periodChip: "LONGEST ENGAGEMENT · THROUGH MAR 2022",
    domain:
      "Post-acute care management platform — care transitions and clinical decision support for Medicare Advantage populations, on a Java microservices architecture. The client was later acquired by a Fortune 5 healthcare organization.",
    bullets: [
      "Operated within a 25+ member QA organization — and led the team's day-to-day operating efficiency.",
      "Built and maintained automation across the Protractor and Cypress eras; cross-team collaboration and training.",
      "API and database testing across relational and non-relational stores; HL7 interface context (Mirth, Rhapsody) and Elasticsearch.",
      "Production outage support, defect RCA with error logs, CI/CD integration.",
    ],
    stack: [
      "Cypress",
      "Protractor",
      "Jasmine",
      "Angular/Java stack",
      "Microservices",
      "Elasticsearch",
      "Mirth",
      "Rhapsody",
      "Xray",
      "CI/CD",
    ],
  },
];

/* ── Automation architecture ────────────────────────────────── */

export const automation = {
  heading: "Frameworks built to outlive their authors.",
  sub: "Fifty-plus suites taught me that automation succeeds or fails at the architecture level, not in individual tests. This is the anatomy I build to.",
  principles: [
    {
      lead: "Layered by verification type.",
      text: "UI, API, and database checks live as separate, composable layers — each test asserts through whichever layer is cheapest and most stable, not through the browser by default.",
    },
    {
      lead: "Data validation is first-class.",
      text: "DB and API verification helpers ship inside the framework, because in clinical software the pixels can be right while the numbers are wrong.",
    },
    {
      lead: "Flake is an architecture defect.",
      text: "Deterministic waits, isolated state, idempotent fixtures, and a quarantine lane — a flaky test gets diagnosed at the framework level, not retried into silence.",
    },
    {
      lead: "CI-native from day one.",
      text: "Parallel execution on GitHub Actions and Jenkins, artifact capture on failure, results synced automatically to Zephyr and surfaced in Slack.",
    },
    {
      lead: "Built for the migration that's always coming.",
      text: "I've shipped automation on four framework generations — Protractor, TestCafe, Cypress, Playwright/TypeScript — so abstractions are designed to survive the runner being replaced.",
    },
  ],
  tree: [
    { dir: "config/", note: "env- & jurisdiction-aware settings" },
    { dir: "fixtures/", note: "seeded, anonymized clinical data" },
    { dir: "pages/", note: "Page Object Model (TypeScript)" },
    { dir: "api/", note: "request layer · contract & parity checks" },
    { dir: "db/", note: "SQL / Mongo verification helpers" },
    { dir: "visual/", note: "baseline snapshots · diff review" },
    { dir: "reporters/", note: "Zephyr sync · Slack summaries" },
    { dir: "ci/", note: "GitHub Actions · parallel shards" },
  ],
};

/* ── Experience (role timeline) ─────────────────────────────── */

export const experience = [
  {
    role: "Testing Team Lead",
    company: "Mindfire Solutions",
    period: "Jun 2026 — Present",
    current: true,
    summary:
      "Promoted while embedded on the cardiovascular imaging engagement — now leading its testing function. Full record in the engagement card above.",
    bullets: [
      "Own the QA function's release readiness: capacity planning, test-cycle assignment, and the go/no-go quality assessment for every release.",
      "Represent QA in cross-functional release planning with client engineering leads — scoping, risk calls, and schedule trade-offs.",
      "Review and raise the team's work products — test cases, defect reports, RCA write-ups — to a clinical-software evidence standard.",
      "Mentor QA engineers and design structured assessment frameworks for technical hiring.",
    ],
  },
  {
    role: "Associate Test Lead",
    company: "Mindfire Solutions",
    period: "Mar 2022 — Jun 2026",
    current: false,
    summary:
      "Promoted into the lead role and assigned the chronic care management engagement; after delivering it, moved to the cardiovascular imaging client in Oct 2023 — and earned the Team Lead promotion on that project.",
    bullets: [
      "Mar 2022 — Oct 2023: delivered end-to-end QA for the chronic care management client — web workflows, APIs, and release cycles (TestCafe stack).",
      "Oct 2023 onward: cardiovascular imaging engagement — clinical data reconciliation, ship-blocking pre-release catches, Zephyr → Slack automation; detailed in the engagement record above.",
      "Across both engagements: led production & staging verification cycles in an Agile environment.",
    ],
  },
  {
    role: "Senior Software Test Engineer",
    company: "Mindfire Solutions",
    period: "Jan 2019 — Mar 2022",
    current: false,
    summary:
      "Large-scale automation ownership and CI/CD integration on the post-acute care engagement — the longest client relationship of my tenure.",
    bullets: [
      "Designed, developed, and implemented 50+ test suites with 100+ tests each for web applications (JavaScript stack).",
      "Implemented CI/CD principles and version control using Bamboo, Jenkins, and Bitbucket.",
      "Participated in cross-team prioritization, functional reviews, test plans, technical reviews, and root-cause analysis.",
      "Executed across all STLC phases: smoke, regression, functional, non-functional, security, integration, and end-to-end.",
    ],
  },
  {
    role: "Software Test Engineer → Trainee → Intern",
    company: "Mindfire Solutions",
    period: "Jan 2017 — Jan 2019",
    current: false,
    summary:
      "Foundations: automation scripting, API testing with Postman, database testing, and CI/CD process discipline.",
    bullets: [
      "Ramped from intern to engineer in two years — building the JavaScript automation, API, and SQL/MongoDB skills the rest of the career was built on.",
    ],
  },
];

/* ── Projects / case studies ────────────────────────────────── */

export const projects = [
  {
    title: "Release Validation — Cardiovascular Imaging Platform",
    status: "PASS",
    statusNote: "Largest release in program history",
    domain: "Healthcare · Medical imaging",
    problem:
      "A clinical-grade platform's biggest-ever release: massive regression surface, clinical correctness requirements, and coordinated DEV/QA workflows.",
    approach:
      "Structured, phased RC0 test plan; risk-prioritized coverage; standardized defect intake with DEV-lead approval gates; Zephyr-based cycle auditing.",
    outcome:
      "QA lead with sign-off accountability for the program's most consequential ship.",
    tech: ["Test strategy", "Zephyr Scale", "Risk-based testing", "Jira"],
  },
  {
    title: "Clinical Data Reconciliation",
    status: "PASS",
    statusNote: "Defect vs. convention — correctly distinguished",
    domain: "Data validation",
    problem:
      "Per-territory aggregations in PDF reports didn't match CSV-derived sums for FFR / plaque-volume data.",
    approach:
      "Built comparison workflows across CSV, API, and PDF outputs; traced discrepancies to vessel-grouping conventions in the aggregation logic.",
    outcome:
      "Prevented both a false bug report and a silently shipped data inconsistency. In clinical software, 'the numbers don't match' is the start of analysis, not the end.",
    tech: ["CSV analysis", "SQL", "Bash tooling", "API validation"],
  },
  {
    title: "API Export Endpoint Validation",
    status: "PASS",
    statusNote: "2 ship-blocking defects caught pre-release",
    domain: "API testing",
    problem:
      "A new work-item summary CSV export endpoint needed end-to-end validation before release.",
    approach:
      "Validated schema, content parity against existing export paths, and routing behavior; cross-checked records against UI state and bulk exports.",
    outcome:
      "Caught the endpoint returning HTML instead of CSV (routing misconfiguration) and duplicate work-item records in export output.",
    tech: ["Postman", "Swagger", "REST", "Data contracts"],
  },
  {
    title: "Jurisdiction-Switching State Bug",
    status: "PASS",
    statusNote: "Regulatory-relevant catch",
    domain: "Functional testing",
    problem:
      "Switching jurisdiction on the export-creation screen failed to reset the in-progress export list — a data-isolation risk in a regulated, multi-jurisdiction product.",
    approach:
      "Isolated reproduction steps, documented the state-management failure, and logged with a full evidence chain.",
    outcome:
      "Data-isolation defect caught in QA rather than in production, in a domain where jurisdiction boundaries are a compliance requirement.",
    tech: ["Exploratory testing", "State analysis", "Defect reporting"],
  },
  {
    title: "AI-Augmented QA Tooling",
    status: "PASS",
    statusNote: "Internal tooling in team use",
    domain: "QA engineering · Tooling",
    problem:
      "Manual Zephyr Scale cycle auditing and daily status reporting consumed recurring lead time.",
    approach:
      "Built an internal Claude Code plugin (qa-tools) with a test-cycle auditing skill, plus a Zephyr → Slack daily automation surfacing failed / blocked / unexecuted tests.",
    outcome:
      "Recurring audit and reporting work automated — engineering contribution beyond test execution, adopted by the team.",
    tech: ["Claude Code", "Zephyr Scale", "Slack", "MCP"],
  },
  {
    title: "Production Crash — Root-Cause Support",
    status: "PASS",
    statusNote: "RCA traced to a specific PR",
    domain: "Root-cause analysis",
    problem:
      "A production crash needed tracing to its source in a complex imaging-pipeline dependency chain.",
    approach:
      "Participated in root-cause analysis linking the crash to dependency module trimming that broke a serializer — traced to a specific pull request.",
    outcome:
      "Release-validation checks strengthened around dependency changes.",
    tech: ["RCA", "Release validation", "Cross-team collaboration"],
  },
];

/* ── Dashboard ──────────────────────────────────────────────── */

export const dashboard = {
  heading: "Quality engineering, measured.",
  sub: "Every number on this page is evidence-backed — no estimated percentages, no invented coverage figures. That's the same standard I hold defect reports to.",
  pipeline: [
    { stage: "Code", detail: "Git · Bitbucket" },
    { stage: "CI", detail: "Jenkins · Bamboo" },
    { stage: "Automated suites", detail: "Cypress · Playwright" },
    { stage: "Cycle tracking", detail: "Zephyr Scale" },
    { stage: "Daily reporting", detail: "Slack automation" },
  ],
  achievements: [
    "Best Performer — March 2025, company-wide monthly recognition",
    "Five promotions in nine years: Intern → Testing Team Lead",
    "QA lead for the largest release in the program's history",
    "50+ automation suites (100+ tests each) designed and shipped",
    "Interview panelist and structured-assessment designer for QA hiring",
  ],
  /* TODO: optional verified metrics. Fill ONLY with numbers you can
     defend in an interview (pull from Zephyr execution history /
     CI logs). The card stays hidden while this array is empty.
     Example shape:
     { label: "Regression automation coverage", value: "68%" },
     { label: "Weekly lead time saved by Zephyr automation", value: "4 hrs" },
  */
  verifiedMetrics: [] as { label: string; value: string }[],
};

/* ── Certifications & education ─────────────────────────────── */

export const certifications = [
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    kind: "Certification",
  },
  {
    title: "Best Performer — March 2025",
    issuer: "Mindfire Solutions",
    kind: "Award",
  },
  {
    title: "Master of Computer Applications (MCA)",
    issuer: "College of Engineering and Technology, Bhubaneswar · 2014–2017",
    kind: "Education",
  },
  {
    title: "BSc Computer Science",
    issuer: "Samanta Chandra Sekhara Autonomous College · 2011–2014",
    kind: "Education",
  },
];

/* ── Testimonials ───────────────────────────────────────────── */

/* Empty on purpose — add only real recommendations.
   Example shape:
   {
     quote: "…",
     name: "Full Name",
     role: "Title, Company",
   }
*/
export const testimonials: { quote: string; name: string; role: string }[] =
  [];

/* ── Contact ────────────────────────────────────────────────── */

export const contact = {
  heading: "Let's talk quality.",
  sub: "Open to senior QA leadership, SDET, and quality strategy roles — particularly where software quality has real-world consequences.",
  references:
    "References and detailed recommendations available on request — including development leads and client-side stakeholders I've shipped releases with.",
};
