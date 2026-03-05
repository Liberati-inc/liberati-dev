import { cookies } from "next/headers";
import SiteHeader from "@/components/organisms/marketing/SiteHeader";
import HeroSection from "@/components/organisms/marketing/HeroSection";
import AboutSection from "@/components/organisms/marketing/AboutSection";
import ServicesSection from "@/components/organisms/marketing/ServicesSection";
import FeaturedSection from "@/components/organisms/marketing/FeaturedSection";
import Footer from "@/components/organisms/marketing/Footer";
import SetLastLandingHeroCookie from "./SetLastLandingHeroCookie";
import { services, servicesNote, servicesCta } from "@/content";
import { heroRandomize } from "@/content/home";
import { getHeroVimeoIdExcluding } from "@/content/videos";

const LAST_LANDING_HERO_COOKIE = "last_landing_hero";

export default async function Home() {
  let heroVimeoId = null;
  if (heroRandomize) {
    const cookieStore = await cookies();
    const lastId = cookieStore.get(LAST_LANDING_HERO_COOKIE)?.value;
    heroVimeoId = getHeroVimeoIdExcluding(lastId);
  }

  return (
    <div className="bg-obsidian text-white min-h-screen">
      {heroRandomize && heroVimeoId && (
        <SetLastLandingHeroCookie vimeoId={heroVimeoId} />
      )}
      <SiteHeader />

      <main className="space-y-24">
        <HeroSection vimeoId={heroVimeoId ?? undefined} />
        <AboutSection />
        <ServicesSection
          services={services}
          note={servicesNote}
          cta={servicesCta}
        />
        <FeaturedSection />
      </main>

      <Footer />
    </div>
  );
}
