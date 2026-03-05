import type { CTA, Project } from "../types";
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

export const projectsCta: CTA = {
  id: "projects-view-all",
  label: "View All Projects",
};
