import Link from "next/link";
import { StatBadge } from "@/components/StatBadge";
import { WindowChrome } from "@/components/WindowChrome";
import type { ProjectBase } from "@/data/projects";
import { cn } from "@/lib/cn";

export function DetailHeader({
  project,
  tone = "light",
}: {
  project: ProjectBase;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <header className="mx-auto max-w-3xl px-6 pt-32 pb-16 sm:px-8 sm:pt-40">
      <Link
        href="/#work"
        className={cn(
          "text-xs font-semibold tracking-wide hover:text-blue",
          dark ? "text-[#f3efe6]/50" : "text-ink/50"
        )}
      >
        ← 전체 프로젝트
      </Link>

      <WindowChrome label={project.title} tone={tone} className="mt-6 mb-6" />

      <p
        className={cn(
          "text-xs font-semibold tracking-[0.2em]",
          dark ? "text-gold" : "text-blue"
        )}
      >
        {project.eyebrow}
      </p>
      <h1
        className={cn(
          "display-heading mt-3 text-4xl sm:text-5xl",
          dark ? "text-[#f3efe6]" : "text-ink"
        )}
      >
        {project.title}
      </h1>
      <p className={cn("mt-3 text-lg", dark ? "text-[#f3efe6]/60" : "text-ink/60")}>
        {project.subtitle}
      </p>
      <p
        className={cn(
          "mt-6 text-lg leading-relaxed",
          dark ? "text-[#f3efe6]/80" : "text-ink/80"
        )}
      >
        {project.concept}
      </p>

      <dl
        className={cn(
          "mt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm",
          dark ? "text-[#f3efe6]/60" : "text-ink/60"
        )}
      >
        <div>
          <dt className={cn("font-medium", dark ? "text-[#f3efe6]/40" : "text-ink/40")}>
            역할
          </dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt className={cn("font-medium", dark ? "text-[#f3efe6]/40" : "text-ink/40")}>
            기간
          </dt>
          <dd>{project.period}</dd>
        </div>
      </dl>

      <div className="glass-surface mt-8 rounded-2xl p-6">
        <p className="mb-3 text-xs font-semibold tracking-wide text-ink/50">
          핵심 요약
        </p>
        <ul className="flex flex-col gap-2">
          {project.results.map((result) => (
            <StatBadge key={result.text} tag={result.tag} text={result.text} />
          ))}
        </ul>
      </div>
    </header>
  );
}
