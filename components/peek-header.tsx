"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SiteHeader } from "./site-header";

/** A copy of the header that slides in when scrolling back up. */
export function PeekHeader() {
  const pathname = usePathname();
  const [near, setNear] = useState(true);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const threshold = () => (pathname === "/" ? window.innerHeight * 0.9 : 120);

    const onScroll = () => {
      const y = window.scrollY;
      const isNear = y < threshold();
      setNear(isNear);
      if (isNear) setShown(false);
      else if (y < last - 4) setShown(true);
      else if (y > last + 4) setShown(false);
      last = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <div
      className="peek-header fixed inset-x-0 top-0 z-40 bg-background py-[var(--margin)] print:hidden"
      data-near={near ? "true" : undefined}
      data-shown={shown ? "" : undefined}
      inert={!shown}
    >
      <SiteHeader />
    </div>
  );
}
