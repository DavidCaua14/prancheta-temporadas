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

## Atualização obrigatória (igual ao online)

Cada deploy gera uma versão nova (`next.config.ts` → `NEXT_PUBLIC_APP_VERSION`). O jogo consulta `/api/version`
a cada minuto e quando a aba volta a ficar visível; se mudou, `components/system/UpdateWatcher.tsx` mostra o aviso
"Apito! Tem atualização" e o botão "Atualizar agora" recarrega. **A cada deploy, atualize as novidades em
`lib/version.ts`** (as 4 primeiras aparecem no aviso).

## Escudos

Originais em `data-src/crests/` (SVG/WebP). Para gerar os arquivos do site:

```bash
node scripts/build-crests.mjs
```

Os nomes e escudos pertencem aos respectivos clubes.

## Variáveis

- `NEXT_PUBLIC_ONLINE_URL` — endereço do Prancheta Online (botões "Jogar online"). Padrão: `https://prancheta-two.vercel.app`.
