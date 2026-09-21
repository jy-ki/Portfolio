import Image from "next/image";
import type { ImageAsset } from "@/data/media";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { cn } from "@/lib/cn";

/**
 * Renders a real photo or a labeled placeholder from the same ImageAsset
 * shape, so callers don't need to branch on whether the image exists yet.
 *
 * `fill`: render to fill an already-sized ancestor instead of
 * establishing its own aspect ratio.
 */
export function Media({
  asset,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  fill = false,
  tone = "light",
}: {
  asset: ImageAsset;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  tone?: "light" | "dark";
}) {
  if (asset.kind === "placeholder") {
    return (
      <ImagePlaceholder
        asset={asset}
        tone={tone}
        className={cn(fill && "absolute inset-0", className)}
      />
    );
  }

  if (fill) {
    return (
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("absolute inset-0 object-cover", className)}
      />
    );
  }

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={{ aspectRatio: `${asset.width} / ${asset.height}` }}
    >
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
