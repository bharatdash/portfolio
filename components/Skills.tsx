import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups, tierLegend, type SkillTier } from "@/lib/data";

const tierStyles: Record<SkillTier, string> = {
  EXPERT: "border-pass/30 text-pass",
  PROFICIENT: "border-accent/30 text-accent",
  EMERGING: "border-warn/30 text-warn",
  MIGRATION: "border-line/30 text-muted",
};

const tierShort: Record<SkillTier, string> = {
  EXPERT: "EXP",
  PROFICIENT: "PRO",
  EMERGING: "NEW",
  MIGRATION: "MIG",
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-wrap px-5 py-24">
      <SectionHeading
        eyebrow="// skills"
        title="Tiered by evidence, not by buzzword."
        sub="Every skill is labeled with how I actually use it. No padded lists — that's the same honesty standard I hold a test report to."
      />

      <Reveal className="mb-8">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted">
          {(Object.keys(tierLegend) as SkillTier[]).map((tier) => (
            <li key={tier} className="flex items-center gap-2">
              <span className={`chip ${tierStyles[tier]}`}>{tierShort[tier]}</span>
              {tierLegend[tier]}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.07}>
            <article className="glass h-full p-6 transition-colors hover:border-accent/30">
              <h3 className="font-display text-lg font-semibold">
                {group.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {group.blurb}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <li
                    key={s.name}
                    className="chip border-line/20 bg-bg/40 text-ink/90"
                  >
                    {s.name}
                    <span className={`${tierStyles[s.tier].split(" ")[1]} font-semibold`}>
                      {tierShort[s.tier]}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
