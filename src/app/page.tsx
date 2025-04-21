import Image from "next/image";

import { showHeroCTA } from "@/lib/flags";
import Link from "next/link";

export default async function Home() {
  const showCTA = await showHeroCTA();

  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden p-6">
      <div className="absolute inset-0">
        <div className="-z-10 absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-white [background-size:16px_16px]" />
      </div>

      <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
        <div className="mb-10 flex items-center justify-center gap-6">
          <Image
            src="/nextjs.svg"
            alt="Next.js Logo"
            width={100}
            height={100}
          />
        </div>

        <h1 className="mb-4 font-extrabold text-gray-900">
          Welcome to Next.js Starter
        </h1>

        <p className="mb-8 text-gray-600 text-lg">
          This starter is powered by{" "}
          <Link className="font-bold underline" href="https://nextjs.org">
            Next.js
          </Link>
          , the most popular React Framework, preconfigured with batteries
          included tools like{" "}
          <Link className="font-bold underline" href="https://tailwindcss.com">
            Tailwind
          </Link>
          ,{" "}
          <Link className="font-bold underline" href="https://ui.shadcn.com">
            shadcn/ui
          </Link>
          ,{" "}
          <Link className="font-bold underline" href="https://biomejs.dev">
            Biome
          </Link>
          , and{" "}
          <Link className="font-bold underline" href="https://vitest.dev">
            Vitest
          </Link>
          .
        </p>

        {showCTA ? (
          <a href="https://github.com/willsather/nextjs-starter">
            <button
              type="button"
              className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 font-medium text-sm text-white ring-offset-background transition-colors hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Learn More
            </button>
          </a>
        ) : null}
      </div>
    </main>
  );
}
