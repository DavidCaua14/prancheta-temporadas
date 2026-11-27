import { Logo } from "@/components/ui/Logo";
import { ONLINE_URL } from "@/lib/clubs";

const FAQ = [
  {
    q: "É parecido com o Brasfoot?",
    a: "A ideia é a mesma: você é o técnico, escala o time e as partidas são simuladas. Aqui os clubes têm escudos oficiais, a tática faz diferença de verdade e a sua carreira anda de clube em clube conforme a sua reputação.",
  },
  { q: "Preciso pagar?", a: "Não. O Prancheta Temporadas é grátis e roda no navegador, sem instalar nada." },
  {
    q: "Meu progresso fica salvo?",
    a: "Fica. O jogo roda no seu aparelho e guarda uma cópia da carreira na sua conta, para você continuar de onde parou, até em outro aparelho.",
  },
  {
    q: "Quais clubes e ligas tem?",
    a: "Mais de 370 clubes com escudo oficial: Brasileirão e divisões de acesso, LaLiga, Premier League, Serie A, Bundesliga, Ligue 1, Liga Portugal e os gigantes da América do Sul.",
  },
  {
    q: "Posso começar num time grande?",
    a: "A carreira começa num clube de divisão de acesso, como todo técnico de verdade. Os gigantes vêm com o tempo, pela sua reputação.",
  },
  {
    q: "E o Prancheta Online?",
    a: "É o jogo irmão: lá cada adversário é um técnico de verdade, com leilão de cartas, copas todo dia, ranking e amistosos com amigos. A mesma conta vale nos dois.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <header className="mb-10 text-center sm:mb-14">
          <span className="tag">Dúvidas</span>
          <h2 className="t-display mt-4 text-3xl sm:text-5xl">
            Perguntas <span className="text-[var(--sun)]">frequentes</span>
          </h2>
        </header>
        <div className="grid gap-3">
          {FAQ.map((item) => (
            <details key={item.q} className="panel group overflow-hidden [box-shadow:0_4px_0_var(--ink)]">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-base font-extrabold sm:px-5 sm:text-lg [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-[3px] border-[var(--ink)] bg-[var(--sun)] text-lg font-extrabold leading-none transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="border-t-2 border-dashed border-[var(--ink)]/15 px-4 pb-4 pt-3 leading-relaxed opacity-80 sm:px-5">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="comecar" className="scroll-mt-20 border-t-[3px] border-[var(--ink)] bg-[var(--grass-2)] px-4 py-16 sm:px-6 sm:py-24">
      <div className="panel halftone mx-auto flex max-w-3xl flex-col items-center px-5 py-10 text-center sm:px-10 sm:py-14">
        <Logo size="lg" className="text-left" />
        <h2 className="t-display mt-8 text-3xl text-[var(--ink)] [text-shadow:0.05em_0.05em_0_var(--sun)] sm:text-5xl">O vestiário te espera</h2>
        <p className="mt-4 max-w-lg text-lg leading-relaxed opacity-80">Escolha o seu clube, assine o contrato e comece a primeira temporada. É grátis.</p>
        <a href="/entrar" className="btn btn-green btn-lg mt-8 w-full sm:w-auto">
          Começar minha carreira
        </a>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t-[3px] border-[var(--ink)] bg-[var(--ink)] px-4 py-10 text-sm text-white/60 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <Logo />
        <nav aria-label="Rodapé" className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-bold">
          <a href="#faq" className="hover:text-white">Dúvidas</a>
          <a href={ONLINE_URL("footer")} className="hover:text-white">Prancheta Online</a>
          <a href="#" className="hover:text-white">Termos de uso</a>
          <a href="#" className="hover:text-white">Privacidade</a>
        </nav>
        <p className="max-w-xs text-center text-xs md:text-right">Nomes e escudos dos clubes pertencem aos respectivos clubes.</p>
      </div>
    </footer>
  );
}
