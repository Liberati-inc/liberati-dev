import SectionLabel from "@/components/atoms/SectionLabel";
import GalleryCategoryFilter from "@/components/molecules/GalleryCategoryFilter";
import { typeServices } from "@/content/typography";

const sampleCategories = [
  { key: "brands", label: "BRANDS", href: "#" },
  { key: "series", label: "SERIES & FILM", href: "#" },
  { key: "interactive", label: "INTERACTIVE", href: "#" },
  { key: "all", label: "ALL", href: "#" },
];

export default function TK_GalleryCategoryFilterSection() {
  return (
    <section className="py-20 border-b border-white/5" data-purpose="gallery-category-filter-section">
      <div className="space-y-6">
        <SectionLabel>2.2 Gallery Category Filter</SectionLabel>
        <p className={`${typeServices.meta} mb-4`}>
          GalleryCategoryFilter — components/molecules/GalleryCategoryFilter
        </p>
        <GalleryCategoryFilter items={sampleCategories} activeKey="brands" />
      </div>
    </section>
  );
}
