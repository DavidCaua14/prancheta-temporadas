"use client";

import { useEffect, useState } from "react";
import { APP_VERSION, type VersionPayload } from "@/lib/version";
import { Icon } from "@/components/ui/Icon";

/** Intervalo entre verificações enquanto a aba está aberta. */
const CHECK_INTERVAL_MS = 60_000;

/**
 * Vigia de versão.
 *
 * O bundle carrega a versão com que foi gerado (APP_VERSION). De tempos em
 * tempos — e sempre que o jogador volta para a aba — perguntamos ao servidor
 * qual é a versão publicada. Se for diferente, travamos a tela com um aviso
 * e o único caminho é clicar em "Atualizar", que recarrega o jogo.
 *
 * Custo: um GET pequeno e estático por minuto por aba ativa; nada de banco.
 */
/** Novidades mostradas no aviso (as mais recentes primeiro). */
const MAX_NOTES = 4;

export function UpdateWatcher() {
  const [update, setUpdate] = useState<VersionPayload | null>(null);

  useEffect(() => {
    if (APP_VERSION === "dev") return;
    let stopped = false;

    async function check() {
      if (stopped || document.visibilityState !== "visible") return;
      try {
        const res = await fetch(`/api/version?t=${Date.now()}`, { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as VersionPayload;
        if (!stopped && data.version && data.version !== APP_VERSION) {
          setUpdate(data);
          stopped = true;
        }
      } catch {
        // Sem rede: tenta de novo no próximo ciclo.
      }
    }

    const timer = window.setInterval(check, CHECK_INTERVAL_MS);
    const onVisible = () => void check();
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", onVisible);
    window.addEventListener("online", onVisible);
    void check();

    return () => {
      stopped = true;
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", onVisible);
      window.removeEventListener("online", onVisible);
    };
  }, []);

  useEffect(() => {
    if (!update) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [update]);

  if (!update) return null;

  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="update-title"
      aria-describedby="update-desc"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(27,16,56,0.82)] px-4 pb-4 pt-12 backdrop-blur-sm"
    >
      {/* cabe em qualquer tela: altura limitada, só a lista de novidades rola */}
      <div className="panel halftone anim-pop relative flex max-h-full w-full max-w-sm flex-col p-5 pt-11 text-center sm:p-6 sm:pt-12">
        <div className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-2xl border-[3px] border-[var(--ink)] bg-[var(--sun)] shadow-[0_4px_0_var(--ink)]">
          <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
            <circle cx="24" cy="24" r="18" fill="#fff" stroke="var(--ink)" strokeWidth="3" />
            <path
              d="M24 10l6 5-2 7h-8l-2-7zM12 22l6 2 2 7-4 5-6-3M36 22l-6 2-2 7 4 5 6-3M20 31h8"
              fill="var(--ink)"
              stroke="var(--ink)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 id="update-title" className="t-heading text-xl sm:text-2xl">
          Apito! Tem atualização
        </h2>
        <p id="update-desc" className="mt-2 text-sm font-bold sm:text-base">
          Saiu uma versão nova do Prancheta Temporadas. Para continuar jogando, atualize o jogo.
        </p>
        {update.notes.length > 0 && (
          <ul className="mt-3 min-h-0 flex-1 space-y-1.5 overflow-y-auto rounded-xl border-[3px] border-[var(--ink)] bg-white px-3 py-2.5 text-left text-[0.82rem] font-semibold leading-snug">
            {update.notes.slice(0, MAX_NOTES).map((note) => (
              <li key={note} className="flex gap-2">
                <Icon name="star" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--grass-2)]" />
                {note}
              </li>
            ))}
          </ul>
        )}
        <button
          type="button"
          autoFocus
          onClick={() => window.location.reload()}
          className="btn btn-green btn-lg mt-4 w-full shrink-0"
        >
          Atualizar agora
        </button>
        <p className="mt-2 shrink-0 text-xs font-bold opacity-60">
          Sua carreira está salva. Leva só um segundinho.
        </p>
      </div>
    </div>
  );
}
