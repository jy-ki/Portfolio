import Link from "next/link";
import { StatBadge } from "@/components/StatBadge";
import type { SelectedWorkProject } from "@/data/projects";

export function DetailHeader({ project }: { project: SelectedWorkProject }) {
  return (
    <header className="mx-auto max-w-3xl px-6 pt-32 pb-16 sm:px-8 sm:pt-40">
      <Link
        href="/#work"
        className="text-xs font-semibold tracking-wide text-ink/50 hover:text-coral"
      >
        ← 전체 프로젝트
      </Link>

      <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-coral">
        {project.eyebrow}
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-3 text-lg text-ink/60">{project.subtitle}</p>
      <p className="mt-6 text-lg leading-relaxed text-ink/80">
        {project.concept}
      </p>

      <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm text-ink/60">
        <div>
          <dt className="font-medium text-ink/40">역할</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt className="font-medium text-ink/40">기간</dt>
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
