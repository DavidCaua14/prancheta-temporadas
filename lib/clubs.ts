/**
 * Clubes e ligas exibidos no Prancheta Temporadas. Escudos oficiais em
 * public/crests/<slug>-128.webp e -64.webp (gerados por scripts/build-crests.mjs
 * a partir de data-src/crests). Os nomes e escudos pertencem aos clubes.
 */

export type Club = { slug: string; name: string };
export type League = { id: string; name: string; country: string; flag: string; clubs: Club[] };

const c = (slug: string, name: string): Club => ({ slug, name });

export const LEAGUES: League[] = [
  {
    id: "br",
    name: "Brasileirão",
    country: "Brasil",
    flag: "🇧🇷",
    clubs: [
      c("flamengo", "Flamengo"),
      c("palmeiras", "Palmeiras"),
      c("corinthians", "Corinthians"),
      c("sao-paulo", "São Paulo"),
      c("santos", "Santos"),
      c("gremio", "Grêmio"),
      c("internacional", "Internacional"),
      c("fluminense", "Fluminense"),
      c("vasco", "Vasco"),
      c("botafogo", "Botafogo"),
      c("cruzeiro", "Cruzeiro"),
      c("atletico-mg", "Atlético-MG"),
    ],
  },
  {
    id: "es",
    name: "LaLiga",
    country: "Espanha",
    flag: "🇪🇸",
    clubs: [
      c("real-madrid", "Real Madrid"),
      c("barcelona", "Barcelona"),
      c("atletico-madrid", "Atlético de Madrid"),
      c("athletic", "Athletic Club"),
      c("real-sociedad", "Real Sociedad"),
      c("sevilla", "Sevilla"),
      c("betis", "Real Betis"),
      c("villarreal", "Villarreal"),
      c("valencia", "Valencia"),
      c("celta", "Celta"),
      c("osasuna", "Osasuna"),
      c("getafe", "Getafe"),
    ],
  },
  {
    id: "en",
    name: "Premier League",
    country: "Inglaterra",
    flag: "🏴",
    clubs: [
      c("man-city", "Manchester City"),
      c("liverpool", "Liverpool"),
      c("arsenal", "Arsenal"),
      c("chelsea", "Chelsea"),
      c("man-united", "Manchester United"),
      c("tottenham", "Tottenham"),
      c("newcastle", "Newcastle"),
      c("aston-villa", "Aston Villa"),
      c("brighton", "Brighton"),
      c("west-ham", "West Ham"),
      c("crystal-palace", "Crystal Palace"),
      c("wolves", "Wolves"),
    ],
  },
  {
    id: "it",
    name: "Serie A",
    country: "Itália",
    flag: "🇮🇹",
    clubs: [
      c("juventus", "Juventus"),
      c("milan", "Milan"),
      c("inter", "Inter"),
      c("napoli", "Napoli"),
      c("roma", "Roma"),
      c("lazio", "Lazio"),
      c("atalanta", "Atalanta"),
      c("fiorentina", "Fiorentina"),
      c("bologna", "Bologna"),
      c("torino", "Torino"),
      c("como", "Como"),
      c("udinese", "Udinese"),
    ],
  },
  {
    id: "de",
    name: "Bundesliga",
    country: "Alemanha",
    flag: "🇩🇪",
    clubs: [
      c("bayern", "Bayern de Munique"),
      c("dortmund", "Borussia Dortmund"),
      c("leverkusen", "Bayer Leverkusen"),
      c("leipzig", "RB Leipzig"),
      c("frankfurt", "Eintracht Frankfurt"),
      c("stuttgart", "Stuttgart"),
      c("gladbach", "Borussia M'gladbach"),
      c("freiburg", "Freiburg"),
      c("werder", "Werder Bremen"),
      c("schalke", "Schalke 04"),
      c("hamburgo", "Hamburgo"),
      c("union-berlin", "Union Berlin"),
    ],
  },
  {
    id: "fr",
    name: "Ligue 1",
    country: "França",
    flag: "🇫🇷",
    clubs: [
      c("psg", "Paris Saint-Germain"),
      c("marseille", "Olympique de Marseille"),
      c("lyon", "Olympique Lyonnais"),
      c("monaco", "Monaco"),
      c("lille", "Lille"),
      c("nice", "Nice"),
      c("lens", "Lens"),
      c("rennes", "Rennes"),
      c("strasbourg", "Strasbourg"),
      c("toulouse", "Toulouse"),
      c("auxerre", "Auxerre"),
      c("brest", "Brest"),
    ],
  },
  {
    id: "pt",
    name: "Liga Portugal",
    country: "Portugal",
    flag: "🇵🇹",
    clubs: [
      c("benfica", "Benfica"),
      c("porto", "Porto"),
      c("sporting", "Sporting"),
      c("braga", "Braga"),
      c("vitoria-guimaraes", "Vitória de Guimarães"),
      c("famalicao", "Famalicão"),
      c("gil-vicente", "Gil Vicente"),
      c("rio-ave", "Rio Ave"),
      c("estoril", "Estoril"),
      c("arouca", "Arouca"),
      c("moreirense", "Moreirense"),
      c("santa-clara", "Santa Clara"),
    ],
  },
  {
    id: "sa",
    name: "Gigantes da América",
    country: "América do Sul",
    flag: "🌎",
    clubs: [
      c("boca-juniors", "Boca Juniors"),
      c("river-plate", "River Plate"),
      c("racing", "Racing"),
      c("independiente", "Independiente"),
      c("san-lorenzo", "San Lorenzo"),
      c("penarol", "Peñarol"),
      c("nacional-uru", "Nacional"),
      c("colo-colo", "Colo-Colo"),
      c("u-chile", "Universidad de Chile"),
      c("olimpia", "Olimpia"),
      c("ldu", "LDU Quito"),
      c("atl-nacional", "Atlético Nacional"),
    ],
  },
  {
    id: "acesso",
    name: "Comece por aqui",
    country: "Brasil · Séries C e D",
    flag: "⭐",
    clubs: [
      c("paysandu", "Paysandu"),
      c("santa-cruz", "Santa Cruz"),
      c("figueirense", "Figueirense"),
      c("portuguesa", "Portuguesa"),
      c("guarani", "Guarani"),
      c("joinville", "Joinville"),
      c("brusque", "Brusque"),
      c("itabaiana", "Itabaiana"),
      c("gama", "Gama"),
      c("treze", "Treze"),
      c("maringa", "Maringá"),
      c("volta-redonda", "Volta Redonda"),
    ],
  },
];

/** Os mais atrativos, para o destaque da página. */
export const STARS: Club[] = [
  c("real-madrid", "Real Madrid"),
  c("flamengo", "Flamengo"),
  c("barcelona", "Barcelona"),
  c("man-city", "Manchester City"),
  c("palmeiras", "Palmeiras"),
  c("liverpool", "Liverpool"),
  c("bayern", "Bayern de Munique"),
  c("psg", "Paris Saint-Germain"),
  c("boca-juniors", "Boca Juniors"),
  c("juventus", "Juventus"),
  c("corinthians", "Corinthians"),
  c("milan", "Milan"),
];

export const crestSrc = (slug: string, size: 64 | 128 = 128) => `/crests/${slug}-${size}.webp`;

/**
 * Onde ficam os escudos em branco das artes de divulgação (centro x/y e
 * largura em % da imagem), medidos nas próprias imagens.
 */
export const CREST_SLOTS: Record<string, { x: number; y: number; w: number }[]> = {
  "promo-tp-hero": [
    { x: 12.3, y: 67.2, w: 3.6 },
    { x: 50, y: 53.6, w: 6 },
    { x: 82.2, y: 36.8, w: 8.6 },
  ],
  "promo-tp-landing": [
    { x: 48.3, y: 24.1, w: 4.8 },
    { x: 59.4, y: 23.9, w: 4.8 },
    { x: 70.2, y: 23.9, w: 4.8 },
  ],
  "promo-tp-cartao": [
    { x: 23, y: 22.8, w: 8 },
    { x: 49.8, y: 15.5, w: 8.4 },
    { x: 76.8, y: 23, w: 8.4 },
  ],
  "promo-tp-proposta": [{ x: 49.8, y: 27, w: 22 }],
  "promo-tp-elenco": [{ x: 50, y: 39.8, w: 9 }],
};

/** Endereço do Prancheta Online (defina NEXT_PUBLIC_ONLINE_URL no deploy). */
export const ONLINE_URL = (slot: string) => `${process.env.NEXT_PUBLIC_ONLINE_URL ?? "https://prancheta.vercel.app"}/?ref=tp&slot=${slot}`;
