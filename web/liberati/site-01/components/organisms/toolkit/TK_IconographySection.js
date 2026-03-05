import SectionLabel from "@/components/atoms/SectionLabel";
import SvgIcon from "@/components/atoms/SvgIcon";
import ServiceIcon from "@/components/molecules/ServiceIcon";
import SvgButton from "@/components/atoms/SvgButton";
import { typeServices } from "@/content/typography";

export default function TK_IconographySection() {
  return (
    <section
      className="py-20 border-b border-white/5"
      data-purpose="iconography-section"
    >
      <div className="space-y-8">
        <SectionLabel>1.3 Iconography</SectionLabel>

        {/* Service icons (direction / motion / interactive) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <ServiceIcon
            icon={<SvgIcon variant="direction" />}
            label="Direction"
          />
          <ServiceIcon
            icon={<SvgIcon variant="motion" />}
            label="Motion"
          />
          <ServiceIcon
            icon={<SvgIcon variant="interactive" />}
            label="Interactive"
          />
        </div>
        <p className={typeServices.meta}>
          ServiceIcon &mdash; components/molecules/ServiceIcon / SvgIcon &mdash;
          components/atoms/SvgIcon
        </p>

      </div>
    </section>
  );
}

