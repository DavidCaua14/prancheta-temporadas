"use client";

import { useState } from "react";
import { Crest } from "@/components/Crest";
import { LEAGUES } from "@/lib/clubs";

/** Abas por liga com os escudos oficiais dos clubes. */
export function LeagueExplorer() {
  const [id, setId] = useState(LEAGUES[0].id);
  const league = LEAGUES.find((l) => l.id === id) ?? LEAGUES[0];
  return (
    <div>
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0" role="tablist" aria-label="Ligas">
        {LEAGUES.map((l) => (
          <button
            key={l.id}
            type="button"
            role="tab"
            aria-selected={l.id === id}
            onClick={() => setId(l.id)}
            className={`flex h-11 shrink-0 items-center gap-2 rounded-xl border-[3px] border-[var(--ink)] px-3 text-sm font-extrabold shadow-[0_3px_0_var(--ink)] ${
              l.id === id ? "bg-[var(--sun)] text-[var(--ink)]" : "bg-[var(--night-2)] text-white/85"
            }`}
          >
            <span aria-hidden>{l.flag}</span>
            {l.name}
          </button>
        ))}
      </div>

      <div className="panel mt-5 p-4 sm:p-6" role="tabpanel">
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
          <p className="t-heading text-xl">{league.name}</p>
          <p className="text-sm font-bold opacity-60">{league.country}</p>
        </div>
        <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {league.clubs.map((club, i) => (
            <li key={`${league.id}-${club.slug}`} className="crest-pop flex flex-col items-center gap-2 rounded-2xl bg-[var(--cream)] p-3 text-center" style={{ animationDelay: `${0.03 * i}s` }}>
              <Crest slug={club.slug} name={club.name} size={128} plaque={false} className="h-16 w-16 sm:h-20 sm:w-20" />
              <span className="line-clamp-2 text-xs font-extrabold leading-tight sm:text-sm">{club.name}</span>
            </li>
          ))}
        </ul>
        {league.id === "acesso" && (
          <p className="mt-4 text-center text-sm font-bold opacity-70">Todo grande técnico começou por baixo. Escolha um clube de acesso e leve-o até a elite.</p>
        )}
      </div>
    </div>
  );
}
