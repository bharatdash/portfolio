import { Linkedin, Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site, testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="recommendations" className="mx-auto max-w-wrap px-5 py-24">
      <SectionHeading
        eyebrow="// recommendations"
        title="What colleagues say."
      />
      {testimonials.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.07}>
              <figure className="glass h-full p-6">
                <Quote size={18} className="text-accent" aria-hidden="true" />
                <blockquote className="mt-3 text-sm leading-relaxed text-ink/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-line/10 pt-4">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal>
          <div className="glass flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-relaxed text-muted">
              References and detailed recommendations are available on
              request — including from development leads and client-side
              stakeholders I've shipped releases with.
            </p>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex shrink-0 items-center gap-2 px-5 py-3 text-sm font-medium transition-colors hover:border-accent/40 hover:text-accent"
            >
              <Linkedin size={16} />
              Connect on LinkedIn
            </a>
          </div>
        </Reveal>
      )}
    </section>
  );
}
