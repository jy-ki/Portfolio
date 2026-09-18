import { resultTagLabel, type ResultTag } from "@/data/projects";
import { cn } from "@/lib/cn";

const tagStyle: Record<ResultTag, string> = {
  measured: "bg-coral/12 text-coral",
  estimated: "bg-lilac/25 text-ink/70",
  target: "bg-ink/8 text-ink/60",
  expected: "bg-peach/30 text-ink/65",
};

export function StatBadge({ tag, text }: { tag: ResultTag; text: string }) {
  return (
    <li className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-ink/80">
      <span
        className={cn(
          "mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-[0.7rem] font-semibold tracking-wide",
          tagStyle[tag]
        )}
      >
        {resultTagLabel[tag]}
      </span>
      <span>{text}</span>
    </li>
  );
}
