"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { hero, site } from "@/lib/data";

/* The signature element: Bharat's intro as a live spec run. */
function SpecRunner() {
  const reduced = useReducedMotion();
  const lines = hero.specLines;
  const [lineIdx, setLineIdx] = useState(reduced ? lines.length : 0);
  const [charIdx, setCharIdx] = useState(0);
  const finished = lineIdx >= lines.length;

  useEffect(() => {
    if (reduced || finished) return;
    const current = lines[lineIdx];
    if (charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 22);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIdx((l) => l + 1);
      setCharIdx(0);
    }, 320);
    return () => clearTimeout(t);
  }, [charIdx, lineIdx, lines, reduced, finished]);

  return (
    <div className="glass overflow-hidden font-mono text-[0.82rem] leading-relaxed shadow-card">
      <div className="flex items-center gap-2 border-b border-line/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-line/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-line/30" />
        <span className="ml-2 text-xs text-muted">{hero.specTitle}</span>
      </div>
      {/* Static content for assistive tech; the typing animation below is decorative */}
      <ul className="sr-only">
        {lines.map((l) => (
          <li key={l}>✓ {l}</li>
        ))}
        <li>{hero.specSummary}</li>
      </ul>
      <div className="px-5 py-5" aria-hidden="true">
        <p className="text-muted">{hero.specDescribe}</p>
        <ul className="mt-1 space-y-1">
          {lines.map((line, i) => {
            const isDone = i < lineIdx;
            const isTyping = i === lineIdx && !finished;
            if (!isDone && !isTyping) {
              return <li key={line} className="invisible pl-5">{line}</li>;
            }
            return (
              <li key={line} className="flex items-start gap-2 pl-2">
                <span
                  className={isDone ? "text-pass" : "text-transparent"}
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span className={isDone ? "text-ink" : "text-ink/90"}>
                  {isDone ? line : line.slice(0, charIdx)}
                  {isTyping && (
                    <span className="ml-0.5 inline-block h-[1em] w-[0.55em] translate-y-[2px] animate-blink bg-accent" />
                  )}
                </span>
              </li>
            );
          })}
        </ul>
        <p className="mt-2 text-muted">{"})"}</p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: finished ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="mt-4 text-pass"
        >
          {hero.specSummary}
        </motion.p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-wrap items-center gap-12 px-5 pb-20 pt-28 lg:grid-cols-[1.1fr_1fr] lg:pt-40">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 font-mono text-xs tracking-[0.3em] text-accent"
        >
          {hero.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[3.4rem]"
        >
          {site.name.split(" ").slice(0, 2).join(" ")}{" "}
          <span className="text-accent">{site.name.split(" ").slice(2).join(" ")}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-4 font-display text-xl text-ink/90 sm:text-2xl"
        >
          {hero.headline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
        >
          <p className="mt-5 max-w-xl leading-relaxed text-muted sm:hidden">
            {hero.subShort}
          </p>
          <p className="mt-5 hidden max-w-xl leading-relaxed text-muted sm:block">
            {hero.sub}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href={hero.ctaPrimary.href}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-bg shadow-glow transition-transform hover:-translate-y-0.5"
          >
            {hero.ctaPrimary.label}
            <ArrowRight size={16} />
          </a>
          <a
            href={hero.ctaSecondary.href}
            download
            className="glass inline-flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Download size={16} />
            {hero.ctaSecondary.label}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="glass flex h-11 w-11 items-center justify-center text-muted transition-colors hover:text-accent"
          >
            <Linkedin size={18} />
          </a>
          {site.github ? (
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="glass flex h-11 w-11 items-center justify-center text-muted transition-colors hover:text-accent"
            >
              <Github size={18} />
            </a>
          ) : null}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <SpecRunner />
      </motion.div>
    </section>
  );
}
