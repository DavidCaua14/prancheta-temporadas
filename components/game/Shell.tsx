/* eslint-disable @next/next/no-img-element -- arte já otimizada em WebP */
import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "@/components/ui/Logo";

/** Moldura das telas do jogo (login, carreira): estádio ao fundo e logo no topo, igual ao online. */
export function Shell({ children, topRight }: { children: ReactNode; topRight?: ReactNode }) {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-hidden">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <img src="/art/bg-jogo.webp" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(29,22,80,0.25)]" />
      </div>
      <header className="relative z-20 flex h-16 items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" aria-label="Voltar para o início" className="min-w-0">
          <Logo />
        </Link>
        {topRight}
      </header>
      <main className="relative z-10 flex flex-1 flex-col px-4 pb-10 sm:px-6">{children}</main>
    </div>
  );
}

export function Mascot({ className = "" }: { className?: string }) {
  return <img src="/art/mascote.webp" alt="" className={`object-contain object-bottom ${className}`} />;
}
