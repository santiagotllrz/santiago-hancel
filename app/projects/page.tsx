import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { PhotoFill } from "@/components/photo-fill";
import { ContactSection } from "@/components/sections";
import { SiteHeader } from "@/components/site-header";
import { StatusBadge } from "@/components/status-badge";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Proyectos propios de software, datos e IA construidos por Santiago Tellez.",
};

const i = (n: number) => ({ "--i": n }) as React.CSSProperties;

export default function ProjectsIndex() {
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
            Projects › Side Projects
          </p>
          <h1
            className="work-in col-span-12 font-display text-[clamp(3.25rem,8.5vw,9.5rem)] leading-[0.92] font-semibold tracking-[-0.04em]"
            style={i(1)}
          >
            Projects
          </h1>
          <p
            className="work-in col-span-12 max-w-[36ch] font-display text-xl leading-[1.2] font-medium tracking-[-0.015em] text-pretty md:col-span-6 md:col-start-7 md:text-2xl"
            style={i(2)}
          >
            Productos, herramientas y medios propios que he construido desde cero, siempre en modo
            fundador.
          </p>
        </section>

        <section aria-label="Proyectos" className="page-grid">
          <ul className="col-span-12 border-t border-foreground">
            {projects.map((project, n) => {
              const rowClass =
                "row-link group relative grid grid-cols-12 items-center gap-x-[var(--gutter)] gap-y-3 py-5 outline-none md:py-6";
              const content = (
                <>
                  <span className="col-span-2 self-start pt-[0.6em] tabular-nums md:col-span-1">
                    &apos;{project.year}
                  </span>
                  <span className="col-span-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-[clamp(2rem,5vw,4.5rem)] leading-none font-semibold tracking-[-0.03em] md:col-span-6">
                    <span>{project.title}</span>
                    <StatusBadge status={project.status} />
                    <span aria-hidden="true" className="poster-arrow text-[0.6em]">
                      <Icon name="up-right" className="size-[1em]" />
                    </span>
                  </span>
                  <span className="col-span-10 col-start-3 flex flex-col gap-1 md:col-span-2 md:col-start-auto">
                    <span>{project.category}</span>
                    <span className="text-muted">{project.name}</span>
                  </span>
                  <span className="relative hidden aspect-[3/2] overflow-hidden border border-rule bg-foreground/5 md:col-span-3 md:block">
                    {project.cover && (
                      <PhotoFill
                        photo={project.cover}
                        sizes="25vw"
                        className="grayscale transition-[filter,scale] duration-500 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                      />
                    )}
                  </span>
                  <span aria-hidden="true" className="poster-rule" />
                </>
              );

              return (
                <li key={project.name} className="work-in" style={i(n + 3)}>
                  {project.slug ? (
                    <Link href={`/projects/${project.slug}`} className={rowClass}>
                      {content}
                    </Link>
                  ) : (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={rowClass}
                    >
                      {content}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        <ContactSection />
      </main>
    </>
  );
}
