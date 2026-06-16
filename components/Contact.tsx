"use client";

import { useState } from "react";
import { Check, Copy, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { contact, site } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-wrap px-5 py-24">
      <SectionHeading
        eyebrow="// contact"
        title={contact.heading}
        sub={contact.sub}
      />
      <Reveal>
        <div className="glass p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                Email
              </p>
              <div className="mt-2 flex items-center gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="font-display text-xl font-semibold transition-colors hover:text-accent sm:text-2xl"
                >
                  {site.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="glass flex h-9 w-9 items-center justify-center text-muted transition-colors hover:text-accent"
                >
                  {copied ? (
                    <Check size={15} className="text-pass" />
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              </div>
              <p className="mt-3 flex items-center gap-2 text-sm text-muted">
                <MapPin size={14} /> {site.location}
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                {contact.references}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-bg shadow-glow transition-transform hover:-translate-y-0.5"
              >
                <Mail size={16} /> Email me
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href={site.resumePath}
                download
                className="glass inline-flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Download size={16} /> Resume
              </a>
              {site.github ? (
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass inline-flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <Github size={16} /> GitHub
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
