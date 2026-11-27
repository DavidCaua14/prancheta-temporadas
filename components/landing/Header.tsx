import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { ONLINE_URL } from "@/lib/clubs";

const NAV = [
  { href: "#clubes", label: "Clubes" },
  { href: "#carreira", label: "Carreira" },
  { href: "#tatica", label: "Tática" },
  { href: "#online", label: "Online" },
  { href: "#faq", label: "Dúvidas" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-[var(--ink)] bg-[var(--night-2)]">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#topo" aria-label="Prancheta Temporadas — início" className="shrink-0">
          <Logo />
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="rounded-lg px-3 py-2 text-[0.95rem] font-bold text-white/80 transition-colors hover:bg-white/10 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href={ONLINE_URL("header")} className="btn btn-sm hidden !bg-[var(--hot)] !text-white sm:inline-flex">
            <Icon name="bolt" className="h-4 w-4" /> Jogar online
          </a>
          <a href="/carreira" className="btn btn-green btn-sm">
            Começar
          </a>
          <details className="group relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border-[3px] border-[var(--ink)] bg-white/10 text-white [&::-webkit-details-marker]:hidden" aria-label="Menu">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="absolute right-0 top-12 w-56 rounded-2xl border-[3px] border-[var(--ink)] bg-[var(--night-2)] p-2 shadow-[0_5px_0_var(--ink)]">
              {NAV.map((item) => (
                <a key={item.href} href={item.href} className="block rounded-lg px-3 py-2 font-bold text-white/85 hover:bg-white/10">
                  {item.label}
                </a>
              ))}
              <a href={ONLINE_URL("menu")} className="btn btn-sm mt-2 w-full !bg-[var(--hot)] !text-white">
                Jogar o Prancheta Online
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
