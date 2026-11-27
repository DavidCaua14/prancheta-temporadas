/* eslint-disable @next/next/no-img-element -- escudos e artes já otimizados em WebP */
import type { CSSProperties } from "react";
import { CREST_SLOTS, crestSrc } from "@/lib/clubs";

/**
 * Escudo oficial sobre uma plaquinha clara (escudos pretos, como o da
 * Juventus, somem no fundo escuro do jogo).
 */
export function Crest({ slug, name, size = 64, plaque = true, className = "", style }: { slug: string; name: string; size?: 64 | 128; plaque?: boolean; className?: string; style?: CSSProperties }) {
  if (!plaque) {
    return (
      <span className={`block ${className}`} style={style}>
        <img src={crestSrc(slug, size)} alt={name} title={name} className="h-full w-full object-contain" loading="lazy" decoding="async" draggable={false} />
      </span>
    );
  }
  // padding em % seria relativo ao container da página: o escudo ocupa 72% da plaquinha
  return (
    <span className={`flex items-center justify-center rounded-full border-[3px] border-[var(--ink)] bg-[var(--paper)] shadow-[0_3px_0_var(--ink)] ${className}`} style={style}>
      <img src={crestSrc(slug, size)} alt={name} title={name} className="h-[72%] w-[72%] object-contain" loading="lazy" decoding="async" draggable={false} />
    </span>
  );
}

/** Arte de divulgação com os escudos oficiais encaixados nos escudos em branco do desenho. */
export function CrestArt({ art, clubs, className = "", eager = false }: { art: string; clubs: string[]; className?: string; eager?: boolean }) {
  const slots = CREST_SLOTS[art] ?? [];
  return (
    <div className={`relative ${className}`}>
      <img src={`/art/${art}.webp`} alt="" className="block h-auto w-full" loading={eager ? "eager" : "lazy"} decoding="async" draggable={false} />
      {slots.map((s, i) =>
        clubs[i] ? (
          <img
            key={i}
            src={crestSrc(clubs[i], s.w > 6 ? 128 : 64)}
            alt=""
            className="absolute aspect-square -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_2px_0_rgba(27,16,56,0.55)]"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: `${s.w}%` }}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            draggable={false}
          />
        ) : null,
      )}
    </div>
  );
}
