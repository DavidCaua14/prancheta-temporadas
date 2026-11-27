import type { Metadata, Viewport } from "next";
import { Baloo_2, Bungee } from "next/font/google";
import { UpdateWatcher } from "@/components/system/UpdateWatcher";
import "./globals.css";

const display = Bungee({ variable: "--font-display-face", weight: "400", subsets: ["latin", "latin-ext"] });
const body = Baloo_2({ variable: "--font-body-face", subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Prancheta Temporadas — modo carreira de técnico com clubes reais",
  description:
    "Seja técnico de clubes reais do Brasil e do mundo: comece numa divisão de acesso, ganhe reputação e receba propostas dos gigantes. Grátis, no navegador.",
  applicationName: "Prancheta Temporadas",
};

export const viewport: Viewport = { themeColor: "#1d1650", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col overflow-x-hidden">
        {children}
        <UpdateWatcher />
      </body>
    </html>
  );
}
