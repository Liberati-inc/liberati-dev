import ProjectsGalleryHeader from "@/components/molecules/ProjectsGalleryHeader";
import ProjectCard from "@/components/molecules/ProjectCard";
import { gallerySection } from "@/content/projectsPage";

/**
 * Projects gallery section: header (title + description from content) + grid of ProjectCards.
 * Use with GalleryCategoryFilter above for full gallery + filter UX.
 */
export default function ProjectGallery({ projects, sectionCopy, className = "" }) {
  const copy = sectionCopy ?? gallerySection;

  return (
    <section className={className}>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <ProjectsGalleryHeader title={copy.title} description={copy.description} />
      </div>
      {projects?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              meta={project.meta}
              stillImage={project.stillImage}
              vimeoId={project.vimeoId}
            />
          ))}
        </div>
      )}
    </section>
  );
}
