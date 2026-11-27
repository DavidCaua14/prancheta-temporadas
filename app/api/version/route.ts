import { APP_VERSION, RELEASE_NOTES, type VersionPayload } from "@/lib/version";

/**
 * Retorna a versão publicada no servidor. É pré-renderizada no build:
 * custo zero de banco/CPU, pode ser servida por CDN (com no-store no header,
 * ver next.config.ts) e muda sozinha a cada novo deploy.
 */
export async function GET() {
  const payload: VersionPayload = { version: APP_VERSION, notes: RELEASE_NOTES };
  return Response.json(payload);
}
