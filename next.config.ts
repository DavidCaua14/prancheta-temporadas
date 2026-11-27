import type { NextConfig } from "next";
import { execSync } from "node:child_process";

/**
 * Versão do jogo (igual ao Prancheta Online).
 * Cada build (deploy) gera uma versão única. O cliente guarda a versão com a
 * qual foi carregado e compara periodicamente com /api/version. Se mudar,
 * o jogador é obrigado a recarregar (ver components/system/UpdateWatcher.tsx).
 */
function resolveAppVersion(): string {
  const fromEnv = process.env.APP_VERSION ?? process.env.VERCEL_GIT_COMMIT_SHA ?? process.env.GIT_SHA;
  if (fromEnv) return fromEnv.slice(0, 12);
  try {
    return execSync("git rev-parse --short=12 HEAD", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
  } catch {
    return `build-${Date.now()}`;
  }
}

const APP_VERSION = resolveAppVersion();

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  // Fora da Vercel, protege navegações contra "version skew" entre deploys.
  // Na Vercel ela gera um ID próprio por deploy.
  deploymentId: process.env.VERCEL ? undefined : APP_VERSION,
  env: {
    NEXT_PUBLIC_APP_VERSION: APP_VERSION,
  },
  async headers() {
    return [
      {
        source: "/api/version",
        headers: [{ key: "Cache-Control", value: "no-store, max-age=0" }],
      },
    ];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
