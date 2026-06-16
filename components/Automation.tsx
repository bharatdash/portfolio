import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { automation } from "@/lib/data";

export default function Automation() {
  return (
    <section id="automation" className="mx-auto max-w-wrap px-5 py-24">
      <SectionHeading
        eyebrow="// automation architecture"
        title={automation.heading}
        sub={automation.sub}
      />
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <ul className="space-y-5">
            {automation.principles.map((p) => (
              <li
                key={p.lead}
                className="flex gap-3 text-sm leading-relaxed text-muted"
              >
                <span className="mt-0.5 text-pass" aria-hidden="true">
                  ✓
                </span>
                <span>
                  <b className="font-semibold text-ink">{p.lead}</b> {p.text}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass overflow-hidden font-mono text-[0.78rem] shadow-card">
            <div className="flex items-center gap-2 border-b border-line/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-line/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-line/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-line/30" />
              <span className="ml-2 text-xs text-muted">
                e2e-framework/ — anatomy
              </span>
            </div>
            <div className="overflow-x-auto px-5 py-5 leading-loose">
              <p className="text-accent">e2e-framework/</p>
              {automation.tree.map((t, i) => (
                <p key={t.dir} className="whitespace-nowrap">
                  <span className="text-muted">
                    {i === automation.tree.length - 1 ? "└─ " : "├─ "}
                  </span>
                  <span className="text-accent">{t.dir}</span>
                  <span className="text-muted">
                    {" ".repeat(Math.max(1, 12 - t.dir.length))}
                    {t.note}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
