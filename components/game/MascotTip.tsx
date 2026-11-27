"use client";

import type { ReactNode } from "react";

type Props = { mascot: ReactNode; children: ReactNode; step?: string; always?: boolean };

/** Celular/tablet: mascote pequena e balão acima do painel (`always` mostra também no desktop). */
export function MascotTipInline({ mascot, children, step, always }: Props) {
  return (
    <div className={`mb-4 flex items-end gap-2 ${always ? "" : "lg:hidden"}`}>
      <div className="h-20 w-16 shrink-0 -scale-x-100 overflow-hidden [&_img]:h-[150%] [&_img]:w-[150%] [&_img]:max-w-none [&_img]:-translate-x-[17%] [&_img]:object-cover [&_img]:object-top">
        {mascot}
      </div>
      <div className="relative flex-1 rounded-2xl border-[3px] border-[var(--ink)] bg-[var(--paper)] px-3.5 py-2.5 text-sm font-semibold leading-snug text-[var(--ink)] shadow-[0_4px_0_var(--ink)]">
        {step && <p className="mb-0.5 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] opacity-50">{step}</p>}
        <div aria-live="polite">{children}</div>
        <span
          aria-hidden
          className="absolute -left-[10px] bottom-4 h-4 w-4 rotate-45 border-b-[3px] border-l-[3px] border-[var(--ink)] bg-[var(--paper)]"
        />
      </div>
    </div>
  );
}

/** Desktop: coluna lateral com balão em cima e a mascote grande embaixo. */
export function MascotTipSide({ mascot, children, step }: Props) {
  return (
    <aside className="sticky bottom-0 hidden self-end lg:flex lg:flex-col">
      <div className="relative mb-3 rounded-2xl border-[3px] border-[var(--ink)] bg-[var(--paper)] px-4 py-3 font-semibold leading-snug text-[var(--ink)] shadow-[0_5px_0_var(--ink)]">
        {step && <p className="mb-1 text-[0.7rem] font-extrabold uppercase tracking-[0.14em] opacity-50">{step}</p>}
        <div aria-live="polite">{children}</div>
        <span
          aria-hidden
          className="absolute -bottom-[10px] left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b-[3px] border-r-[3px] border-[var(--ink)] bg-[var(--paper)]"
        />
      </div>
      <div className="mx-auto h-[280px] w-[230px]">{mascot}</div>
    </aside>
  );
}
