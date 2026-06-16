import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line/10">
      <div className="mx-auto flex max-w-wrap flex-col items-start justify-between gap-3 px-5 py-8 font-mono text-xs text-muted sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>
          <span className="text-pass">✓</span> 0 known defects at time of
          deployment · built with Next.js
        </p>
      </div>
    </footer>
  );
}
