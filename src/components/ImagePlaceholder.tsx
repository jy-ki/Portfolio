import { ratioLabel, type ImageAsset } from "@/data/media";
import { cn } from "@/lib/cn";

/**
 * Stand-in for a missing project photo, shown when an ImageAsset is a
 * placeholder rather than a photo. Names the image that belongs here and
 * the aspect ratio it should be shot/exported at, so nothing here reads as
 * a real result.
 */
export function ImagePlaceholder({
  asset,
  className,
  tone = "light",
}: {
  asset: Extract<ImageAsset, { kind: "placeholder" }>;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "group flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed px-6 py-10 text-center",
        tone === "dark"
          ? "border-ivory/25 bg-ivory/[0.04]"
          : "border-ink/25 bg-ink/[0.03]",
        className
      )}
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className={cn("h-7 w-7", tone === "dark" ? "text-ivory/30" : "text-ink/30")}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="M21 16l-5.5-5.5a1.5 1.5 0 0 0-2.12 0L4 19" />
      </svg>
      <p className={cn("text-sm font-medium", tone === "dark" ? "text-ivory/70" : "text-ink/70")}>
        이미지 준비 중 — {asset.label}
      </p>
      <p className={cn("text-xs", tone === "dark" ? "text-ivory/45" : "text-ink/45")}>
        권장 비율 {ratioLabel[asset.ratio]}
      </p>
      {asset.note && (
        <p className={cn("max-w-xs text-xs", tone === "dark" ? "text-ivory/40" : "text-ink/40")}>
          {asset.note}
        </p>
      )}
    </div>
  );
}
