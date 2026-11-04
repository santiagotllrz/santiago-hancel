import type { ProjectStatus } from "@/lib/data";

export function StatusBadge({
  status,
  className = "",
}: {
  status: ProjectStatus;
  className?: string;
}) {
  if (status === "rip") {
    return (
      <span
        className={`inline-flex shrink-0 items-center gap-1 border border-rule bg-foreground/[0.04] px-1.5 py-0.5 font-sans text-[10px] leading-none font-medium tracking-[0.08em] uppercase text-muted ${className}`}
      >
        <span aria-hidden="true">†</span>
        RIP
      </span>
    );
  }

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 border border-foreground/20 px-1.5 py-0.5 font-sans text-[10px] leading-none font-medium tracking-[0.08em] uppercase text-foreground ${className}`}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
      Activo
    </span>
  );
}
