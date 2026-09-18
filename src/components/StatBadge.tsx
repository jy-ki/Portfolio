import { resultTagLabel, type ResultTag } from "@/data/projects";
import { Tag } from "@/components/Tag";
import { cn } from "@/lib/cn";

const TAG_INDEX: Record<ResultTag, number> = {
  measured: 0,
  estimated: 2,
  target: 1,
  expected: 3,
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
        tone === "dark" ? "text-[#f3efe6]/80" : "text-ink/80"
      )}
    >
      <Tag index={TAG_INDEX[tag]} className="mt-0.5 shrink-0">
        {resultTagLabel[tag]}
      </Tag>
      <span>{text}</span>
    </li>
  );
}
