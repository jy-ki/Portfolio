import { cn } from "@/lib/cn";

/**
 * The one structural motif every screen repeats — a little app-window
 * bar (traffic lights + a label). Used on the real nav and as a
 * decorative strip atop every section, so the whole site reads as one
 * consistent product rather than a stack of unrelated screens.
 */
export function WindowChrome({
  label,
  tone = "light",
  className,
}: {
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "chrome-bar inline-flex w-fit items-center gap-3 rounded-full px-4 py-2 text-xs font-semibold tracking-wide",
        tone === "dark" ? "chrome-bar--dark text-[#f3efe6]/70" : "text-ink/60",
        className
      )}
    >
      <span className="flex gap-1.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#f4756b]" />
        <span className="h-2.5 w-2.5 rounded-full bg-butter" />
        <span className="h-2.5 w-2.5 rounded-full bg-mint" />
      </span>
      <span>{label}</span>
    </div>
  );
}
