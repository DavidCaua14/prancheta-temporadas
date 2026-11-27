/* eslint-disable @next/next/no-img-element -- artes já otimizadas em WebP */
import type { ReactNode } from "react";
import { Crest, CrestArt } from "@/components/Crest";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ONLINE_URL } from "@/lib/clubs";
import { LeagueExplorer } from "./LeagueExplorer";

function Section({ id, tone = "plain", children }: { id?: string; tone?: "plain" | "band" | "green" | "pink"; children: ReactNode }) {
  const tones = {
    plain: "",
    band: "border-y-[3px] border-[var(--ink)] bg-[var(--night-2)]",
    green: "border-y-[3px] border-[var(--ink)] bg-[var(--grass-2)]",
    pink: "border-y-[3px] border-[var(--ink)] bg-[var(--hot)]",
  };
  return (
    <section id={id} className={`scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24 ${tones[tone]}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function SectionTitle({ kicker, title, children }: { kicker: string; title: ReactNode; children?: ReactNode }) {
  return (
    <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
      <span className="tag">{kicker}</span>
      <h2 className="t-display mt-4 text-3xl sm:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-lg leading-relaxed text-white/85">{children}</p>}
    </header>
  );
}

const PERKS: { icon: IconName; title: string; text: string }[] = [
  { icon: "shield", title: "Clubes reais", text: "Escudos oficiais de mais de 370 clubes do Brasil, da Europa e da América do Sul." },
  { icon: "trophy", title: "Carreira de técnico", text: "Você não é dono do clube: é o técnico. Bata as metas da diretoria ou perca o emprego." },
  { icon: "clipboard", title: "Tática de verdade", text: "Formação, funções e postura. Os atributos de cada jogador fazem diferença em campo." },
  { icon: "bolt", title: "Grátis e leve", text: "Roda no navegador, até no celular, e o seu progresso fica salvo na sua conta." },
];

export function Perks() {
  return (
    <Section>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PERKS.map((p) => (
          <li key={p.title} className="panel flex flex-col gap-3 p-5">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border-[3px] border-[var(--ink)] bg-[var(--sun)] shadow-[0_3px_0_var(--ink)]">
              <Icon name={p.icon} className="h-7 w-7" />
            </span>
            <p className="t-heading text-lg">{p.title}</p>
            <p className="text-sm leading-relaxed opacity-75">{p.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Clubs() {
  return (
    <Section id="clubes" tone="band">
      <SectionTitle kicker="Clubes reais" title={<>Escolha o seu <span className="text-[var(--sun)]">escudo</span></>}>
        Do Brasileirão à Premier League, da LaLiga à Libertadores. Comece num clube de acesso e construa o seu caminho até os gigantes.
      </SectionTitle>
      <LeagueExplorer />
    </Section>
  );
}

export function Career() {
  return (
    <Section id="carreira">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <CrestArt art="promo-tp-hero" clubs={["itabaiana", "flamengo", "real-madrid"]} className="overflow-hidden rounded-[24px] border-[3px] border-[var(--ink)] shadow-[0_6px_0_var(--ink)]" />
        <div className="min-w-0 text-center md:text-left">
          <span className="tag">Sua carreira</span>
          <h2 className="t-display mt-4 text-3xl sm:text-5xl">
            Cada vitória vale <span className="text-[var(--sun)]">reputação</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/85">
            Ganhar com um time pequeno chama atenção. A reputação sobe, e os clubes maiores começam a ligar. Perdeu demais? A diretoria também liga, para te demitir.
          </p>
          <ul className="mt-5 grid gap-2 text-left text-white/85">
            {["Objetivos da diretoria a cada temporada", "Acesso, rebaixamento, títulos e copas", "Selo de reputação: de Desconhecido a Mundial"].map((t) => (
              <li key={t} className="flex gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-[var(--grass)]" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function Offers() {
  return (
    <Section tone="band">
      <SectionTitle kicker="Propostas" title={<>O telefone <span className="text-[var(--sun)]">não para</span></>}>
        Clubes de todo o mundo de olho no seu trabalho. Negocie salário, verba para reforços e objetivos, ou recuse e vire ídolo onde está.
      </SectionTitle>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="panel overflow-hidden">
          <CrestArt art="promo-tp-cartao" clubs={["benfica", "palmeiras", "man-city"]} />
          <div className="border-t-[3px] border-[var(--ink)] p-4">
            <p className="t-heading text-lg">Propostas na mesa</p>
            <p className="text-sm opacity-75">Sondagens, propostas formais e contrapropostas: você decide o próximo passo.</p>
          </div>
        </div>
        <div className="panel overflow-hidden">
          <CrestArt art="promo-tp-proposta" clubs={["barcelona"]} />
          <div className="border-t-[3px] border-[var(--ink)] p-4">
            <p className="t-heading text-lg">O aperto de mão</p>
            <p className="text-sm opacity-75">Assine com um gigante e encare a pressão de uma torcida que só aceita título.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Tactics() {
  return (
    <Section id="tatica">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_1.1fr]">
        <div className="min-w-0 text-center md:text-left">
          <span className="tag">Tática e elenco</span>
          <h2 className="t-display mt-4 text-3xl sm:text-5xl">
            O jogo é <span className="text-[var(--sun)]">seu</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/85">
            Cada jogador tem atributos, posição, moral e forma. Monte a formação, escolha funções e mexa no time no intervalo: tática coerente com o elenco ganha jogo.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-2 text-left text-sm font-bold sm:grid-cols-3">
            {["Formações", "Funções", "Postura", "Bola parada", "Treino e CT", "Mercado"].map((t) => (
              <span key={t} className="rounded-xl border-[3px] border-[var(--ink)] bg-[var(--night-2)] px-3 py-2">
                {t}
              </span>
            ))}
          </div>
        </div>
        <CrestArt art="promo-tp-elenco" clubs={["flamengo"]} className="overflow-hidden rounded-[24px] border-[3px] border-[var(--ink)] shadow-[0_6px_0_var(--ink)]" />
      </div>
    </Section>
  );
}

const ONLINE_PERKS = [
  { art: "promo-online-leilao", title: "Leilão de cartas", text: "Cartas raras a cada 2 horas." },
  { art: "promo-online-copa", title: "Copa todo dia", text: "Mata-mata de 32 técnicos reais." },
  { art: "promo-online-ranking", title: "Ranking", text: "Seu nome entre os melhores." },
];

export function Online() {
  return (
    <Section id="online" tone="pink">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="order-2 min-w-0 text-center md:order-1 md:text-left">
          <span className="tag bg-white">Prancheta Online</span>
          <h2 className="t-display mt-4 text-3xl sm:text-5xl">Cansou da CPU? Jogue contra gente.</h2>
          <p className="mt-4 text-lg leading-relaxed text-white">
            No Prancheta Online, cada rival é um técnico de verdade mexendo no time ao vivo. Monte seu clube, dispute ligas e copas e desafie os amigos. Mesma conta, grátis.
          </p>
          <a href={ONLINE_URL("landing")} className="btn btn-green btn-lg mt-6">
            Jogar o Prancheta Online <Icon name="arrow-right" className="h-5 w-5" />
          </a>
        </div>
        <img src="/art/promo-online-landing.webp" alt="" className="order-1 w-full rounded-[24px] border-[3px] border-[var(--ink)] shadow-[0_6px_0_var(--ink)] md:order-2" loading="lazy" />
      </div>
      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {ONLINE_PERKS.map((p) => (
          <li key={p.art}>
            <a href={ONLINE_URL(p.art)} className="panel flex items-center gap-3 overflow-hidden p-3 transition-transform hover:-translate-y-0.5">
              <img src={`/art/${p.art}.webp`} alt="" className="h-20 w-20 shrink-0 rounded-xl object-cover" loading="lazy" />
              <span className="min-w-0">
                <span className="t-heading block">{p.title}</span>
                <span className="block text-sm opacity-75">{p.text}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/** Faixa de escudos rolando (marquee), só CSS. */
export function CrestBand({ clubs }: { clubs: { slug: string; name: string }[] }) {
  const list = [...clubs, ...clubs];
  return (
    <div className="overflow-hidden border-y-[3px] border-[var(--ink)] bg-[var(--sun)] py-3" aria-hidden>
      <div className="crest-marquee flex w-max gap-4">
        {list.map((c, i) => (
          <Crest key={`${c.slug}-${i}`} slug={c.slug} name={c.name} className="h-14 w-14 shrink-0" />
        ))}
      </div>
    </div>
  );
}
