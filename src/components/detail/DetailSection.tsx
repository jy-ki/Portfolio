import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function DetailSection({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <ScrollReveal>
      <section className="mx-auto max-w-3xl px-6 py-12 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-coral">
          {step}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {title}
        </h2>
        <div className="prose-detail mt-6 flex flex-col gap-4 text-base leading-relaxed text-ink/80">
          {children}
        </div>
      </section>
    </ScrollReveal>
  );
}

export function TeamRoleNote({ children }: { children: ReactNode }) {
  return (
    <div className="glass-surface rounded-2xl px-5 py-4 text-sm leading-relaxed text-ink/75">
      {children}
    </div>
  );
}
