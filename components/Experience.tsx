import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  completedEngagements,
  currentEngagement,
  experience,
} from "@/lib/data";

function CurrentEngagement() {
  return (
    <Reveal className="mt-12">
      <article className="glass border-accent/30 p-7 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip border-pass/30 text-pass">
            {currentEngagement.statusChip}
          </span>
          <span className="chip border-accent/30 text-accent">
            {currentEngagement.periodChip}
          </span>
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold leading-snug">
          {currentEngagement.title}
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/85">
          {currentEngagement.narrative}
        </p>
        <ul className="mt-5 max-w-3xl space-y-3">
          {currentEngagement.bullets.map((b) => (
            <li
              key={b.lead}
              className="flex gap-3 text-sm leading-relaxed text-muted"
            >
              <span className="mt-0.5 text-pass" aria-hidden="true">
                ✓
              </span>
              <span>
                <b className="font-semibold text-ink">{b.lead}</b> {b.text}
              </span>
            </li>
          ))}
        </ul>
        <ul className="mt-6 flex flex-wrap gap-2">
          {currentEngagement.stack.map((s) => (
            <li key={s} className="chip border-accent/20 bg-bg/40 text-accent">
              {s}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

function CompletedEngagements() {
  return (
    <div className="mt-5 grid gap-5 md:grid-cols-2">
      {completedEngagements.map((e, i) => (
        <Reveal key={e.client} delay={i * 0.07}>
          <article className="glass flex h-full flex-col p-6 transition-colors hover:border-accent/30">
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip border-line/25 text-muted">
                ✓ COMPLETED
              </span>
              <span className="chip border-line/25 text-muted">
                {e.periodChip}
              </span>
            </div>
            <h3 className="mt-4 font-display text-base font-semibold leading-snug">
              {e.client}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {e.domain}
            </p>
            <ul className="mt-4 space-y-2.5">
              {e.bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-0.5 text-pass" aria-hidden="true">
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <ul className="mt-auto flex flex-wrap gap-2 pt-5">
              {e.stack.map((s) => (
                <li
                  key={s}
                  className="chip border-accent/20 bg-bg/40 text-accent"
                >
                  {s}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-wrap px-5 py-24">
      <SectionHeading
        eyebrow="// experience"
        title="One organization. Three healthcare products. Five promotions."
        sub="Nine years at Mindfire Solutions across the US care continuum — chronic care management, post-acute care transitions, and now cardiovascular diagnostics. A ladder climbed through delivery, not job-hopping."
      />

      <CurrentEngagement />
      <CompletedEngagements />

      <ol className="relative ml-3 mt-16 border-l border-line/15">
        {experience.map((job, i) => (
          <li key={job.role} className="relative pb-12 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                job.current
                  ? "border-pass bg-pass/30 shadow-glow"
                  : "border-line/40 bg-bg"
              }`}
            />
            <Reveal delay={i * 0.05}>
              <p className="font-mono text-xs tracking-wide text-accent">
                {job.period}
                {job.current && (
                  <span className="chip ml-3 border-pass/30 text-pass">
                    CURRENT
                  </span>
                )}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold">
                {job.role}
              </h3>
              <p className="text-sm text-muted">{job.company}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/85">
                {job.summary}
              </p>
              <ul className="mt-4 max-w-2xl space-y-2.5">
                {job.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-0.5 text-pass" aria-hidden="true">
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
