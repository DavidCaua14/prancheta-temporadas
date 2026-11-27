// Escudos: data-src/crests/**/*.svg|webp|png → public/crests/<slug>-128.webp e -64.webp
// Uso: node scripts/build-crests.mjs
import { readdirSync, mkdirSync, statSync } from "node:fs";
import { join, parse } from "node:path";
import sharp from "sharp";

const SRC = "data-src/crests";
const OUT = "public/crests";
mkdirSync(OUT, { recursive: true });
const files = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(svg|webp|png)$/i.test(f)) files.push(p);
  }
})(SRC);
const seen = new Set();
const small = [];
for (const input of files) {
  const { name } = parse(input);
  if (seen.has(name)) continue; // mesmo clube em duas pastas: fica o primeiro
  seen.add(name);
  // SVG: densidade para sair com ~512 px (alguns SVGs têm tamanho nominal enorme)
  let density = 72;
  if (input.endsWith(".svg")) {
    const m = await sharp(input, { limitInputPixels: false }).metadata();
    density = Math.max(1, Math.min(300, (72 * 512) / Math.max(m.width ?? 512, m.height ?? 512)));
  }
  const trimmed = await sharp(input, { density, limitInputPixels: false }).trim().png().toBuffer();
  const meta = await sharp(trimmed).metadata();
  if (!input.endsWith(".svg") && Math.max(meta.width ?? 0, meta.height ?? 0) < 160) small.push(`${name} (${meta.width}px)`);
  for (const size of [128, 64]) {
    const inner = Math.round(size * 0.92);
    const pad = (size - inner) >> 1;
    await sharp(trimmed)
      .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .extend({ top: pad, bottom: size - inner - pad, left: pad, right: size - inner - pad, background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 88, alphaQuality: 100 })
      .toFile(join(OUT, `${name}-${size}.webp`));
  }
}
console.log(`${seen.size} escudos gerados.`, small.length ? `Baixa resolução: ${small.join(", ")}` : "");
