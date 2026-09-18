import type { ProjectBase } from "@/data/projects";
import { cn } from "@/lib/cn";

export function ProjectHeading({
  number,
  project,
  tone = "light",
}: {
  number: string;
  project: ProjectBase;
  tone?: "light" | "dark";
}) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <span
          aria-hidden
          className={cn(
            "block text-7xl font-black leading-none sm:text-8xl",
            tone === "dark" ? "text-ivory/10" : "text-ink/8"
          )}
        >
          {number}
        </span>
        <p
          className={cn(
            "mt-2 text-xs font-semibold tracking-[0.2em]",
            tone === "dark" ? "text-lilac" : "text-coral"
          )}
        >
          {project.eyebrow}
        </p>
        <h2
          className={cn(
            "mt-3 text-4xl font-bold tracking-tight sm:text-5xl",
            tone === "dark" ? "text-ivory" : "text-ink"
          )}
        >
          {project.title}
        </h2>
        <p
          className={cn(
            "mt-2 max-w-md text-base",
            tone === "dark" ? "text-ivory/55" : "text-ink/55"
          )}
        >
          {project.subtitle}
        </p>
      </div>

      <dl
        className={cn(
          "flex flex-wrap gap-x-8 gap-y-2 text-sm",
          tone === "dark" ? "text-ivory/55" : "text-ink/55"
        )}
      >
        <div>
          <dt className="font-medium opacity-60">역할</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt className="font-medium opacity-60">기간</dt>
          <dd>{project.period}</dd>
        </div>
      </dl>
    </div>
  );
}
