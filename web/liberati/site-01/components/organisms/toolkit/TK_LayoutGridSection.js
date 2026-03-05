import SectionLabel from "@/components/atoms/SectionLabel";
import ServiceCard from "@/components/molecules/ServiceCard";
import ProjectCard from "@/components/molecules/ProjectCard";
import { services, projects } from "@/content";
import { typeServices } from "@/content/typography";

export default function TK_LayoutGridSection() {
  return (
    <section
      className="py-20 border-b border-white/5"
      data-purpose="layout-grid-section"
    >
      {/* 2.0 Service Cards */}
      <div className="space-y-6 mb-16">
        <SectionLabel>2.0 Service Cards</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </div>

      {/* 2.1 Project Grid */}
      <div className="space-y-6">
        <SectionLabel>2.1 Project Grid</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              meta={project.meta}
            />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p className={typeServices.meta}>
          ServiceCard &mdash; components/molecules/ServiceCard / ProjectCard
          &mdash; components/molecules/ProjectCard
        </p>
      </div>
    </section>
  );
}

