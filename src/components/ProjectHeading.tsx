import type { ProjectBase } from "@/data/projects";
import { WindowChrome } from "@/components/WindowChrome";
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
        <WindowChrome label={`PROJECT ${number}`} tone={tone} className="mb-5" />
        <span
          aria-hidden
          className={cn(
            "block text-7xl font-black leading-none sm:text-8xl",
            tone === "dark" ? "text-[#f3efe6]/10" : "text-ink/8"
          )}
        >
          {number}
        </span>
        <p
          className={cn(
            "mt-2 text-xs font-semibold tracking-[0.2em]",
            tone === "dark" ? "text-gold" : "text-blue"
          )}
        >
          {project.eyebrow}
        </p>
        <h2
          className={cn(
            "display-heading mt-3 text-4xl sm:text-5xl",
            tone === "dark" ? "text-[#f3efe6]" : "text-ink"
          )}
        >
          {project.title}
        </h2>
        <p
          className={cn(
            "mt-2 max-w-md text-base",
            tone === "dark" ? "text-[#f3efe6]/55" : "text-ink/55"
          )}
        >
          {project.subtitle}
        </p>
      </div>

      <dl
        className={cn(
          "flex flex-wrap gap-x-8 gap-y-2 text-sm",
          tone === "dark" ? "text-[#f3efe6]/55" : "text-ink/55"
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
