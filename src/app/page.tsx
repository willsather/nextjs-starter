import Link from "next/link";

import { ListItem } from "./_components/list-item";
import { Logo } from "./_components/logo";
import { SectionHeading } from "./_components/section-heading";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 py-16 md:py-24">
      {/* Header */}
      <header className="flex items-center gap-5">
        <Logo />
        <div>
          <h1 className="font-sans text-4xl font-extrabold tracking-tight text-foreground">
            will sather
          </h1>
          <p className="mt-1 font-mono text-sm text-muted-foreground">
            * sleeping
          </p>
        </div>
      </header>

      {/* Bio */}
      <p className="mt-10 font-mono text-base leading-relaxed text-muted">
        software engineer. football watcher. star wars enjoyer.
        <br />
        divorced dad rock playlist curator. water drinker.
      </p>

      {/* Work Section */}
      <section className="mt-12" aria-labelledby="work-heading">
        <SectionHeading
          title="work"
          badge={{
            label: "@willsather",
            href: "https://linkedin.com/in/willsather",
            icon: "linkedin",
          }}
        />
        <ul className="mt-4 flex flex-col gap-2">
          <ListItem>field eng @ vercel</ListItem>
          <ListItem>software eng @ vmware</ListItem>
          <ListItem>intern @ dell</ListItem>
          <ListItem>intern @ ivanti</ListItem>
        </ul>
      </section>

      {/* Writing Section */}
      <section className="mt-14" aria-labelledby="writing-heading">
        <SectionHeading
          title="writing"
          badge={{
            label: "@willsather",
            href: "https://x.com/willsather",
            icon: "x",
          }}
        />
        <ul className="mt-4 flex flex-col gap-2">
          <ListItem href="/blog/shiki-code-blocks">
            Shiki Code Blocks with Turbopack
          </ListItem>
          <ListItem
            href="https://vercel.com/blog/ai-powered-prototyping-with-design-systems"
            external
          >
            AI-Powered Prototyping with Design Systems
          </ListItem>
          <ListItem href="/blog/50-under-25">50 under 25</ListItem>
        </ul>
        <Link
          href="/blog"
          className="mt-4 inline-block font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {"archive \u2192"}
        </Link>
      </section>

      {/* Code Section */}
      <section className="mt-14" aria-labelledby="code-heading">
        <SectionHeading
          title="code"
          badge={{
            label: "@willsather",
            href: "https://github.com/willsather",
            icon: "github",
          }}
        />
        <ul className="mt-4 flex flex-col gap-2">
          <ListItem href="https://github.com/willsather/create-ws-starter" external>
            pnpm create ws-starter
          </ListItem>
          <ListItem href="https://github.com/willsather/registry-starter" external>
            registry starter
          </ListItem>
          <ListItem href="https://github.com/willsather/agent-starter" external>
            agent starter
          </ListItem>
        </ul>
      </section>
    </main>
  );
}
