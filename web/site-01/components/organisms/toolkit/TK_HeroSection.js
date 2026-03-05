import SectionLabel from "@/components/atoms/SectionLabel";
import HeroSection from "@/components/organisms/marketing/HeroSection";
import { typeServices } from "@/content/typography";

export default function TK_HeroSection() {
  return (
    <section
      className="py-20 border-b border-white/5"
      data-purpose="hero-section"
    >
      <div className="space-y-6">
        <SectionLabel>3.1 Hero – Cinematic</SectionLabel>

        <div>
          <HeroSection />
          <p className={`mt-4 ${typeServices.meta}`}>
            HeroSection &mdash; components/organisms/marketing/HeroSection
          </p>
        </div>
      </div>
    </section>
  );
}

