import type { ProjectClass } from "./types";

/**
 * Featured hero on projects page.
 * - projectSlug: specific project to show (title/subtext from that project).
 * - randomize: if true, a random project from the list is shown on each reload.
 */
export const projectsHero = {
  projectSlug: "mara",
  randomize: true,
};

/** Filter tab categories for the gallery (key used for active state / routing). */
export const galleryCategories = [
  { key: "all", label: "ALL PROJECTS", href: "#all" },
  { key: "brands", label: "BRANDS", href: "#brands" },
  { key: "series", label: "SERIES & FILM", href: "#series" },
  { key: "interactive", label: "INTERACTIVE", href: "#interactive" },
];

/** Default active gallery category key on the projects page. */
export const galleryDefaultKey = "all";

/**
 * Which project classes (content/projects) belong in each gallery category.
 * Keys must match galleryCategories[].key. Use null for "all" (no filter).
 * Resolved via getProjectsForGalleryCategory() in content/projects.
 */
export const galleryCategoryClasses: Record<string, ProjectClass[] | null> = {
  brands: ["brand"],
  series: ["series", "film", "documentary"],
  interactive: ["interactive"],
  all: null,
};

/** Section title + description per category. Key must match galleryCategories[].key. */
export const gallerySections = {
  all: {
    title: "ALL PROJECTS",
    description:
    "We craft various works across 2D/3D design, animation, production, and VFX.",
    // "The full range of motion, film, and interactive work.",
  },
  brands: {
    title: "BRANDS",
    description:
      "A curated selection of brand specific works, exploring the boundaries of visual narratives.",
  },
  series: {
    title: "SERIES & FILM",
    description:
      "Long-form and episodic work: documentaries, series, and film projects.",
  },
  interactive: {
    title: "INTERACTIVE",
    description:
      "Digital experiences, installations, and interactive applications.",
  },

};

/**
 * @deprecated Use gallerySections.brands (or gallerySections[activeKey]). Kept for backward compat.
 */
export const gallerySection = gallerySections.brands;
