import type { ReactNode } from "react";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { cn } from "@/lib/cn";

export function DetailPageShell({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <>
      <SiteNav />
      <main className={cn("pb-24", dark ? "section-dark" : "bg-ivory")}>
        {children}
        <div className="mx-auto max-w-3xl px-6 pt-8 sm:px-8">
          <Link
            href="/#work"
            className={cn(
              "text-sm font-semibold hover:text-coral",
              dark ? "text-ivory/60" : "text-ink/60"
            )}
          >
            ← 다른 프로젝트 보기
          </Link>
        </div>
      </main>
    </>
  );
}
