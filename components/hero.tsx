"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroImages, site } from "@/lib/data";
import { ScrambleText, ScrambleWord } from "./scramble";
import { SiteHeader } from "./site-header";
import { Icon } from "./icon";

/** The rotating photo window that sits inside the name. */
function Slot({ frame, className }: { frame: number; className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`relative overflow-hidden ${className}`}
    >
      <span data-slot-inner="true" className="absolute inset-0 bg-foreground/5">
        {heroImages.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt=""
            fill
            fetchPriority={i === 0 ? "high" : "auto"}
            sizes="(min-width: 1024px) 15vw, 25vw"
            className={`object-cover grayscale ${i === frame ? "" : "invisible"}`}
          />
        ))}
      </span>
    </span>
  );
}

export function Hero() {
  const [state, setState] = useState<"intro" | "done">("intro");
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const t = window.setTimeout(() => setState("done"), 1800);
    return () => window.clearTimeout(t);
  }, []);

  // Each image stays for its own duration (the portrait lingers longer).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(
      () => setFrame((f) => (f + 1) % heroImages.length),
      heroImages[frame].ms,
    );
    return () => window.clearTimeout(t);
  }, [frame]);

  return (
    <section
      data-state={state}
      className="hero relative flex min-h-svh flex-col overflow-x-clip py-[var(--margin)]"
    >
      <SiteHeader />

      <div className="page-x flex flex-1 items-center justify-center">
        {/* Desktop: Santiago [foto] Tellez — Mobile: Santiago / Tellez [foto] */}
        <h1 className="font-display text-[clamp(3rem,20vw,15rem)] leading-[0.85] font-semibold tracking-[-0.045em] whitespace-nowrap md:text-[clamp(3rem,10.5vw,13rem)]">
          <span data-mask="true" className="inline-block">
            <span data-word="true" className="inline-block" style={{ "--at": "100ms" } as React.CSSProperties}>
              <ScrambleWord text={site.firstName} align="right" />
            </span>
          </span>
          <Slot frame={frame} className="ml-[0.06em] hidden h-[0.7em] w-[1.07em] md:inline-block" />
          <br className="md:hidden" />
          <span data-mask="true" className="inline-block md:ml-[0.06em]">
            <span data-word="true" className="inline-block" style={{ "--at": "160ms" } as React.CSSProperties}>
              <ScrambleWord text={site.lastName} align="left" />
            </span>
          </span>
          <Slot frame={frame} className="top-[0.42em] ml-[0.2em] inline-block h-[0.9em] w-[1.34em] md:hidden" />
        </h1>
      </div>

      <footer className="page-grid items-end">
        <ScrambleText
          text={site.intro}
          data-enter="intro"
          className="col-span-11 max-w-[50ch] font-display text-xl leading-[1.2] font-medium tracking-[-0.015em] text-pretty md:col-span-9 md:text-[1.6rem]"
        />
        <span
          aria-hidden="true"
          data-enter="arrow"
          className="col-start-12 text-right text-sm font-medium text-muted"
        >
          <Icon name="down" />
        </span>
      </footer>
    </section>
  );
}
