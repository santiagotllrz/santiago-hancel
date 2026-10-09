export function Logo({ className = "size-9" }: { className?: string }) {
  return (
    <svg
      width="256"
      height="256"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Santiago Tellez — inicio"
      className={className}
    >
      <path
        d="M194 74C176 44 108 30 82 58C58 84 76 112 112 124C150 136 196 146 196 184C196 222 134 236 92 214C70 202 56 184 52 170"
        stroke="currentColor"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
