import { resultTagLabel, type ResultTag } from "@/data/projects";
import { cn } from "@/lib/cn";

const tagStyle: Record<"light" | "dark", Record<ResultTag, string>> = {
  light: {
    measured: "bg-coral/12 text-coral",
    estimated: "bg-lilac/25 text-ink/70",
    target: "bg-ink/8 text-ink/60",
    expected: "bg-ink/8 text-ink/60",
  },
  dark: {
    measured: "bg-coral/20 text-coral",
    estimated: "bg-lilac/20 text-lilac",
    target: "bg-ivory/10 text-ivory/70",
    expected: "bg-ivory/10 text-ivory/70",
  },
};

export function StatBadge({
  tag,
  text,
  tone = "light",
}: {
  tag: ResultTag;
  text: string;
  tone?: "light" | "dark";
}) {
  return (
    <li
      className={cn(
        "flex items-start gap-3 text-[0.95rem] leading-relaxed",
        tone === "dark" ? "text-ivory/80" : "text-ink/80"
      )}
    >
      <span
        className={cn(
          "mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-[0.7rem] font-semibold tracking-wide",
          tagStyle[tone][tag]
        )}
      >
        {resultTagLabel[tag]}
      </span>
      <span>{text}</span>
    </li>
  );
}
