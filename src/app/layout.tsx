import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./tailwind.css";

export const metadata: Metadata = {
  title: "Next.js Starter",
  description: "Basic Next.js Template with Biome, Vitest, and Tailwind",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
