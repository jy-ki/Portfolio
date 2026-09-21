import { cn } from "@/lib/cn";

/**
 * A live iframe of an external site, framed like a small browser window.
 * Whether the preview actually renders depends entirely on the target
 * site's own framing policy (X-Frame-Options / CSP frame-ancestors) — a
 * blocked frame fails silently with no JS-detectable error, so the "새
 * 탭에서 보기" link and the caption below are always shown, not just as
 * a fallback for a detected failure.
 */
export function SitePreviewEmbed({
  href,
  label,
  tone = "light",
  className,
}: {
  href: string;
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  let hostname = href;
  try {
    hostname = new URL(href).hostname;
  } catch {
    // keep raw href as the displayed hostname if parsing fails
  }

  return (
    <div className={cn("no-print flex flex-col gap-3", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-2xl border",
          dark ? "border-gold/30" : "border-ink/10"
        )}
      >
        <div
          className={cn(
            "flex items-center gap-3 border-b px-4 py-2.5",
            dark ? "border-gold/20 bg-white/[0.04]" : "border-ink/10 bg-ink/[0.03]"
          )}
        >
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#f4756b]" />
            <span className="h-2.5 w-2.5 rounded-full bg-butter" />
            <span className="h-2.5 w-2.5 rounded-full bg-mint" />
          </span>
          <span
            className={cn(
              "truncate text-xs font-medium",
              dark ? "text-ivory/50" : "text-ink/50"
            )}
          >
            {hostname}
          </span>
        </div>
        <div className="relative aspect-[16/10] w-full bg-white">
          <iframe
            src={href}
            title={`${label} 라이브 미리보기`}
            loading="lazy"
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="link"
          className={cn(
            "group inline-flex w-fit items-center gap-2 text-sm font-semibold underline decoration-2 underline-offset-4 transition-colors",
            dark
              ? "text-[#f3efe6] decoration-gold/60 hover:text-gold"
              : "text-ink decoration-orange/50 hover:text-orange"
          )}
        >
          새 탭에서 {label} 전체 화면으로 보기
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
        <p className={cn("text-xs", dark ? "text-ivory/35" : "text-ink/40")}>
          브라우저 환경에 따라 미리보기가 표시되지 않을 수 있어요.
        </p>
      </div>
    </div>
  );
}
