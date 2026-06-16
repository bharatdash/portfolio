import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <Reveal className="mb-12">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
        {eyebrow}
      </p>
      <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
        {title}
      </h2>
      {sub ? <p className="mt-4 max-w-2xl text-muted">{sub}</p> : null}
    </Reveal>
  );
}
