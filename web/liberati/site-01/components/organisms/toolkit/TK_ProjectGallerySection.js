import SectionLabel from "@/components/atoms/SectionLabel";
import GalleryCategoryFilter from "@/components/molecules/GalleryCategoryFilter";
import ProjectsSection from "@/components/organisms/marketing/ProjectsSection";
import { projects } from "@/content";
import { typeServices } from "@/content/typography";

const sampleCategories = [
  { key: "brands", label: "BRANDS", href: "#" },
  { key: "series", label: "SERIES & FILM", href: "#" },
  { key: "interactive", label: "INTERACTIVE", href: "#" },
  { key: "all", label: "ALL", href: "#" },
];

export default function TK_ProjectGallerySection() {
  return (
    <section className="py-20" data-purpose="project-gallery-section">
      <div className="space-y-6">
        <SectionLabel>3.5 Project Gallery</SectionLabel>
        <p className={`${typeServices.meta} mb-4`}>
          GalleryCategoryFilter + ProjectsSection — components/molecules/GalleryCategoryFilter,
          components/organisms/marketing/ProjectsSection
        </p>
        <div className="flex flex-col gap-12">
          <GalleryCategoryFilter items={sampleCategories} activeKey="brands" />
          <ProjectsSection projects={projects} />
        </div>
      </div>
    </section>
  );
}
