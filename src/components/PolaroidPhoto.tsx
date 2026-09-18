import { Media } from "@/components/Media";
import type { ImageAsset } from "@/data/media";
import { cn } from "@/lib/cn";

/**
 * White-bordered, slightly rotated photo frame — the scrapbook treatment
 * every real photo on the site gets, so images read as one consistent
 * family instead of plain crops.
 */
export function PolaroidPhoto({
  asset,
  rotate = -2,
  sizes,
  priority,
  tone = "light",
  className,
}: {
  asset: ImageAsset;
  rotate?: number;
  sizes?: string;
  priority?: boolean;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-sm bg-ivory p-3 pb-8 shadow-xl",
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <Media
        asset={asset}
        sizes={sizes}
        priority={priority}
        tone={tone}
        className="rounded-[2px]"
      />
    </div>
  );
}
