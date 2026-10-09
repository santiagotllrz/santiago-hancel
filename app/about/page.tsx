import type { Metadata } from "next";
import { Gallery } from "@/components/gallery";
import { Lines } from "@/components/lines";
import { ContactSection } from "@/components/sections";
import { SiteHeader } from "@/components/site-header";
import { about } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: about.preview,
};

const i = (n: number) => ({ "--i": n }) as React.CSSProperties;

export default function AboutPage() {
  const [first, ...rest] = about.paragraphs;

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
          <p className="work-in col-span-12 text-xs font-medium tracking-[0.08em] uppercase">
            About › Santiago
          </p>
          <h1
            className="work-in col-span-12 font-display text-[clamp(3.25rem,8.5vw,9.5rem)] leading-[0.92] font-semibold tracking-[-0.04em]"
            style={i(1)}
          >
            About
          </h1>
        </section>

        <section data-reveal="" className="page-grid gap-y-12">
          <div className="col-span-12 md:col-span-9 md:col-start-2">
            <Lines
              paragraphs={[first]}
              className="max-w-[34ch] font-display text-3xl leading-[1.15] font-medium tracking-tight text-pretty md:text-[2.75rem]"
            />
          </div>
          <div className="col-span-12 flex max-w-[60ch] flex-col gap-5 text-base leading-[1.6] font-normal md:col-span-6 md:col-start-6 md:text-lg">
            {rest.map((p, n) => (
              <p key={n} className="rv-rise text-pretty" style={i(n + 6)}>
                {p}
              </p>
            ))}
          </div>
        </section>

        <section aria-label="Fotos" className="flex flex-col gap-4">
          <p className="page-x text-xs font-medium tracking-[0.08em] uppercase text-muted">
            Fuera del trabajo
          </p>
          <Gallery photos={about.photos} layout="grid" />
        </section>

        <ContactSection />
      </main>
    </>
  );
}
