import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <div className="py-[var(--margin)]">
        <SiteHeader />
      </div>
      <main id="main" className="page-grid flex-1 content-center gap-y-8 py-32">
        <h1 className="work-in col-span-12 font-display text-[clamp(3.25rem,8.5vw,9.5rem)] leading-[0.92] font-semibold tracking-[-0.04em]">
          404
        </h1>
        <Link
          href="/"
          className="work-in col-span-12 w-fit text-xs font-medium tracking-[0.08em] uppercase hover:bg-accent hover:text-accent-foreground"
        >
          Volver al inicio <span aria-hidden="true">→</span>
        </Link>
      </main>
    </>
  );
}
