import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Gallery } from "@/components/gallery";
import { SiteHeader } from "@/components/site-header";
import { jobs } from "@/lib/data";

const i = (n: number) => ({ "--i": n }) as React.CSSProperties;
const pad = (n: number) => String(n).padStart(2, "0");

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return {};
  return { title: job.company, description: `${job.role} en ${job.company}. ${job.about}` };
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="rv-rise mb-4 border-b border-foreground pb-2 text-xs font-medium tracking-[0.08em] uppercase">
      {children}
    </h2>
  );
}

export default async function WorkPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const index = jobs.findIndex((j) => j.slug === slug);
  if (index === -1) notFound();
  const job = jobs[index];
  const prev = jobs[(index - 1 + jobs.length) % jobs.length];
  const next = jobs[(index + 1) % jobs.length];

  const meta = [
    ["Role", job.role],
    ["Period", job.period],
    ["Team", job.team],
    ["Location", job.location],
  ];

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
              <Link href="/work" className="hover:underline">
                Work
              </Link>{" "}
              › {job.company}
            </span>
            <span className="tabular-nums">
              {pad(index + 1)} / {pad(jobs.length)}
            </span>
          </p>
          <h1
            className="work-in col-span-12 font-display text-[clamp(3.25rem,8.5vw,9.5rem)] leading-[0.92] font-semibold tracking-[-0.04em]"
            style={i(1)}
          >
            {job.company}
            <span className="ml-3 align-top font-sans text-sm font-medium tracking-normal tabular-nums">
              &apos;{job.short}
            </span>
          </h1>
        </section>

        <section aria-label="Galería">
          <Gallery photos={job.photos} layout="strip" />
        </section>

        <section className="page-grid gap-y-16">
          <aside data-reveal="" className="col-span-12 md:sticky md:top-24 md:col-span-4 md:self-start">
            <dl className="grid grid-cols-12 md:grid-cols-4">
              {meta.map(([k, v], n) => (
                <div key={k} className="contents" style={i(n)}>
                  <dt className="rv-rise col-span-4 border-b border-rule py-1.5 text-muted md:col-span-1">
                    {k}
                  </dt>
                  <dd className="rv-rise col-span-8 border-b border-rule py-1.5 md:col-span-3">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="col-span-12 flex flex-col gap-20 md:col-span-7 md:col-start-6">
            <section data-reveal="">
              <Label>About</Label>
              <p
                className="rv-rise max-w-[40ch] font-display text-2xl leading-[1.2] font-medium tracking-[-0.015em] text-pretty md:text-[1.75rem]"
                style={i(1)}
              >
                {job.about}
              </p>
            </section>

            <section data-reveal="" className="[--rv-step:45ms]">
              <Label>Highlights</Label>
              <ol className="grid grid-cols-12 gap-x-[var(--gutter)]">
                {job.highlights.map((h, n) => (
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

            <section data-reveal="" className="[--rv-step:25ms]">
              <Label>Stack</Label>
              <ul className="grid grid-cols-2 gap-x-[var(--gutter)] sm:grid-cols-3">
                {job.stack.map((s, n) => (
                  <li key={s} className="rv-rise border-b border-rule py-1.5" style={i(n + 1)}>
                    {s}
                  </li>
                ))}
              </ul>
            </section>

            {job.projects.length > 0 && (
              <section data-reveal="" className="[--rv-step:80ms]">
                <Label>Proyectos destacados</Label>
                <ul className="grid gap-x-[var(--gutter)] gap-y-10 sm:grid-cols-2">
                  {job.projects.map((p, n) => (
                    <li key={p.name} className="rv-rise flex flex-col gap-3" style={i(n + 1)}>
                      <div className="relative aspect-[3/2] overflow-hidden bg-foreground/5">
                        <Image src={p.photo.src} alt={p.photo.alt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-display text-xl font-semibold tracking-[-0.02em]">
                          {p.href ? (
                            <a href={p.href} target="_blank" rel="noopener noreferrer" className="hover:bg-accent">
                              {p.name} <span aria-hidden="true">↗</span>
                            </a>
                          ) : (
                            p.name
                          )}
                        </h3>
                        <p className="max-w-[40ch] text-muted">{p.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </section>

        <nav aria-label="Más trabajos" data-reveal="" className="page-grid border-t border-foreground pt-6">
          <Link
            href={`/work/${prev.slug}`}
            className="rv-rise group col-span-6 flex flex-col gap-2 outline-none"
          >
            <span className="text-xs font-medium tracking-[0.08em] uppercase text-muted">← Anterior</span>
            <span className="font-display text-[clamp(1.75rem,3.6vw,3.75rem)] leading-none font-semibold tracking-[-0.03em] transition-colors duration-150 group-hover:bg-accent group-focus-visible:underline w-fit">
              {prev.company}
            </span>
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="rv-rise group col-span-6 flex flex-col items-end gap-2 text-right outline-none"
            style={i(1)}
          >
            <span className="text-xs font-medium tracking-[0.08em] uppercase text-muted">Siguiente →</span>
            <span className="font-display text-[clamp(1.75rem,3.6vw,3.75rem)] leading-none font-semibold tracking-[-0.03em] transition-colors duration-150 group-hover:bg-accent group-focus-visible:underline w-fit">
              {next.company}
            </span>
          </Link>
        </nav>
      </main>
    </>
  );
}
