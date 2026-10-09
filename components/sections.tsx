import Link from "next/link";
import { about, contact, projects } from "@/lib/data";
import { ContactGrid } from "./contact-grid";
import { Lines } from "./lines";
import { ScrambleWord } from "./scramble";

export const cell =
  "min-w-0 border-rule border-b py-1.5 [overflow-wrap:anywhere] md:truncate md:py-1 md:[overflow-wrap:normal] rv-rise";

const i = (n: number) => ({ "--i": n }) as React.CSSProperties;

export function LedgerHeading() {
  return (
    <h2
      aria-label="Side projects"
      data-reveal=""
      className="page-grid font-display text-[clamp(2.75rem,7.5vw,8rem)] leading-[0.92] font-semibold tracking-[-0.04em] [--rv-step:110ms] [--rv-word-ms:600ms]"
    >
      <span className="rv-mask col-span-9 col-start-4 mix-blend-darken">
        <span className="rv-word block">
          <ScrambleWord text="Side" />
        </span>
      </span>
      <span className="rv-mask col-span-2 col-start-2 row-start-2 mix-blend-darken" aria-hidden="true" style={i(1)}>
        <span className="rv-word block">
          <ScrambleWord text="+" />
        </span>
      </span>
      <span className="rv-mask col-span-9 col-start-4 row-start-2 mix-blend-darken" style={i(1)}>
        <span className="rv-word block">
          <ScrambleWord text="Proj-" />
        </span>
      </span>
      <span className="rv-mask col-span-7 col-start-6 row-start-3 mix-blend-darken" style={i(2)}>
        <span className="rv-word block">
          <ScrambleWord text="ects" />
        </span>
      </span>
    </h2>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="flex scroll-mt-8 flex-col gap-24">
      <LedgerHeading />
      <div data-reveal="" className="page-grid [--rv-step:45ms]">
        <div className="col-span-12 grid grid-cols-subgrid md:col-span-10 md:col-start-2">
          {projects.map((p, n) => (
            <div key={p.name} className="contents" style={i(n)}>
              <span className={`${cell} col-span-2 tabular-nums`}>&apos;{p.year}</span>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cell} col-span-10 transition-colors duration-150 hover:bg-accent md:col-span-3`}
              >
                {p.name}
              </a>
              <span className={`${cell} hidden md:col-span-4 md:block`}>{p.description}</span>
              <span className={`${cell} hidden text-muted md:col-span-1 md:block`}>{p.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section id="about" data-reveal="" className="page-grid scroll-mt-8 gap-y-8">
      <h2 className="rv-rise col-span-12 font-display text-4xl font-semibold tracking-tight md:col-span-3 md:col-start-2">
        About
      </h2>
      <div className="col-span-12 flex flex-col gap-16 md:col-span-7">
        <Lines
          paragraphs={[about.preview]}
          className="max-w-[32ch] font-display text-3xl leading-[1.15] font-medium tracking-tight text-pretty md:text-4xl"
        />
        <Link
          href="/about"
          style={i(6)}
          className="rv-rise w-fit text-xs font-medium tracking-[0.08em] uppercase transition-colors duration-150 hover:bg-accent"
        >
          Leer más <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" data-reveal="" className="page-grid scroll-mt-8 gap-y-8">
      <h2 className="rv-rise col-span-12 font-display text-4xl font-semibold tracking-tight md:col-span-3 md:col-start-2">
        Contact
      </h2>
      <div className="rv-rise col-span-12 md:col-span-7" style={i(1)}>
        <ContactGrid links={contact} />
      </div>
    </section>
  );
}
