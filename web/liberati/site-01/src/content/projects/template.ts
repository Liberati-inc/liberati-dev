import type { Project, ProjectBlock, ProjectClass } from "../types";

/**
 * Project template: use this shape in each project file.
 *
 * Card/list: slug, title, meta, vimeoId (preview), stillImage (fallback).
 * Detail page:
 *   - class, previewVimeoId (hero), heroPlayMode ("loop" | "manual")
 *   - brief: context / strategy / solution (title + copy, editable)
 *   - blocks: modular sections (vimeo, copy, still, gallery)
 *
 * Block types (map to molecules/organisms by type + layout):
 * - preview-vimeo: hero video on detail page
 * - copy: header + optional subtext (layout: full | split | stack)
 * - vimeo: video + optional header/subtext
 * - still: image + optional header/subtext
 * - gallery: sectionTitle + images[] (imageUrl, caption)
 *
 * Add blocks in order; each can set layout for organism rendering.
 */
export type { Project, ProjectBlock, ProjectClass };

/** Type-safe project definition. Use in each project file. */
export function createProject(project: Project): Project {
  return project;
}
