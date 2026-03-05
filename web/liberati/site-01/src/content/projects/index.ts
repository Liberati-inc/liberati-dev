import type { CTA, Project, ProjectClass } from "../types";
import katrina from "./katrina";
import mara from "./mara";

const projectList: Project[] = [katrina, mara];

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
