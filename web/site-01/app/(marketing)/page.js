import SiteHeader from "@/components/organisms/marketing/SiteHeader";
import HeroSection from "@/components/organisms/marketing/HeroSection";
import AboutSection from "@/components/organisms/marketing/AboutSection";
import ServicesSection from "@/components/organisms/marketing/ServicesSection";
import FeaturedSection from "@/components/organisms/marketing/FeaturedSection";
import Footer from "@/components/organisms/marketing/Footer";
import { services, servicesNote, servicesCta } from "@/content";

export default function Home() {
  return (
    <div className="bg-obsidian text-white min-h-screen">
      <SiteHeader />

      <main className="space-y-24">
        <HeroSection />
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
