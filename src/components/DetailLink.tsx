import Link from "next/link";
import { cn } from "@/lib/cn";

export function DetailLink({
  slug,
  tone = "light",
}: {
  slug: string;
  tone?: "light" | "dark";
}) {
  return (
    <Link
      href={`/work/${slug}`}
      className={cn(
        "group inline-flex w-fit items-center gap-2 text-sm font-semibold underline decoration-2 underline-offset-4 transition-colors",
        tone === "dark"
          ? "text-ivory decoration-lilac/60 hover:text-lilac"
          : "text-ink decoration-coral/50 hover:text-coral"
      )}
    >
      상세 보기
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
    </Link>
  );
}
