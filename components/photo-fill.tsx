import Image from "next/image";
import type { Photo } from "@/lib/data";

/**
 * Fills its positioned parent with a photo. `fit: "contain"` photos (logos)
 * sit centred and smaller on their own background colour instead of cropping.
 */
export function PhotoFill({
  photo,
  sizes,
  className = "",
}: {
  photo: Photo;
  sizes: string;
  className?: string;
}) {
  if (photo.fit === "contain") {
    return (
      <div className={`absolute inset-0 ${className}`} style={{ background: photo.bg }}>
        <div className="absolute inset-[18%]">
          <Image src={photo.src} alt="" fill sizes={sizes} className="object-contain" />
        </div>
      </div>
    );
  }
  return (
    <Image
      src={photo.src}
      alt=""
      fill
      sizes={sizes}
      className={`object-cover ${className}`}
      style={photo.position ? { objectPosition: photo.position } : undefined}
    />
  );
}
