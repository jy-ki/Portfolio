import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { StatBadge } from "@/components/StatBadge";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { SelectedWorkProject } from "@/data/projects";
import { cn } from "@/lib/cn";

function DetailLink({ slug }: { slug: string }) {
  return (
    <Link
      href={`/work/${slug}`}
      className="group inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-coral/50 decoration-2 underline-offset-4 transition-colors hover:text-coral"
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

function ProjectMeta({ project }: { project: SelectedWorkProject }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] text-coral">
          {project.eyebrow}
        </p>
        <h3 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {project.title}
        </h3>
        <p className="mt-2 text-base text-ink/60">{project.subtitle}</p>
      </div>

      <p className="max-w-xl text-lg leading-relaxed text-ink/80">
        {project.concept}
      </p>

      <dl className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink/60">
        <div>
          <dt className="font-medium text-ink/40">역할</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt className="font-medium text-ink/40">기간</dt>
          <dd>{project.period}</dd>
        </div>
      </dl>

      <ul className="flex flex-col gap-2 border-t border-ink/10 pt-5">
        {project.results.map((result) => (
          <StatBadge key={result.text} tag={result.tag} text={result.text} />
        ))}
      </ul>

      <DetailLink slug={project.slug} />
    </div>
  );
}

export function ProjectCard({ project }: { project: SelectedWorkProject }) {
  const isLarge = project.size === "large";

  return (
    <ScrollReveal>
      <article
        className={cn(
          "grid grid-cols-1 items-start gap-10",
          isLarge ? "lg:grid-cols-[1.15fr_1fr]" : "lg:grid-cols-2"
        )}
      >
        <div
          className={cn(
            "grid gap-4",
            isLarge ? "sm:grid-cols-[1.1fr_1fr]" : "grid-cols-1"
          )}
        >
          {project.cardImages.map((slot, index) => (
            <ImagePlaceholder
              key={slot.label}
              slot={slot}
              className={cn(
                isLarge && index === 0 && "sm:row-span-2"
              )}
            />
          ))}
        </div>

        <ProjectMeta project={project} />
      </article>
    </ScrollReveal>
  );
}
