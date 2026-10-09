"use client";

import { useRef, type ReactNode } from "react";

type Edge = "top" | "bottom" | "left" | "right";

const HIDDEN: Record<Edge, string> = {
  top: "inset(0 0 100% 0)",
  bottom: "inset(100% 0 0 0)",
  left: "inset(0 100% 0 0)",
  right: "inset(0 0 0 100%)",
};

const ICONS: Record<string, ReactNode> = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  Email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" />
      <path d="m2 5 10 8 10-8" />
    </svg>
  ),
};

const COLORS: Record<string, { bg: string; fg: string }> = {
  LinkedIn: { bg: "#0a66c2", fg: "#fff" },
  GitHub: { bg: "#24292f", fg: "#fff" },
  Email: { bg: "var(--accent)", fg: "var(--foreground)" },
};

function nearestEdge(e: React.PointerEvent, el: HTMLElement): Edge {
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width;
  const y = (e.clientY - r.top) / r.height;
  const d: [Edge, number][] = [
    ["top", y],
    ["bottom", 1 - y],
    ["left", x],
    ["right", 1 - x],
  ];
  return d.sort((a, b) => a[1] - b[1])[0][0];
}

function Face({ label }: { label: string }) {
  return (
    <span className="absolute inset-0 grid place-items-center [&_svg]:size-[clamp(1.25rem,3.5vw,2.5rem)]">
      {ICONS[label]}
      <span className="absolute bottom-2 left-2.5 text-xs leading-none">{label}</span>
    </span>
  );
}

function Tile({ label, href }: { label: string; href: string }) {
  const fill = useRef<HTMLSpanElement>(null);
  const colors = COLORS[label] ?? COLORS.Email;
  const external = href.startsWith("http");

  const enter = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = fill.current;
    if (!el) return;
    el.style.transition = "none";
    el.style.clipPath = HIDDEN[nearestEdge(e, e.currentTarget)];
    void el.getBoundingClientRect();
    el.style.transition = "";
    el.style.clipPath = "inset(0)";
  };
  const leave = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = fill.current;
    if (el) el.style.clipPath = HIDDEN[nearestEdge(e, e.currentTarget)];
  };

  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onPointerEnter={enter}
        onPointerLeave={leave}
        className="group relative block aspect-square bg-white text-foreground outline-none"
        style={{ "--bg": colors.bg, "--fg": colors.fg } as React.CSSProperties}
      >
        <Face label={label} />
        <span
          ref={fill}
          aria-hidden="true"
          className="absolute inset-0 bg-[var(--bg)] text-[var(--fg)] transition-[clip-path] duration-[400ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-focus-visible:[clip-path:inset(0)]! group-focus-visible:transition-none motion-reduce:transition-none"
          style={{ clipPath: HIDDEN.bottom }}
        >
          <Face label={label} />
        </span>
      </a>
    </li>
  );
}

export function ContactGrid({ links }: { links: readonly { label: string; href: string }[] }) {
  return (
    <ul className="grid grid-cols-3 gap-px border border-rule bg-rule">
      {links.map((l) => (
        <Tile key={l.label} {...l} />
      ))}
    </ul>
  );
}
