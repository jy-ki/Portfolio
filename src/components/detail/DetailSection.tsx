import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/cn";

export function DetailSection({
  step,
  title,
  children,
  tone = "light",
}: {
  step: string;
  title: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <ScrollReveal>
      <section className="mx-auto max-w-3xl px-6 py-12 sm:px-8">
        <p
          className={cn(
            "text-xs font-semibold tracking-[0.2em]",
            dark ? "text-gold" : "text-orange"
          )}
        >
          {step}
        </p>
        <h2
          className={cn(
            "display-heading mt-2 text-2xl sm:text-3xl",
            dark ? "text-[#f3efe6]" : "text-ink"
          )}
        >
          {title}
        </h2>
        <div
          className={cn(
            "mt-6 flex flex-col gap-4 text-base leading-relaxed",
            dark ? "text-[#f3efe6]/80" : "text-ink/80"
          )}
        >
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
