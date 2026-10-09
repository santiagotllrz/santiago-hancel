import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "@/components/sections";
import { SiteHeader } from "@/components/site-header";
import { jobs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description: "Experiencia de Santiago Tellez en startups, producto e IA.",
};

const i = (n: number) => ({ "--i": n }) as React.CSSProperties;

export default function WorkIndex() {
  return (
    <>
      <div className="py-[var(--margin)]">
        <SiteHeader />
      </div>
      <main
        id="main"
        tabIndex={-1}
        className="flex flex-col gap-32 pt-16 pb-40 text-[15px] font-medium outline-none md:pt-24 md:text-sm"
      >
        <section className="page-grid gap-y-8">
          <p className="work-in col-span-12 text-xs font-medium tracking-[0.08em] uppercase">
            Work › Experiencia
          </p>
          <h1
            className="work-in col-span-12 font-display text-[clamp(3.25rem,8.5vw,9.5rem)] leading-[0.92] font-semibold tracking-[-0.04em]"
            style={i(1)}
          >
            Work
          </h1>
          <p
            className="work-in col-span-12 max-w-[36ch] font-display text-xl leading-[1.2] font-medium tracking-[-0.015em] text-pretty md:col-span-6 md:col-start-7 md:text-2xl"
            style={i(2)}
          >
            La mayor parte de mi experiencia ha sido en startups, trabajando cerca de producto y de
            los equipos fundadores.
          </p>
        </section>

        <section aria-label="Trabajos" className="page-grid">
          <ul className="col-span-12 border-t border-foreground">
            {jobs.map((job, n) => (
              <li key={job.slug} className="work-in" style={i(n + 3)}>
                <Link
                  href={`/work/${job.slug}`}
                  className="row-link group relative grid grid-cols-12 items-center gap-x-[var(--gutter)] gap-y-3 py-5 outline-none md:py-6"
                >
                  <span className="col-span-2 self-start pt-[0.6em] tabular-nums md:col-span-1">
                    &apos;{job.short}
                  </span>
                  <span className="col-span-10 flex items-baseline gap-2 font-display text-[clamp(2rem,5vw,4.5rem)] leading-none font-semibold tracking-[-0.03em] md:col-span-6">
                    {job.company}
                    <span aria-hidden="true" className="poster-arrow text-[0.6em]">
                      ↗
                    </span>
                  </span>
                  <span className="col-span-10 col-start-3 flex flex-col gap-1 md:col-span-2 md:col-start-auto">
                    <span>{job.role}</span>
                    <span className="text-muted">{job.period}</span>
                  </span>
                  <span className="relative hidden aspect-[3/2] overflow-hidden bg-foreground/5 md:col-span-3 md:block">
                    <Image
                      src={job.photos[0].src}
                      alt=""
                      fill
                      sizes="25vw"
                      className="object-cover grayscale transition-[filter,scale] duration-500 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                    />
                  </span>
                  <span aria-hidden="true" className="poster-rule" />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <ContactSection />
      </main>
    </>
  );
}
