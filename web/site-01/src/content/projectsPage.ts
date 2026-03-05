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
  { key: "brands", label: "BRANDS", href: "#brands" },
  { key: "series", label: "SERIES & FILM", href: "#series" },
  { key: "interactive", label: "INTERACTIVE", href: "#interactive" },
  { key: "all", label: "ALL", href: "#all" },
];

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
  brands: {
    title: "Brands In Motion",
    description:
      "A curated selection of cinematic storytelling, exploring the boundaries of visual narrative.",
  },
  series: {
    title: "SERIES & FILM",
    description:
      "Long-form and episodic work: documentaries, series, and film projects.",
  },
  interactive: {
    title: "INTERACTIVE",
    description:
      "Digital experiences, installations, and interactive storytelling.",
  },
  all: {
    title: "ALL WORK",
    description:
      "The full range of motion, film, and interactive work.",
  },
};

/**
 * @deprecated Use gallerySections.brands (or gallerySections[activeKey]). Kept for backward compat.
 */
export const gallerySection = gallerySections.brands;
