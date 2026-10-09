"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Job } from "@/lib/data";

const pad = (n: number) => String(n).padStart(2, "0");

export function WorkPoster({ jobs }: { jobs: Job[] }) {
  const [active, setActive] = useState(0);
  const job = jobs[active];

  return (
    <section
      aria-labelledby="work-heading"
      className="poster-rise relative flex min-h-[85svh] flex-col gap-8 overflow-hidden bg-foreground p-[var(--margin)] text-background"
    >
      <div aria-hidden="true" className="rv-parallax absolute inset-x-0 -inset-y-[8%]">
        {jobs.map((j, i) => (
          <div
            key={j.slug}
            className={`absolute inset-0 transition-opacity duration-500 ease-out motion-reduce:duration-200 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={j.photos[0].src} alt="" fill sizes="100vw" className="object-cover" />
          </div>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/60"
      />

      <header className="relative flex justify-between text-xs font-medium tracking-[0.08em] uppercase">
        <h2 id="work-heading">Work › Experiencia</h2>
        <p className="tabular-nums" aria-live="polite">
          {pad(active + 1)} / {pad(jobs.length)}
        </p>
      </header>

      <ul className="relative flex flex-col items-start">
        {jobs.map((j, i) => (
          <li
            key={j.slug}
            className="overflow-hidden pt-[0.1em] pb-[0.3em] md:-mb-[0.3em]"
            style={{ "--i": i } as React.CSSProperties}
          >
            <Link
              href={`/work/${j.slug}`}
              data-active={i === active}
              onPointerEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`poster-link relative inline-flex items-baseline gap-2 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-none font-semibold tracking-[-0.03em] transition-colors duration-200 outline-none focus-visible:underline ${
                i === active ? "text-background" : "text-background/70"
              }`}
            >
              {j.company}
              <span className="font-sans text-xs font-medium tracking-normal tabular-nums">
                &apos;{j.short}
              </span>
              <span aria-hidden="true" className="poster-arrow text-[0.6em]">
                ↗
              </span>
              <span aria-hidden="true" className="poster-rule" />
            </Link>
          </li>
        ))}
      </ul>

      <p
        className="poster-caption relative mt-auto text-xs font-medium text-background/70"
        style={{ "--i": jobs.length } as React.CSSProperties}
      >
        {job.role} · {job.period}
      </p>
    </section>
  );
}
