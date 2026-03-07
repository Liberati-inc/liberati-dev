import { fetchVimeoThumbnail } from "./vimeo";

/**
 * Enriches projects with stillImage from Vimeo oEmbed when stillImage is missing.
 * Fetches thumbnails in parallel. Returns new array with enriched projects.
 * @param {Array<{ slug: string; vimeoId?: string; stillImage?: string; [k: string]: unknown }>} projects
 * @returns {Promise<Array<{ ...project, stillImage?: string }>>}
 */
export async function enrichProjectsWithThumbnails(projects) {
  if (!projects?.length) return projects ?? [];

  const needsThumb = (p) => p.vimeoId && !p.stillImage;
  const toFetch = projects.filter(needsThumb);
  if (toFetch.length === 0) return [...projects];

  const thumbMap = new Map();
  await Promise.all(
    toFetch.map(async (p) => {
      const url = await fetchVimeoThumbnail(p.vimeoId);
      if (url) thumbMap.set(p.slug, url);
    })
  );

  return projects.map((p) =>
    thumbMap.has(p.slug) ? { ...p, stillImage: thumbMap.get(p.slug) } : { ...p }
  );
}

/**
 * Enriches a single project with stillImage from Vimeo when missing.
 * @param {Object} project
 * @returns {Promise<Object>}
 */
export async function enrichProjectWithThumbnail(project) {
  if (!project || project.stillImage || !project.vimeoId) return project;
  const thumb = await fetchVimeoThumbnail(project.vimeoId);
  return thumb ? { ...project, stillImage: thumb } : project;
}
