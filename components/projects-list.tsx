"use client";

import { useState } from "react";
import type { Project } from "@/lib/data";

const cell =
  "min-w-0 border-rule border-b py-1.5 [overflow-wrap:anywhere] md:truncate md:py-1 md:[overflow-wrap:normal] rv-rise";

/**
 * Desktop: one ledger row per project (link, description, category).
 * Mobile: the description and category don't fit, so tapping a row expands
 * it to show them, with a separate link to visit the site.
 */
export function ProjectsList({ projects }: { projects: Project[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="col-span-12 grid grid-cols-subgrid md:col-span-10 md:col-start-2">
      {projects.map((p, n) => {
        const isOpen = open === p.name;
        const panelId = `project-${n}`;
        return (
          <div key={p.name} className="contents" style={{ "--i": n } as React.CSSProperties}>
            <span className={`${cell} col-span-2 tabular-nums`}>&apos;{p.year}</span>

            {/* Mobile: expandable row */}
            <div className={`${cell} col-span-10 md:hidden`}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : p.name)}
                className="flex w-full items-baseline justify-between gap-3 text-left"
              >
                <span>{p.name}</span>
                <span aria-hidden="true" className="text-muted tabular-nums">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                id={panelId}
                className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden" inert={!isOpen}>
                  <div className="flex flex-col gap-2 pt-2 pb-1">
                    <p className="text-pretty">{p.description}</p>
                    <p className="text-muted">{p.category}</p>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit text-xs font-medium tracking-[0.08em] uppercase transition-colors duration-150 hover:bg-accent hover:text-accent-foreground"
                    >
                      Visitar <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: plain ledger row */}
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cell} hidden transition-colors duration-150 hover:bg-accent hover:text-accent-foreground md:col-span-3 md:block`}
            >
              {p.name}
            </a>
            <span className={`${cell} hidden md:col-span-4 md:block`}>{p.description}</span>
            <span className={`${cell} hidden text-muted md:col-span-1 md:block`}>{p.category}</span>
          </div>
        );
      })}
    </div>
  );
}
