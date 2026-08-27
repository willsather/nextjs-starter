"use client";

import { useState } from "react";

export function CopyCommand() {
  const [copied, setCopied] = useState(false);

  async function copyCommand() {
    await navigator.clipboard.writeText("pnpm create ws-starter");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={copyCommand}
      className="text-neutral-500 transition-colors hover:text-white"
      aria-label={copied ? "Copied" : "Copy pnpm create ws-starter"}
      title={copied ? "Copied" : "Copy command"}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </button>
  );
}

function CopyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className="size-4"
    >
      <rect x="8" y="8" width="11" height="11" rx="2" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className="size-4"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}
