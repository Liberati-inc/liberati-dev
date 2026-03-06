import type { CTA, Project, ProjectClass } from "../types";

// Webpack require.context — auto-discovers project files in this folder
const projectModules = require.context("./", false, /\.ts$/);
const rawProjects = projectModules
  .keys()
  .filter((k) => !/^\.\/(index|template)\.ts$/i.test(k))
  .map((k) => projectModules(k).default)
  .filter((p): p is Project => p != null && typeof p === "object" && "slug" in p);
// Dedupe by slug (require.context can yield same module twice on case-insensitive FS)
const seen = new Set<string>();
const projectList = rawProjects.filter((p) => {
  if (seen.has(p.slug)) return false;
  seen.add(p.slug);
  return true;
});

export type { Project };
export type { ProjectBlock, ProjectClass } from "../types";
export { createProject } from "./template";
export const projects = projectList;

export function getProjectBySlug(slug: string): Project | undefined {
  return projectList.find((p) => p.slug === slug);
}

/**
 * Filter project list by gallery category. Use with galleryCategoryClasses from projectsPage.
 * When classes is null, returns all projects.
 */
export function getProjectsByClass(
  projectList: Project[],
  classes: ProjectClass[] | null
): Project[] {
  if (classes === null) return [...projectList];
  return projectList.filter((p) => p.class && classes.includes(p.class));
}

export const projectsCta: CTA = {
  id: "projects-view-all",
  label: "View All Projects",
};
