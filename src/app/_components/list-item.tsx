import Link from "next/link";

type ListItemProps = {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
};

export function ListItem({ children, href, external }: ListItemProps) {
  const content = (
    <span className="flex items-start gap-2 font-mono text-base text-muted">
      <span className="text-muted-foreground" aria-hidden="true">
        *
      </span>
      <span className="transition-colors hover:text-foreground">{children}</span>
    </span>
  );

  if (href) {
    return (
      <li>
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="group inline-flex items-center gap-1"
        >
          {content}
          {external && (
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted-foreground"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          )}
        </Link>
      </li>
    );
  }

  return <li>{content}</li>;
}
