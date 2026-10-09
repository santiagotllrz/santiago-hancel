"use client";

import { Fragment, useEffect, useRef, type ElementType, type ReactNode } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%&*+=?";
const FRAMES = 6;
const FRAME_MS = 45;

type Word = { prefix: string; core?: string; alt?: string; tail: string };

/** "con [IA|🤖]," → { prefix: "con ", core: "IA", alt: "🤖", tail: "," } */
function parseWord(raw: string): Word {
  const m = raw.match(/^(.*?)\[([^|\]]+)\|([^\]]+)\](.*)$/u);
  if (!m) return { prefix: raw, tail: "" };
  return { prefix: m[1], core: m[2], alt: m[3], tail: m[4] };
}

export function plainText(text: string) {
  return text.replace(/\[([^|\]]+)\|[^\]]+\]/gu, "$1");
}

function Chars({ text, core }: { text: string; core?: boolean }) {
  return (
    <>
      {Array.from(text).map((c, i) => (
        <span key={i} data-char={c} data-core={core ? "" : undefined}>
          {c}
        </span>
      ))}
    </>
  );
}

function useScramble<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;

    const running = new WeakMap<HTMLElement, number>();
    const altTimers = new WeakMap<HTMLElement, number>();

    const scramble = (el: HTMLElement) => {
      if (running.has(el)) return;
      const original = el.dataset.char ?? "";
      if (!original.trim()) return;
      let frame = 0;
      el.setAttribute("data-hit", "");
      const id = window.setInterval(() => {
        frame++;
        if (frame >= FRAMES) {
          window.clearInterval(id);
          running.delete(el);
          el.textContent = original;
          el.removeAttribute("data-hit");
          return;
        }
        el.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }, FRAME_MS);
      running.set(el, id);
    };

    const onOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      const word = target.closest<HTMLElement>("[data-w]");
      if (word && word.querySelector("[data-alt]") && !word.hasAttribute("data-alt-on")) {
        word.setAttribute("data-alt-on", "");
        window.clearTimeout(altTimers.get(word));
        altTimers.set(
          word,
          window.setTimeout(() => word.removeAttribute("data-alt-on"), 1600),
        );
        return;
      }
      if (reduced) return;
      const char = target.closest<HTMLElement>("[data-char]");
      if (!char) return;
      const all = Array.from(root.querySelectorAll<HTMLElement>("[data-char]"));
      const idx = all.indexOf(char);
      for (let i = idx - 1; i <= idx + 1; i++) if (all[i]) scramble(all[i]);
    };

    root.addEventListener("pointerover", onOver);
    return () => root.removeEventListener("pointerover", onOver);
  }, []);

  return ref;
}

/** Paragraph whose letters scramble under the cursor; [palabra|emoji] swaps on hover. */
export function ScrambleText({
  text,
  as: Tag = "p",
  className,
  ...rest
}: { text: string; as?: ElementType; className?: string } & Record<string, unknown>) {
  const ref = useScramble<HTMLElement>();
  const words = text.split(/\s+/);
  return (
    <Tag ref={ref} className={className} data-scramble="" data-revert="snap" {...rest}>
      <span className="sr-only select-none">{plainText(text)}</span>
      <span aria-hidden="true">
        {words.map((raw, i) => {
          const w = parseWord(raw);
          return (
            <Fragment key={i}>
              {i > 0 && " "}
              <span data-w="" className="whitespace-nowrap">
                <Chars text={w.prefix} />
                {w.core && <Chars text={w.core} core />}
                {w.alt && <span data-alt="">{w.alt}</span>}
                <Chars text={w.tail} />
              </span>
            </Fragment>
          );
        })}
      </span>
    </Tag>
  );
}

/**
 * A single display word. An invisible copy reserves the width so scrambled
 * glyphs never shift the layout; `align` anchors the visible copy.
 */
export function ScrambleWord({
  text,
  align = "left",
  className = "",
}: {
  text: string;
  align?: "left" | "right";
  className?: string;
}): ReactNode {
  const ref = useScramble<HTMLSpanElement>();
  return (
    <span
      ref={ref}
      className={`relative inline-block whitespace-nowrap ${className}`}
      data-scramble=""
      data-revert="snap"
    >
      <span className="sr-only select-none">{text}</span>
      <span aria-hidden="true" className="invisible select-none">
        {text}
      </span>
      <span
        aria-hidden="true"
        className={`absolute inset-y-0 whitespace-nowrap ${align === "right" ? "right-0" : "left-0"}`}
      >
        <span data-w="" className="whitespace-nowrap">
          <Chars text={text} />
        </span>
      </span>
    </span>
  );
}
