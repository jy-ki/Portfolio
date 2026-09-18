import { ScrollReveal } from "@/components/ScrollReveal";
import { morePerspectives, otherProjects } from "@/data/projects";

export function MorePerspectives() {
  return (
    <section className="bg-ivory px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-ink/40">
            MORE PERSPECTIVES
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            다른 각도에서 사람을 관찰한 프로젝트
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {morePerspectives.map((project) => (
            <ScrollReveal key={project.title}>
              <article className="flex h-full flex-col gap-4 rounded-2xl border border-ink/10 bg-white/40 p-7">
                <div>
                  <h3 className="text-xl font-bold text-ink">{project.title}</h3>
                  <p className="mt-1 text-xs text-ink/50">{project.englishLabel}</p>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-ink/75">
                  {project.summary}
                </p>
                <div className="border-t border-ink/10 pt-4 text-xs text-ink/50">
                  <p>{project.role}</p>
                  <p className="mt-1">{project.period}</p>
                </div>
                {project.link && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-coral underline underline-offset-4"
                  >
                    {project.link.label} 보기
                  </a>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10">
          <details className="glass-surface group rounded-2xl px-6 py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-ink">
              그 외 프로젝트 더 보기
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>

            <ul className="mt-6 flex flex-col gap-6">
              {otherProjects.map((project) => (
                <li
                  key={project.title}
                  className="flex flex-col gap-1 border-t border-ink/10 pt-5 first:border-t-0 first:pt-0"
                >
                  <p className="text-base font-semibold text-ink">
                    {project.title}
                  </p>
                  <p className="text-sm leading-relaxed text-ink/70">
                    {project.summary}
                  </p>
                  <p className="mt-1 text-xs text-ink/45">
                    {project.role} · {project.period}
                  </p>
                </li>
              ))}
            </ul>
          </details>
        </ScrollReveal>
      </div>
    </section>
  );
}
