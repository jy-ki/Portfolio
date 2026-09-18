import { cn } from "@/lib/cn";
import type { ImageSlot } from "@/data/projects";

const aspectClass: Record<NonNullable<ImageSlot["aspect"]>, string> = {
  wide: "aspect-[16/10]",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

/**
 * Stand-in for a missing project photo. The source portfolio's image files
 * weren't included with the upload, so every image slot on this site is a
 * labeled placeholder rather than a stock or fabricated photo.
 */
export function ImagePlaceholder({
  slot,
  className,
}: {
  slot: ImageSlot;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-dashed border-ink/25 bg-ink/[0.03] px-6 py-10 text-center",
        aspectClass[slot.aspect ?? "wide"],
        className
      )}
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-8 w-8 text-ink/30 transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="M21 16l-5.5-5.5a1.5 1.5 0 0 0-2.12 0L4 19" />
      </svg>
      <p className="text-sm font-medium text-ink/70">이미지 준비 중 — {slot.label}</p>
      {slot.note && <p className="max-w-xs text-xs text-ink/45">{slot.note}</p>}
    </div>
  );
}
