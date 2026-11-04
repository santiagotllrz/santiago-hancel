import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Gallery } from "@/components/gallery";
import { Icon } from "@/components/icon";
import { SiteHeader } from "@/components/site-header";
import { StatusBadge } from "@/components/status-badge";
import { detailProjects } from "@/lib/data";

const i = (n: number) => ({ "--i": n }) as React.CSSProperties;
const pad = (n: number) => String(n).padStart(2, "0");

export function generateStaticParams() {
  return detailProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = detailProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.about ?? project.description,
  };
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="rv-rise mb-4 border-b border-foreground pb-2 text-xs font-medium tracking-[0.08em] uppercase">
      {children}
    </h2>
  );
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const index = detailProjects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = detailProjects[index];
  const prev = detailProjects[(index - 1 + detailProjects.length) % detailProjects.length];
  const next = detailProjects[(index + 1) % detailProjects.length];

  return (
    <>
      <div className="py-[var(--margin)]">
        <SiteHeader />
      </div>
      <main
        id="main"
        tabIndex={-1}
        className="flex flex-col gap-24 pt-16 pb-40 text-[15px] font-medium outline-none md:gap-32 md:pt-24 md:text-sm"
      >
        <section className="page-grid gap-y-8">
          <p className="work-in col-span-12 flex justify-between text-xs font-medium tracking-[0.08em] uppercase">
            <span>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>{" "}
              › {project.title}
            </span>
            <span className="tabular-nums">
              {pad(index + 1)} / {pad(detailProjects.length)}
            </span>
          </p>
          <div
            className="work-in col-span-12 flex flex-wrap items-baseline gap-x-4 gap-y-3"
            style={i(1)}
          >
            <h1 className="font-display text-[clamp(3.25rem,8.5vw,9.5rem)] leading-[0.92] font-semibold tracking-[-0.04em]">
              {project.title}
              <span className="ml-3 align-top font-sans text-sm font-medium tracking-normal tabular-nums">
                &apos;{project.year}
              </span>
            </h1>
            <StatusBadge status={project.status} className="self-center" />
          </div>
        </section>

        {project.photos && project.photos.length > 0 && (
          <section aria-label="Galería">
            <Gallery photos={project.photos} />
          </section>
        )}

        <section className="page-grid gap-y-16">
          <aside
            data-reveal=""
            className="col-span-12 md:sticky md:top-24 md:col-span-4 md:self-start"
          >
            <dl className="grid grid-cols-12 md:grid-cols-4">
              <div className="contents" style={i(0)}>
                <dt className="rv-rise col-span-4 border-b border-rule py-1.5 text-muted md:col-span-1">
                  Status
                </dt>
                <dd className="rv-rise col-span-8 flex items-center border-b border-rule py-1.5 md:col-span-3">
                  <StatusBadge status={project.status} />
                </dd>
              </div>
              <div className="contents" style={i(1)}>
                <dt className="rv-rise col-span-4 border-b border-rule py-1.5 text-muted md:col-span-1">
                  Year
                </dt>
                <dd className="rv-rise col-span-8 border-b border-rule py-1.5 tabular-nums md:col-span-3">
                  20{project.year}
                </dd>
              </div>
              <div className="contents" style={i(2)}>
                <dt className="rv-rise col-span-4 border-b border-rule py-1.5 text-muted md:col-span-1">
                  Category
                </dt>
                <dd className="rv-rise col-span-8 border-b border-rule py-1.5 md:col-span-3">
                  {project.category}
                </dd>
              </div>
              {project.links && project.links.length > 0 && (
                <div className="contents" style={i(3)}>
                  <dt className="rv-rise col-span-4 border-b border-rule py-1.5 text-muted md:col-span-1">
                    Links
                  </dt>
                  <dd className="rv-rise col-span-8 flex flex-col gap-1 border-b border-rule py-1.5 md:col-span-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit transition-colors duration-150 hover:bg-accent hover:text-accent-foreground"
                      >
                        {link.label} <Icon name="up-right" />
                      </a>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
          </aside>

          <div className="col-span-12 flex flex-col gap-20 md:col-span-7 md:col-start-6">
            <section data-reveal="">
              <Label>About</Label>
              <p
                className="rv-rise max-w-[42ch] font-display text-2xl leading-[1.2] font-medium tracking-[-0.015em] text-pretty md:text-[1.75rem]"
                style={i(1)}
              >
                {project.about ?? project.description}
              </p>
            </section>

            {project.highlights && project.highlights.length > 0 && (
              <section data-reveal="" className="[--rv-step:45ms]">
                <Label>Highlights</Label>
                <ol className="grid grid-cols-12 gap-x-[var(--gutter)]">
                  {project.highlights.map((h, n) => (
                    <li key={n} className="contents" style={i(n + 1)}>
                      <span className="rv-rise col-span-2 border-b border-rule py-3 tabular-nums text-muted md:col-span-1">
                        {pad(n + 1)}
                      </span>
                      <span className="rv-rise col-span-10 border-b border-rule py-3 text-pretty md:col-span-11">
                        {h}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {project.stack && project.stack.length > 0 && (
              <section data-reveal="" className="[--rv-step:25ms]">
                <Label>Stack</Label>
                <ul className="grid grid-cols-2 gap-x-[var(--gutter)] sm:grid-cols-3">
                  {project.stack.map((s, n) => (
                    <li key={s} className="rv-rise border-b border-rule py-1.5" style={i(n + 1)}>
                      {s}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </section>

        <nav
          aria-label="Más proyectos"
          data-reveal=""
          className="page-grid border-t border-foreground pt-6"
        >
          <Link
            href={`/projects/${prev.slug}`}
            className="rv-rise group col-span-6 flex flex-col gap-2 outline-none"
          >
            <span className="text-xs font-medium tracking-[0.08em] uppercase text-muted">
              <Icon name="left" /> Anterior
            </span>
            <span className="w-fit font-display text-[clamp(1.75rem,3.6vw,3.75rem)] leading-none font-semibold tracking-[-0.03em] transition-colors duration-150 group-hover:bg-accent group-hover:text-accent-foreground group-focus-visible:underline">
              {prev.title}
            </span>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="rv-rise group col-span-6 flex flex-col items-end gap-2 text-right outline-none"
            style={i(1)}
          >
            <span className="text-xs font-medium tracking-[0.08em] uppercase text-muted">
              Siguiente <Icon name="right" />
            </span>
            <span className="w-fit font-display text-[clamp(1.75rem,3.6vw,3.75rem)] leading-none font-semibold tracking-[-0.03em] transition-colors duration-150 group-hover:bg-accent group-hover:text-accent-foreground group-focus-visible:underline">
              {next.title}
            </span>
          </Link>
        </nav>
      </main>
    </>
  );
}
