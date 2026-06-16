"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={(index % 2) * 0.07}>
      <article className="glass flex h-full flex-col p-6 transition-colors hover:border-accent/30">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip border-pass/30 text-pass">
            ✓ {project.status}
          </span>
          <span className="chip border-line/20 text-muted">
            {project.domain}
          </span>
        </div>
        <h3 className="mt-4 font-display text-lg font-semibold leading-snug">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-xs text-accent">
          {project.statusNote}
        </p>

        <div className="mt-4 space-y-3 text-sm leading-relaxed">
          <p className="text-muted">
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ink/70">
              Problem ·{" "}
            </span>
            {project.problem}
          </p>
          <p className="text-ink/90">
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-pass">
              Outcome ·{" "}
            </span>
            {project.outcome}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-4 inline-flex items-center gap-1.5 self-start font-mono text-xs text-accent transition-colors hover:text-ink"
        >
          {open ? "Hide approach" : "Show approach"}
          <ChevronDown
            size={14}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <p className="pt-3 text-sm leading-relaxed text-muted">
                {project.approach}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <ul className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.tech.map((t) => (
            <li key={t} className="chip border-accent/20 bg-bg/40 text-accent">
              {t}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-wrap px-5 py-24">
      <SectionHeading
        eyebrow="// case studies"
        title="Defects caught, data reconciled, releases shipped."
        sub="Six representative cases from a regulated medical-imaging platform — each one a problem, an approach, and a verifiable outcome."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
