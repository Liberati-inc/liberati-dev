import { cookies } from "next/headers";
import SiteHeader from "@/components/sections/SiteHeader";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import Footer from "@/components/sections/Footer";
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
      <SiteHeader slideOnScroll />

      <main id="top" className="space-y-0">
        <div className="h-screen-safe w-full">
          <HeroSection vimeoId={heroVimeoId ?? undefined} overlayOpacity={0.6} />
        </div>
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
