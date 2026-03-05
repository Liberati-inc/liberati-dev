"use client";

import { useState, useMemo } from "react";
import ProjectsGalleryHeader from "@/components/molecules/ProjectsGalleryHeader";
import GalleryCategoryFilter from "@/components/molecules/GalleryCategoryFilter";
import ProjectCard from "@/components/molecules/ProjectCard";
import { getProjectsByClass } from "@/content/projects";
import { gallerySection, galleryDefaultKey } from "@/content/projectsPage";

/**
 * Projects gallery section: header (title + description), optional category filter, grid of ProjectCards.
 * When filterItems + galleryCategoryClasses + gallerySections are passed, the filter is interactive and
 * filters projects by category. Otherwise uses projects + sectionCopy as before.
 */
export default function ProjectGallery({
  projects: projectsProp,
  sectionCopy: sectionCopyProp,
  filterItems,
  filterActiveKey: initialFilterKey,
  galleryCategoryClasses,
  gallerySections,
  className = "",
}) {
  const [activeKey, setActiveKey] = useState(initialFilterKey ?? galleryDefaultKey);

  const { projects, sectionCopy } = useMemo(() => {
    if (galleryCategoryClasses && gallerySections) {
      const classes = galleryCategoryClasses[activeKey];
      const filtered = getProjectsByClass(projectsProp ?? [], classes);
      const copy = gallerySections[activeKey] ?? gallerySections.brands;
      return { projects: filtered, sectionCopy: copy };
    }
    return {
      projects: projectsProp ?? [],
      sectionCopy: sectionCopyProp ?? gallerySection,
    };
  }, [
    activeKey,
    projectsProp,
    sectionCopyProp,
    galleryCategoryClasses,
    gallerySections,
  ]);

  const copy = sectionCopy ?? gallerySection;

  return (
    <section className={className}>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <ProjectsGalleryHeader title={copy.title} description={copy.description} />
        {filterItems?.length > 0 && (
          <GalleryCategoryFilter
            items={filterItems}
            activeKey={activeKey}
            onSelect={galleryCategoryClasses ? setActiveKey : undefined}
          />
        )}
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
