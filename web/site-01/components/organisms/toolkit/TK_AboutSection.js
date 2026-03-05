import SectionLabel from "@/components/atoms/SectionLabel";
import AboutSection from "@/components/organisms/marketing/AboutSection";
import { typeServices } from "@/content/typography";

export default function TK_AboutSection() {
  return (
    <section
      className="py-20 border-b border-white/5"
      data-purpose="about-section"
    >
      <div className="space-y-6">
        <SectionLabel>3.2 About – What We Do</SectionLabel>

        <div>
          <AboutSection />
          <p className={`mt-4 ${typeServices.meta}`}>
            AboutSection &mdash; components/organisms/marketing/AboutSection
          </p>
        </div>
      </div>
    </section>
  );
}

