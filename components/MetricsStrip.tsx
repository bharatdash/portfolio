import Counter from "./Counter";
import Reveal from "./Reveal";
import { metrics } from "@/lib/data";

export default function MetricsStrip() {
  return (
    <section aria-label="Career metrics" className="mx-auto max-w-wrap px-5">
      <Reveal>
        <div className="glass grid grid-cols-2 divide-line/10 lg:grid-cols-4 lg:divide-x">
          {metrics.map((m) => (
            <div key={m.label} className="px-6 py-7">
              <p className="font-display text-3xl font-semibold text-accent sm:text-4xl">
                <Counter value={m.value} suffix={m.suffix} />
              </p>
              <p className="mt-1.5 text-sm text-muted">{m.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
