import ServiceCard from "@/components/molecules/ServiceCard";
import EyebrowLabel from "@/components/atoms/EyebrowLabel";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import { typeRole } from "@/content/typography";
import { servicesCopy } from "@/content/services";

export default function ServicesSection({ services, note, cta }) {
  return (
    <section className="bg-obsidian py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <EyebrowLabel className="mb-8">{servicesCopy.eyebrow}</EyebrowLabel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              iconVariant={service.iconVariant}
              title={service.title}
              description={service.description}
              items={service.items}
            />
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-12">
          <PrimaryButton className="flex items-center gap-3 group">
            <span>{cta.label}</span>
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              send
            </span>
          </PrimaryButton>
          <p className={typeRole.disclaimer}>
            {note}
          </p>
        </div>
      </div>
    </section>
  );
}

