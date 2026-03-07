import { cookies } from "next/headers";
import SiteHeader from "@/components/sections/SiteHeader";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import Footer from "@/components/sections/Footer";
import SetLastLandingHeroCookie from "./SetLastLandingHeroCookie";
import SetLastLandingHeroImageCookie from "./SetLastLandingHeroImageCookie";
import { services, servicesNote, servicesCta } from "@/content";
import { heroRandomize } from "@/content/home";
import { getHeroVimeoIdExcluding } from "@/content/videos";
import { getHeroFallbackImageExcluding } from "@/content/home";

const LAST_LANDING_HERO_COOKIE = "last_landing_hero";
const LAST_LANDING_HERO_IMAGE_COOKIE = "last_landing_hero_image";

export default async function Home() {
  const cookieStore = await cookies();
  let heroVimeoId = null;
  let heroFallbackImage = null;

  if (heroRandomize) {
    const lastId = cookieStore.get(LAST_LANDING_HERO_COOKIE)?.value;
    heroVimeoId = getHeroVimeoIdExcluding(lastId);
  }

  const lastImageRaw = cookieStore.get(LAST_LANDING_HERO_IMAGE_COOKIE)?.value;
  const lastImage = lastImageRaw ? decodeURIComponent(lastImageRaw) : undefined;
  heroFallbackImage = getHeroFallbackImageExcluding(lastImage);

  return (
    <div className="bg-obsidian text-white min-h-screen">
      {heroRandomize && heroVimeoId && (
        <SetLastLandingHeroCookie vimeoId={heroVimeoId} />
      )}
      {heroFallbackImage && (
        <SetLastLandingHeroImageCookie imagePath={heroFallbackImage} />
      )}
      <SiteHeader slideOnScroll />

      <main id="top" className="space-y-0">
        <div className="h-screen-safe w-full">
          <HeroSection
            vimeoId={heroVimeoId ?? undefined}
            stillImage={heroFallbackImage}
            overlayOpacity={0.6}
          />
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
