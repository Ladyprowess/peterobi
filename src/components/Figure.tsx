"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * A picture that never leaves a hole in the page. If the file is not there
 * yet, it renders a green panel carrying the initials instead of a broken
 * image icon, so the layout is identical either way.
 */
export function Figure({
  src,
  alt,
  fallback,
  aspect = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
  className = "",
  imageClassName = "object-cover",
  rounded = "rounded-xl",
}: {
  src: string;
  alt: string;
  /** Shown when the image is missing. Keep it very short. */
  fallback: string;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  rounded?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        aria-hidden="true"
        className={`grid ${aspect} w-full place-items-center overflow-hidden bg-green ${rounded} ${className}`}
      >
        <span className="font-display text-5xl font-semibold text-white sm:text-6xl">
          {fallback}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden bg-tint ${rounded} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        onError={() => setFailed(true)}
        className={imageClassName}
      />
    </div>
  );
}
