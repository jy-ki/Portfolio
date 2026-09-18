import { GradientWaveBackground } from "@/components/GradientWaveBackground";

const links = [
  {
    label: "Fandom.Mapper",
    note: "서비스 링크",
    href: "http://fandom-mapper.imweb.me/",
  },
  {
    label: "2025 제국 기록부",
    note: "서비스 링크",
    href: "https://2025-imperial-archive.vercel.app/",
  },
  {
    label: "Mechuragi",
    note: "GitHub",
    href: "https://github.com/teamMechuragi",
  },
  {
    label: "틈;세",
    note: "Instagram",
    href: "https://www.instagram.com/between_2060",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ivory px-6 py-24 sm:px-12 sm:py-32"
    >
      <GradientWaveBackground />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[85vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-ivory/60 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-ink/50">
          CONTACT
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          김지영
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink/70">
          진행한 프로젝트는 아래 링크에서 직접 확인하실 수 있습니다.
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-surface flex items-center justify-between rounded-2xl px-6 py-4 text-left transition-colors hover:bg-white/60"
              >
                <span className="text-sm font-semibold text-ink">
                  {link.label}
                </span>
                <span className="text-xs text-ink/50">{link.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
