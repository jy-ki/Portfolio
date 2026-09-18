"use client";

import { useState } from "react";
import { Media } from "@/components/Media";
import { aspectOf, type ImageAsset } from "@/data/media";
import { cn } from "@/lib/cn";

/**
 * Shows `primary`; hovering (desktop) or tapping (touch, via onClick)
 * cross-fades to `secondary`. One tap/click toggles it back off, so touch
 * users get the same two images without needing a hover state.
 */
export function HoverSwapImage({
  primary,
  secondary,
  className,
  sizes,
  priority,
}: {
  primary: ImageAsset;
  secondary: ImageAsset;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [showSecondary, setShowSecondary] = useState(false);

  return (
    <button
      type="button"
      className={cn(
        "group relative block w-full overflow-hidden rounded-2xl",
        className
      )}
      style={{ aspectRatio: aspectOf(primary) }}
      onMouseEnter={() => setShowSecondary(true)}
      onMouseLeave={() => setShowSecondary(false)}
      onClick={() => setShowSecondary((value) => !value)}
      aria-label="다른 각도의 이미지 보기"
    >
      <Media
        asset={primary}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(
          "transition-opacity duration-300",
          showSecondary && "opacity-0"
        )}
      />
      <Media
        asset={secondary}
        fill
        sizes={sizes}
        className={cn(
          "transition-opacity duration-300",
          showSecondary ? "opacity-100" : "opacity-0"
        )}
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-ivory/90 text-ink opacity-0 shadow-sm transition-opacity duration-200",
          "group-hover:opacity-100 group-focus-visible:opacity-100"
        )}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 12a9 9 0 1 0 9-9" />
          <path d="M3 4v5h5" />
        </svg>
      </span>
    </button>
  );
}
