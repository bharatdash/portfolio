import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-wrap px-5 py-24">
      <SectionHeading eyebrow="// about" title={about.heading} />
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5 leading-relaxed text-muted">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15}>
          <dl className="glass divide-y divide-line/10">
            {about.highlights.map((h) => (
              <div key={h.label} className="px-6 py-4">
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-accent">
                  {h.label}
                </dt>
                <dd className="mt-1 text-sm text-ink">{h.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
