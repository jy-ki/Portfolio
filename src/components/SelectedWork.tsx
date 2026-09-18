import { ProjectCard } from "@/components/ProjectCard";
import { selectedWork } from "@/data/projects";

export function SelectedWork() {
  return (
    <section id="work" className="bg-ivory px-6 py-24 sm:px-12 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-ink/40">
            SELECTED WORK
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            관찰에서 시작해 경험으로 끝난 프로젝트 세 가지
          </h2>
        </div>

        <div className="flex flex-col gap-24 sm:gap-32">
          {selectedWork.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
