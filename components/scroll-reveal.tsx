"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Adds `data-in` to [data-reveal] and .poster-rise blocks as they enter the viewport. */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-in", "");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    document
      .querySelectorAll("[data-reveal]:not([data-in]), .poster-rise:not([data-in])")
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
