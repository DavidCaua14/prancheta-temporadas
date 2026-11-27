/* eslint-disable @next/next/no-img-element -- artes já otimizadas em WebP */
import { Crest } from "@/components/Crest";
import { Icon } from "@/components/ui/Icon";
import { STARS } from "@/lib/clubs";

/** Raios estáticos atrás dos escudos (mesmo desenho do destaque do online). */
function Sunburst({ className }: { className?: string }) {
  return (
    <svg viewBox="-100 -100 200 200" className={className} aria-hidden>
      <circle r="98" fill="var(--night-3)" />
      {Array.from({ length: 16 }, (_, i) => (
        <path key={i} d="M0 0 L-12 -98 L12 -98Z" fill="rgba(255,210,63,0.13)" transform={`rotate(${i * 22.5})`} />
      ))}
      <circle r="98" fill="none" stroke="var(--ink)" strokeWidth="3" />
    </svg>
  );
}

/** Roda de escudos dos gigantes em volta da prancheta do técnico. */
function CrestWheel() {
  const ring = STARS.slice(0, 10);
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      <Sunburst className="absolute inset-[3%] h-[94%] w-[94%]" />
      {ring.map((club, i) => {
        const a = (i / ring.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(a) * 39;
        const y = 50 + Math.sin(a) * 39;
        return (
          <Crest
            key={club.slug}
            slug={club.slug}
            name={club.name}
            size={128}
            className="crest-pop absolute h-[19%] w-[19%] -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${0.08 * i}s` }}
          />
        );
      })}
      <div className="absolute left-1/2 top-1/2 flex h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[4px] border-[var(--ink)] bg-[var(--sun)] shadow-[0_6px_0_var(--ink)]">
        <img src="/art/icon-temporadas.webp" alt="" className="h-[78%] w-[78%] object-contain" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden border-b-[3px] border-[var(--ink)]">
      <img src="/art/hero-stadium.webp" alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover object-right opacity-90" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--night)_0%,rgba(29,22,80,0.85)_40%,rgba(29,22,80,0.35)_75%,rgba(29,22,80,0.2)_100%)] max-lg:bg-[linear-gradient(180deg,rgba(29,22,80,0.55)_0%,rgba(29,22,80,0.9)_55%,var(--night)_100%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pb-20">
        <div className="text-center lg:text-left">
          <span className="tag">
            <span className="h-2 w-2 rounded-full bg-[var(--grass)]" />
            Modo carreira · grátis
          </span>
          <h1 className="t-display mt-5 text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-[4rem]">
            Do campinho
            <br />
            ao <span className="text-[var(--sun)]">Bernabéu.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl lg:mx-0">
            Seja técnico de <strong className="font-extrabold text-white">clubes reais</strong> do Brasil e do mundo. Comece numa divisão de acesso,
            ganhe reputação e receba propostas de Flamengo, Real Madrid, Manchester City e companhia.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href="/carreira" className="btn btn-green btn-lg">
              <Icon name="play" className="h-5 w-5" /> Começar minha carreira
            </a>
            <a href="#clubes" className="btn btn-ghost btn-lg">
              Ver os clubes
            </a>
          </div>
          <p className="mt-5 text-sm font-semibold text-[var(--sky)]">Curtia Brasfoot? Aqui é carreira de técnico, com clubes de verdade, direto no navegador.</p>
        </div>
        <CrestWheel />
      </div>

      <div className="relative border-t-[3px] border-[var(--ink)] bg-[var(--night-2)]">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 divide-[var(--ink)] px-4 sm:px-6 md:grid-cols-4 md:divide-x-[3px]">
          {[
            ["370+", "clubes reais com escudo oficial"],
            ["9", "ligas e regiões do mundo"],
            ["1", "carreira: da Série D à Europa"],
            ["0", "downloads necessários"],
          ].map(([n, label]) => (
            <li key={label} className="flex items-center justify-center gap-3 py-4 md:py-5">
              <span className="t-num text-3xl text-[var(--sun)]">{n}</span>
              <span className="max-w-[8rem] text-sm font-bold leading-tight text-white/75">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
