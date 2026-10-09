import Link from "next/link";
import { nav } from "@/lib/data";
import { Logo } from "./logo";

export function SiteHeader() {
  return (
    <header className="page-grid items-center overflow-x-clip text-[13px] font-medium md:text-sm">
      <Link className="col-span-2 flex items-center" href="/">
        <Logo className="h-8 w-auto" />
      </Link>
      <nav
        aria-label="Sitio"
        className="col-span-10 flex min-w-0 justify-end gap-3.5 overflow-x-clip text-[13px] md:col-span-6 md:col-start-7 md:justify-between md:text-sm"
      >
        {nav.map((item) => (
          <Link key={item.href} className="-my-2 py-2 hover:underline" href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
