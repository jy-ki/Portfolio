import type { ReactNode } from "react";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";

export function DetailPageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteNav />
      <main className="bg-ivory pb-24">
        {children}
        <div className="mx-auto max-w-3xl px-6 pt-8 sm:px-8">
          <Link
            href="/#work"
            className="text-sm font-semibold text-ink/60 hover:text-coral"
          >
            ← 다른 프로젝트 보기
          </Link>
        </div>
      </main>
    </>
  );
}
