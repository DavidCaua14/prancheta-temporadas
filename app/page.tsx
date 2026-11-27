import { Faq, FinalCta, SiteFooter } from "@/components/landing/Closing";
import { SiteHeader } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Career, Clubs, CrestBand, Offers, Online, Perks, Tactics } from "@/components/landing/Sections";
import { LEAGUES } from "@/lib/clubs";

export default function Home() {
  const band = LEAGUES.flatMap((l) => l.clubs.slice(0, 4));
  return (
    <>
      <SiteHeader />
      <main className="flex-1 overflow-x-clip">
        <Hero />
        <CrestBand clubs={band} />
        <Perks />
        <Clubs />
        <Career />
        <Offers />
        <Tactics />
        <Online />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
