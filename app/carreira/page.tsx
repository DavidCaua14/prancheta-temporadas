import type { Metadata } from "next";
import Link from "next/link";
import { Crest } from "@/components/Crest";
import { Logo } from "@/components/ui/Logo";
import { LEAGUES, ONLINE_URL } from "@/lib/clubs";

export const metadata: Metadata = { title: "Começar carreira — Prancheta Temporadas" };

/** Próxima etapa: criação da carreira. Por enquanto, aviso + caminho para o online. */
export default function CarreiraPage() {
  const start = LEAGUES.find((l) => l.id === "acesso")?.clubs ?? [];
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 px-4 py-12 text-center">
      <Logo size="lg" />
      <div className="panel w-full min-w-0 max-w-xl p-5 sm:p-6">
        <span className="tag">Em construção</span>
        <h1 className="t-display mt-3 text-3xl text-[var(--ink)]">A pré-temporada já começou</h1>
        <p className="mt-2 opacity-75">A criação da carreira chega na próxima etapa. Estes são alguns dos clubes onde você vai poder começar:</p>
        <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-6">
          {start.map((c) => (
            <Crest key={c.slug} slug={c.slug} name={c.name} className="aspect-square w-full min-w-0" />
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Link href="/" className="btn btn-paper">Voltar</Link>
          <a href={ONLINE_URL("carreira")} className="btn !bg-[var(--hot)] !text-white">Enquanto isso, jogue o online</a>
        </div>
      </div>
    </main>
  );
}
