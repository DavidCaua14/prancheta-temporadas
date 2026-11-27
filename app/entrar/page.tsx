import type { Metadata } from "next";
import { LoginScreen } from "@/components/auth/LoginScreen";
import { Mascot, Shell } from "@/components/game/Shell";
import { ONLINE_URL } from "@/lib/clubs";

export const metadata: Metadata = {
  title: "Entrar — Prancheta Temporadas",
  description: "Entre ou crie sua conta para começar sua carreira de técnico no Prancheta Temporadas.",
};

export default function EntrarPage() {
  return (
    <Shell
      topRight={
        <a href={ONLINE_URL("login")} className="btn btn-sm shrink-0 !bg-[var(--hot)] !text-white max-[379px]:hidden">
          Jogar online
        </a>
      }
    >
      <LoginScreen mascot={<Mascot className="h-full w-full" />} />
    </Shell>
  );
}
