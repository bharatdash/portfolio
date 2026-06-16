import { Award } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { dashboard } from "@/lib/data";

export default function Dashboard() {
  return (
    <section id="dashboard" className="mx-auto max-w-wrap px-5 py-24">
      <SectionHeading
        eyebrow="// qa dashboard"
        title={dashboard.heading}
        sub={dashboard.sub}
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {/* CI/CD pipeline */}
        <Reveal>
          <div className="glass h-full p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Continuous testing pipeline
            </h3>
            <ol className="mt-5 space-y-3">
              {dashboard.pipeline.map((step, i) => (
                <li key={step.stage} className="flex items-center gap-3">
                  <span className="chip w-8 justify-center border-accent/25 text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-1 items-baseline justify-between gap-3 border-b border-line/10 pb-3">
                    <span className="text-sm font-medium">{step.stage}</span>
                    <span className="font-mono text-xs text-muted">
                      {step.detail}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* Achievements */}
        <Reveal delay={0.08}>
          <div className="glass h-full p-6">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              <Award size={14} /> Quality engineering achievements
            </h3>
            <ul className="mt-5 space-y-3">
              {dashboard.achievements.map((a) => (
                <li
                  key={a}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-0.5 text-pass" aria-hidden="true">
                    ✓
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* Owner-verified metrics — renders only when populated in lib/data.ts */}
      {dashboard.verifiedMetrics.length > 0 && (
        <Reveal delay={0.12} className="mt-5">
          <div className="glass p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Verified metrics
            </h3>
            <dl className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {dashboard.verifiedMetrics.map((m) => (
                <div
                  key={m.label}
                  className="flex justify-between gap-4 border-b border-line/10 pb-3 text-sm"
                >
                  <dt className="text-muted">{m.label}</dt>
                  <dd className="font-mono text-accent">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      )}
    </section>
  );
}
