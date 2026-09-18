import { cn } from "@/lib/cn";

const PALETTE = ["bg-mint", "bg-sky", "bg-pink", "bg-butter"] as const;

/**
 * A sticky-note-style pill, cycling through the site's small pastel set.
 * Used for role/tool/result labels wherever the old single-accent chip
 * used to be — one consistent tag system instead of several.
 */
export function Tag({
  children,
  index = 0,
  tone = "pastel",
  className,
}: {
  children: React.ReactNode;
  index?: number;
  tone?: "pastel" | "ink" | "blue";
  className?: string;
}) {
  if (tone === "ink") {
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-full bg-ink px-3 py-1 text-xs font-semibold text-ivory",
          className
        )}
      >
        {children}
      </span>
    );
  }

  if (tone === "blue") {
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-full bg-blue px-3 py-1 text-xs font-semibold text-ivory",
          className
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-ink",
        PALETTE[index % PALETTE.length],
        className
      )}
    >
      {children}
    </span>
  );
}
