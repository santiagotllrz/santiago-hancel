"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Splits paragraphs into the lines the browser actually renders, so each line
 * can rise out of its own mask when the parent [data-reveal] enters view.
 */
export function Lines({
  paragraphs,
  className = "",
  step = 60,
}: {
  paragraphs: string[];
  className?: string;
  step?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[][][] | null>(null);
  const [settled, setSettled] = useState(false);

  // Measure: while `lines` is null every word renders as its own span.
  useLayoutEffect(() => {
    if (lines !== null) return;
    const root = ref.current;
    if (!root) return;
    const result = Array.from(root.querySelectorAll("p")).map((p) => {
      const out: string[][] = [];
      let top: number | null = null;
      p.querySelectorAll<HTMLElement>("[data-m]").forEach((w) => {
        if (top === null || Math.abs(w.offsetTop - top) > 2) {
          out.push([]);
          top = w.offsetTop;
        }
        out[out.length - 1].push(w.textContent ?? "");
      });
      return out;
    });
    setLines(result);
  }, [lines]);

  // Re-measure when the width changes or web fonts finish loading.
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    let width = root.clientWidth;
    const ro = new ResizeObserver(() => {
      if (Math.abs(root.clientWidth - width) < 1) return;
      width = root.clientWidth;
      setLines(null);
    });
    ro.observe(root);
    document.fonts?.ready.then(() => setLines(null));
    return () => ro.disconnect();
  }, []);

  // Once the reveal has played, freeze it so later re-splits don't animate.
  useEffect(() => {
    const host = ref.current?.closest("[data-reveal]");
    if (!host) return;
    let timer: number | undefined;
    const arm = () => {
      if (!host.hasAttribute("data-in")) return false;
      const count = paragraphs.reduce((n, p) => n + Math.ceil(p.length / 30), 0);
      timer = window.setTimeout(() => setSettled(true), count * step + 1000);
      return true;
    };
    if (arm()) return () => window.clearTimeout(timer);
    const mo = new MutationObserver(() => {
      if (arm()) mo.disconnect();
    });
    mo.observe(host, { attributes: true, attributeFilter: ["data-in"] });
    return () => {
      mo.disconnect();
      window.clearTimeout(timer);
    };
  }, [paragraphs, step]);

  let i = 0;
  return (
    <div
      ref={ref}
      className={`rv-lines ${className}`}
      data-split={lines ? "" : undefined}
      data-settled={settled ? "" : undefined}
    >
      {paragraphs.map((text, pi) => (
        <p key={pi} className={pi > 0 ? "mt-[0.9em]" : undefined}>
          {lines?.[pi]
            ? lines[pi].map((words, li) => (
                <span
                  key={li}
                  className="rv-mask block"
                  style={{ "--i": i++ } as React.CSSProperties}
                >
                  <span className="rv-word block">{words.join(" ")} </span>
                </span>
              ))
            : text.split(" ").map((w, wi) => (
                <span key={wi}>
                  <span data-m="">{w}</span>{" "}
                </span>
              ))}
        </p>
      ))}
    </div>
  );
}
