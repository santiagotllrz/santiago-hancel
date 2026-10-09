import Image from "next/image";

export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Santiago Tellez — inicio"
      width={264}
      height={196}
      className={className}
      preload
    />
  );
}
