import { Award, BadgeCheck, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { certifications } from "@/lib/data";

const icons: Record<string, typeof Award> = {
  Certification: BadgeCheck,
  Award: Award,
  Education: GraduationCap,
};

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-wrap px-5 py-24">
      <SectionHeading
        eyebrow="// credentials"
        title="Certifications, recognition, education."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {certifications.map((c, i) => {
          const Icon = icons[c.kind] ?? BadgeCheck;
          return (
            <Reveal key={c.title} delay={(i % 2) * 0.07}>
              <article className="glass flex h-full items-start gap-4 p-6 transition-colors hover:border-accent/30">
                <span className="glass flex h-11 w-11 shrink-0 items-center justify-center text-accent">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted">
                    {c.kind}
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{c.issuer}</p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
