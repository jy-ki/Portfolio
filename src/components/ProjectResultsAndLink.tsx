import { StatBadge } from "@/components/StatBadge";
import { DetailLink } from "@/components/DetailLink";
import type { ProjectBase } from "@/data/projects";
import { cn } from "@/lib/cn";

export function ProjectResultsAndLink({
  project,
  tone = "light",
}: {
  project: ProjectBase;
  tone?: "light" | "dark";
}) {
  return (
    <div className="flex flex-col gap-6">
      <p
        className={cn(
          "max-w-lg text-lg leading-relaxed",
          tone === "dark" ? "text-ivory/80" : "text-ink/80"
        )}
      >
        {project.concept}
      </p>

      <ul
        className={cn(
          "flex flex-col gap-2 border-t pt-5",
          tone === "dark" ? "border-ivory/15" : "border-ink/10"
        )}
      >
        {project.results.map((result) => (
          <StatBadge
            key={result.text}
            tag={result.tag}
            text={result.text}
            tone={tone}
          />
        ))}
      </ul>

      <DetailLink slug={project.slug} tone={tone} />
    </div>
  );
}
