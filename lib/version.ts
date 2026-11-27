/** Versão embutida no bundle no momento do build (ver next.config.ts). */
export const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION ?? "dev";

/**
 * Notas da versão atual. Atualize a cada deploy: o texto aparece no aviso
 * de atualização obrigatória que os jogadores veem (as 4 primeiras).
 */
export const RELEASE_NOTES: string[] = [
  "Aviso de atualização: quando sair versão nova, o jogo avisa e atualiza com um toque",
  "Tela de login com a sala do técnico e o escudo do seu clube na parede",
  "Tela inicial com mais de 370 clubes reais e escudos oficiais",
  "Uma conta, dois jogos: vá para o Prancheta Online com um toque",
];

export type VersionPayload = {
  version: string;
  notes: string[];
};
