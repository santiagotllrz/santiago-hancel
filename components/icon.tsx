/**
 * Line icons drawn as SVG. Unicode arrows like ↗ render as colour emoji on
 * iOS, so every arrow on the site goes through here instead.
 */

const PATHS = {
  "up-right": "M7 17 17 7M8 7h9v9",
  right: "M4 12h16m-6-6 6 6-6 6",
  left: "M20 12H4m6-6-6 6 6 6",
  down: "M12 4v16m-6-6 6 6 6-6",
  close: "M6 6l12 12M18 6 6 18",
} as const;

export type IconName = keyof typeof PATHS;

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      aria-hidden="true"
      className={`inline-block size-[0.85em] shrink-0 align-[-0.08em] ${className}`}
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
