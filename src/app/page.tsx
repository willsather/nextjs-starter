export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="my-8 font-bold">Next.js Starter</h1>

      <ul className="my-8 list-disc">
        <li>Nextjs App Router</li>
        <li>Typescript</li>
        <li>Tailwind</li>
        <li>Eslint</li>
        <li>Prettier</li>
      </ul>

      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200  lg:p-4 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30">
        Edit&nbsp;
        <code className="font-mono font-bold">src/app/page.tsx</code>
      </p>
    </main>
  );
}
