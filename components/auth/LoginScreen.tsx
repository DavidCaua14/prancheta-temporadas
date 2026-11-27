"use client";
/* eslint-disable @next/next/no-img-element -- artes e escudos já otimizados em WebP */

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { MascotTipInline, MascotTipSide } from "@/components/game/MascotTip";
import { Icon } from "@/components/ui/Icon";
import { ONLINE_URL, crestSrc } from "@/lib/clubs";
import { GoogleLogo } from "./GoogleLogo";

type Mode = "entrar" | "criar";

const LOGIN_CLUBS = ["itabaiana", "paysandu", "santa-cruz", "figueirense", "portuguesa", "guarani", "joinville", "gama", "treze", "volta-redonda"];

/**
 * Login do Temporadas — por enquanto só o visual (o botão ainda não conecta).
 * Mesmo jeito do online: conta Google, sem senha. A conta é a mesma nos dois
 * jogos, então "entrar" e "criar conta" usam o mesmo botão; as abas só mudam
 * o texto para o jogador se achar.
 */
export function LoginScreen({ mascot }: { mascot: ReactNode }) {
  const [mode, setMode] = useState<Mode>("criar");
  const [tried, setTried] = useState(false);
  // o escudo da parede muda a cada visita (sempre um clube de acesso: é onde a carreira começa)
  const [club, setClub] = useState("itabaiana");
  useEffect(() => {
    const list = LOGIN_CLUBS;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sorteio só no navegador (o HTML pré-gerado usa o primeiro)
    setClub(list[Math.floor(Math.random() * list.length)]);
  }, []);

  const tip = tried
    ? "Calma, professor! O login ainda está sendo ligado. Enquanto isso, dá para conhecer o Prancheta Online com a mesma conta."
    : mode === "criar"
      ? "Bem-vindo, professor! Crie sua conta com o Google e escolha o clube onde começa a sua carreira."
      : "De volta ao vestiário! Entre com o Google e continue a carreira de onde parou.";

  return (
    <div className="mx-auto grid w-full max-w-5xl flex-1 grid-cols-1 items-center gap-8 pt-2 lg:grid-cols-[minmax(0,1fr)_300px] lg:pt-6">
      <div className="mx-auto w-full min-w-0 max-w-xl">
        <MascotTipInline mascot={mascot}>{tip}</MascotTipInline>

        <section className="overflow-hidden rounded-[24px] border-[3px] border-[var(--ink)] bg-[var(--paper)] text-[var(--ink)] shadow-[0_6px_0_var(--ink)]">
          {/* faixa ilustrada: sala do técnico, com um escudo real no lugar do escudo em branco da parede */}
          <div className="relative aspect-[3/1] border-b-[3px] border-[var(--ink)]">
            <img src="/art/banner-login-temporadas.webp" alt="" className="absolute inset-0 h-full w-full" />
            <img
              src={crestSrc(club, 128)}
              alt=""
              className="absolute aspect-square -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_2px_0_rgba(27,16,56,0.5)] transition-opacity duration-300"
              style={{ left: "86.8%", top: "36.4%", width: "13.2%" }}
            />
          </div>

          <div className="px-5 pb-6 pt-5 sm:px-8 sm:pb-8">
            {/* entrar / criar conta */}
            <div className="grid grid-cols-2 gap-1 rounded-xl border-[3px] border-[var(--ink)] bg-[var(--cream)] p-1" role="tablist" aria-label="Acesso">
              {(
                [
                  ["criar", "Criar conta"],
                  ["entrar", "Já tenho conta"],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={mode === id}
                  onClick={() => {
                    setMode(id);
                    setTried(false);
                  }}
                  className={`h-10 rounded-lg text-sm font-extrabold transition-colors ${mode === id ? "bg-[var(--sun)] shadow-[0_2px_0_var(--ink)]" : "opacity-60 hover:opacity-100"}`}
                >
                  {label}
                </button>
              ))}
            </div>

            <span className="tag mt-5">{mode === "criar" ? "Novo técnico" : "Vestiário"}</span>
            <h1 className="t-display mt-3 text-3xl text-[var(--ink)] [text-shadow:0.05em_0.05em_0_var(--sun)] sm:text-4xl">
              {mode === "criar" ? "Assine seu contrato" : "Bem-vindo de volta"}
            </h1>
            <p className="mt-2 leading-relaxed opacity-75">
              {mode === "criar"
                ? "Crie sua conta com o Google para escolher seu clube e começar a primeira temporada. Sem senha para decorar."
                : "Entre com a mesma conta Google e continue a sua carreira em qualquer aparelho."}
            </p>

            <button type="button" onClick={() => setTried(true)} className="btn btn-paper btn-lg mt-6 w-full !bg-white">
              <GoogleLogo className="h-6 w-6 shrink-0" />
              <span className="min-w-0">{mode === "criar" ? "Criar conta com Google" : "Entrar com Google"}</span>
            </button>

            {tried && (
              <div role="status" className="mt-4 rounded-xl border-[3px] border-[var(--ink)] bg-[var(--cream)] px-4 py-3 text-sm font-semibold">
                <p>O login do Prancheta Temporadas chega em breve. Por enquanto, esta tela é só uma prévia.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Link href="/carreira" className="btn btn-green btn-sm">
                    Ver a carreira
                  </Link>
                  <a href={ONLINE_URL("login-preview")} className="btn btn-sm !bg-[var(--hot)] !text-white">
                    Jogar o online
                  </a>
                </div>
              </div>
            )}

            {/* mesma conta nos dois jogos */}
            <a
              href={ONLINE_URL("login-conta")}
              className="mt-5 flex items-center gap-3 rounded-2xl border-[3px] border-[var(--ink)] bg-[var(--hot)] p-3 text-white shadow-[0_4px_0_var(--ink)] transition-transform active:translate-y-1 active:shadow-[0_1px_0_var(--ink)]"
            >
              <img src="/art/icon-pvp.webp" alt="" className="h-11 w-11 shrink-0 object-contain" />
              <span className="min-w-0 flex-1">
                <span className="t-heading block text-sm">Uma conta, dois jogos</span>
                <span className="block text-xs font-bold text-white/85">Já joga o Prancheta Online? Use a mesma conta Google.</span>
              </span>
              <Icon name="chevron-right" className="h-5 w-5 shrink-0" />
            </a>

            <ul className="mt-5 grid gap-2 text-sm font-semibold sm:grid-cols-3">
              {["Grátis para jogar", "Clubes reais", "Carreira salva"].map((t) => (
                <li key={t} className="flex items-center gap-2 rounded-xl bg-[var(--cream)] px-3 py-2">
                  <Icon name="check" className="h-4 w-4 shrink-0 text-[var(--grass-2)]" />
                  {t}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs leading-relaxed opacity-60">
              Ao entrar, você aceita os <span className="underline">Termos de uso</span> e a <span className="underline">Política de privacidade</span>. Usamos apenas seu
              e-mail e nome do Google para identificar sua conta.
            </p>
          </div>
        </section>

        <p className="mt-5 text-center">
          <Link href="/" className="text-sm font-bold text-white/80 underline-offset-4 hover:text-white hover:underline">
            <Icon name="back" className="mr-1 inline h-4 w-4 align-[-3px]" />
            Voltar para o início
          </Link>
        </p>
      </div>

      <MascotTipSide mascot={mascot}>{tip}</MascotTipSide>
    </div>
  );
}
