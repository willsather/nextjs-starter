import Link from "next/link";
import { Suspense } from "react";

import { showHeroCTA } from "@/lib/flags";

import { CopyCommand } from "./copy-command";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-black px-6 py-20 text-neutral-100">
      <span className="absolute top-6 left-6 font-mono text-neutral-500 text-xs">
        nextjs-starter
      </span>

      <div className="w-full max-w-2xl text-center">
        <h1 className="font-bold text-4xl text-white tracking-tight sm:text-5xl">
          Start building.
        </h1>
        <p className="mx-auto mt-5 max-w-md font-mono text-neutral-500 text-sm leading-relaxed">
          a starter for next.js app router, as i’m tired of configuring all of
          this.
        </p>

        <code className="mt-10 inline-flex items-center gap-3 rounded-full border border-neutral-800 bg-neutral-950 py-3.5 pr-4 pl-5 font-mono text-neutral-300 text-sm">
          pnpm create ws-starter
          <CopyCommand />
        </code>

        <footer className="mt-8 flex items-center justify-center gap-5 font-mono text-neutral-600 text-xs">
          <Link
            href="https://nextjs.org/docs"
            className="transition-colors hover:text-white"
          >
            docs →
          </Link>
          <Suspense fallback={null}>
            <CTA />
          </Suspense>
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
      className="transition-colors hover:text-white"
    >
      github →
    </Link>
  );
}
