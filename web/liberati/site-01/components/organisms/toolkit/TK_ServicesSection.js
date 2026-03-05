import SectionLabel from "@/components/atoms/SectionLabel";
import ServicesSection from "@/components/organisms/marketing/ServicesSection";
import { services, servicesNote, servicesCta } from "@/content/services";
import { typeServices } from "@/content/typography";

export default function TK_ServicesSection() {
  return (
    <section
      className="py-20 border-b border-white/5"
      data-purpose="services-section"
    >
      <div className="space-y-6">
        <SectionLabel>3.3 Services – Cards &amp; CTA</SectionLabel>

        <div>
          <ServicesSection
            services={services}
            note={servicesNote}
            cta={servicesCta}
          />
          <p className={`mt-4 ${typeServices.meta}`}>
            ServicesSection &mdash; components/organisms/marketing/ServicesSection
          </p>
        </div>
      </div>
    </section>
  );
}

