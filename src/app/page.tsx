import Link from "next/link";
import { Suspense } from "react";

import { showHeroCTA } from "@/lib/flags";

const details = [
  ["framework", "Next.js"],
  ["language", "TypeScript"],
  ["styles", "Tailwind CSS"],
  ["quality", "Biome + Vitest"],
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 sm:px-10 sm:py-16">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-2xl flex-col sm:min-h-[calc(100vh-8rem)]">
        <header className="flex items-center justify-between border-neutral-800 border-b pb-5">
          <Link
            href="/"
            className="font-semibold text-sm text-white tracking-tight"
          >
            nextjs-starter
          </Link>
          <p className="font-mono text-[11px] text-neutral-500 uppercase tracking-[0.16em]">
            ready to build
          </p>
        </header>

        <div className="flex flex-1 flex-col justify-center py-20 sm:py-28">
          <section className="max-w-xl">
            <p className="mb-6 font-mono text-neutral-500 text-xs">
              01 / start here
            </p>
            <h1 className="max-w-lg font-semibold text-4xl text-white leading-[1.08] tracking-[-0.04em] sm:text-5xl">
              A quiet foundation for your next idea.
            </h1>
            <p className="mt-6 max-w-lg text-base text-neutral-400 leading-7 sm:text-lg sm:leading-8">
              A minimal Next.js starter with sensible defaults and just enough
              structure to begin. Replace this page, keep the foundation, and
              make it yours.
            </p>

            <nav className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm">
              <Link
                href="https://nextjs.org/docs"
                className="text-neutral-200 transition-colors hover:text-white"
              >
                read the docs →
              </Link>
              <Suspense fallback={null}>
                <CTA />
              </Suspense>
            </nav>
          </section>

          <section className="mt-20 border-neutral-800 border-t pt-8 sm:mt-24">
            <div className="grid gap-6 sm:grid-cols-[1fr_2fr]">
              <h2 className="font-mono text-neutral-500 text-xs">
                02 / included
              </h2>
              <ul className="space-y-3 font-mono text-sm">
                {details.map(([label, value]) => (
                  <li
                    key={label}
                    className="flex items-baseline justify-between gap-6 border-neutral-900 border-b pb-3"
                  >
                    <span className="text-neutral-500">{label}</span>
                    <span className="text-right text-neutral-300">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <footer className="flex items-center justify-between border-neutral-900 border-t pt-5 font-mono text-[11px] text-neutral-600">
          <span>pnpm dev</span>
          <span>ship something good</span>
        </footer>
      </div>
    </main>
  );
}

async function CTA() {
  const showCTA = await showHeroCTA();

  if (!showCTA) {
    return null;
  }

  return (
    <Link
      href="https://github.com/willsather/nextjs-starter"
      className="text-neutral-500 transition-colors hover:text-white"
    >
      view source ↗
    </Link>
  );
}
