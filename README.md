# Prancheta Temporadas

Modo carreira de técnico do Prancheta, com clubes reais e escudos oficiais. Mesma identidade visual do
Prancheta Online (cartoon anos 90: Bungee + Baloo 2, contorno grosso, sombra sólida).

Especificação completa: `docs/PRANCHETA_TEMPORADAS.md` no repositório do Prancheta Online.

## Rodar

```bash
npm install
npm run dev
```

## Estrutura

- `app/page.tsx` — tela inicial (mesma estrutura da do online: cabeçalho, destaque, faixa de números, seções, dúvidas, chamada final, rodapé)
- `app/entrar/` — login e cadastro (por enquanto só o visual: o botão do Google mostra um aviso de "em breve")
- `app/carreira/` — início da carreira (próxima etapa)
- `components/landing/` — seções da tela inicial; `LeagueExplorer` é a vitrine de clubes por liga
- `components/Crest.tsx` — escudo oficial (com plaquinha clara) e `CrestArt`, que encaixa escudos reais nos escudos em branco das artes
- `lib/clubs.ts` — ligas, clubes exibidos, posições dos escudos nas artes e o link do online
- `public/art/` — artes de divulgação e identidade; `public/crests/` — escudos otimizados (WebP 128 e 64 px)

## Escudos

Originais em `data-src/crests/` (SVG/WebP). Para gerar os arquivos do site:

```bash
node scripts/build-crests.mjs
```

Os nomes e escudos pertencem aos respectivos clubes.

## Variáveis

- `NEXT_PUBLIC_ONLINE_URL` — endereço do Prancheta Online (botões "Jogar online"). Padrão: `https://prancheta-two.vercel.app`.
