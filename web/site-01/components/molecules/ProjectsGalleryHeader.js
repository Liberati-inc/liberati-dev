import { type, typeServices } from "@/content/typography";

/**
 * Section header for the projects gallery (title + description).
 * Copy comes from content/projectsPage.ts gallerySection.
 */
export default function ProjectsGalleryHeader({ title, description }) {
  return (
    <div>
      <h2 className={`${type.scale.h2} ${type.mod.uppercase} ${type.mod.white} tracking-tighter mb-2`}>
        {title}
      </h2>
      {description && <p className={`${typeServices.body} max-w-md`}>{description}</p>}
    </div>
  );
}
