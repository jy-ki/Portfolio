import { WindowChrome } from "@/components/WindowChrome";

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
      className="paper-grid bg-ivory px-6 py-24 sm:px-12 sm:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 flex justify-center">
          <WindowChrome label="say-hello.portfolio" />
        </div>
        <p className="text-xs font-semibold tracking-[0.2em] text-ink/50">
          CONTACT
        </p>
        <h2 className="display-heading mt-4 text-3xl text-ink sm:text-4xl">
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
                data-cursor="link"
                className="chrome-bar flex items-center justify-between rounded-2xl px-6 py-4 text-left transition-colors hover:bg-blue/10"
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
