import type { Project, ProjectBlock, ProjectClass } from "../types";

/**
 * Project template: use this shape in each project file.
 *
 * Card/list: slug, title, meta, vimeoId (preview), stillImage (fallback).
 * Detail brief: description (below title + meta).
 * Detail page:
 *   - class, previewVimeoId (hero), detailPlayMode ("loop" | "manual")
 *   - detailHeroVariant: optional override; manual playMode → video variant by default
 *   - heroAspectRatio: "16/9" | "4/3" | "21/9" | "1/1" (default 16/9)
 *   - brief: context / strategy / solution (title + copy, editable)
 *   - blocks: modular sections (vimeo, copy, still, gallery)
 *
 * Blocks: contentType (block kind) + layout. vimeo/still add variant (hero | video | thumb):
 * - contentType: "copy" | "vimeo" | "still" | "gallery" | "group"
 * - group: layout "cols" | "stack", ratio? (e.g. [2, 1] for 2:1 cols), blocks[]
 * - vimeo/still: variant, overlayOpacity, overlayPosition, overlayPaddingBottom (e.g. "pb-8" for lower), aspectRatio
 *
 * Hero video is project-level (previewVimeoId), not a block. Add blocks in order.
 *
 * showOnProjectsPage: when false, project is excluded from /projects gallery. Default true.
 */
export type { Project, ProjectBlock, ProjectClass };

/** Type-safe project definition. Use in each project file. */
export function createProject(project: Project): Project {
  return project;
}
