"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Photo } from "@/lib/data";

const GRID_SPAN: Record<NonNullable<Photo["shape"]>, string> = {
  landscape: "col-span-2",
  portrait: "row-span-2",
  big: "col-span-2 row-span-2",
};

/**
 * Horizontally scrolling photos with a full-screen lightbox.
 * `grid` packs photos into two rows (about page); `strip` is a single row (work pages).
 */
export function Gallery({ photos, layout = "grid" }: { photos: Photo[]; layout?: "grid" | "strip" }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<Photo | null>(null);

  const show = (p: Photo) => {
    setOpen(p);
    dialog.current?.showModal();
  };

  return (
    <>
      <div className="snap-x snap-mandatory scroll-px-[var(--margin)] overflow-x-auto overscroll-x-contain [scrollbar-width:none]">
        {layout === "grid" ? (
          <ul className="grid w-max grid-flow-col-dense auto-cols-[var(--cell)] grid-rows-[repeat(2,var(--cell))] gap-[var(--gutter)] px-[var(--margin)] [--cell:clamp(7rem,14vw,14rem)]">
            {photos.map((p, i) => (
              <li key={p.src + i} className={`snap-start ${GRID_SPAN[p.shape ?? "landscape"]}`}>
                <Thumb photo={p} index={i} onOpen={show} sizes="(min-width: 768px) 30vw, 60vw" />
              </li>
            ))}
          </ul>
        ) : (
          <ul className="flex w-max gap-[var(--gutter)] px-[var(--margin)] [--strip-h:clamp(16rem,32vw,32rem)]">
            {photos.map((p, i) => (
              <li
                key={p.src + i}
                className={`h-[var(--strip-h)] shrink-0 snap-start ${
                  p.shape === "portrait" ? "aspect-[4/5]" : "aspect-[3/2]"
                }`}
              >
                <Thumb photo={p} index={i} onOpen={show} sizes="(min-width: 768px) 50vw, 90vw" />
              </li>
            ))}
          </ul>
        )}
      </div>

      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onClick={() => dialog.current?.close()}
        className="fixed inset-0 m-0 hidden h-dvh max-h-none w-dvw max-w-none cursor-zoom-out items-center justify-center bg-background p-[var(--margin)] opacity-0 transition-[opacity,display,overlay] transition-discrete duration-300 backdrop:bg-transparent open:flex open:opacity-100 starting:open:opacity-0"
      >
        {open && (
          <figure className="relative flex h-full w-full flex-col gap-3">
            <div className="relative min-h-0 flex-1">
              <Image src={open.src} alt={open.alt} fill sizes="100vw" className="object-contain" />
            </div>
            <figcaption className="flex justify-between text-xs font-medium tracking-[0.08em] uppercase">
              <span>{open.alt}</span>
              <span className="text-muted">Cerrar ✕</span>
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}

function Thumb({
  photo,
  index,
  onOpen,
  sizes,
}: {
  photo: Photo;
  index: number;
  onOpen: (p: Photo) => void;
  sizes: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(photo)}
      aria-label={`Ampliar: ${photo.alt}`}
      className="work-reveal group relative block h-full w-full cursor-zoom-in overflow-hidden bg-foreground/5"
      style={{ "--i": index } as React.CSSProperties}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
    </button>
  );
}
