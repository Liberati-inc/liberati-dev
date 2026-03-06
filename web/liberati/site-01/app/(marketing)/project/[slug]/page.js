import { notFound } from "next/navigation";
import SiteHeader from "@/components/organisms/marketing/SiteHeader";
import ProjectCard from "@/components/molecules/ProjectCard";
import ProjectBriefSection from "@/components/organisms/marketing/ProjectBriefSection";
import ProjectBlocksSection from "@/components/organisms/marketing/ProjectBlocksSection";
import Footer from "@/components/organisms/marketing/Footer";
import { getProjectBySlug } from "@/content/projects";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Liberati`,
    description: project.description ?? project.brief?.introCopy ?? project.meta,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const vimeoId = project.previewVimeoId ?? project.vimeoId;
  const heroVariant =
    project.detailHeroVariant ??
    (project.detailPlayMode === "manual" ? "video" : "hero");
  const playOverrides =
    project.detailPlayMode === "manual"
      ? { playMode: "manual", loop: false }
      : undefined;
  const aspectClass = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "21/9": "aspect-[21/9]",
    "1/1": "aspect-square",
  }[project.heroAspectRatio ?? "16/9"];

  return (
    <div className="bg-obsidian text-white min-h-screen flex flex-col w-full min-w-0 overflow-x-hidden">
      <div className="sticky top-0 z-50 flex flex-col shrink-0">
        <SiteHeader position="static" />
        <div className={`relative w-full ${aspectClass} shrink-0`}>
          <ProjectCard
            variant={heroVariant}
            fill={heroVariant === "video"}
            vimeoId={vimeoId}
            stillImage={project.stillImage}
            {...playOverrides}
            title={project.title}
            meta={project.meta}
            overlayPadding="px-6 lg:px-10 pb-16 md:pb-24"
          />
        </div>
      </div>

      <main className="flex-1 flex flex-col w-full min-w-0 pb-24 md:pb-32">
        <div className="flex flex-col flex-1 w-full max-w-7xl mx-auto">
          {project.brief && (
            <ProjectBriefSection
              brief={{ ...project.brief, sectionTitle: project.title }}
              meta={project.meta}
              description={project.description}
            />
          )}

          {project.blocks?.length > 0 && (
            <ProjectBlocksSection blocks={project.blocks} />
          )}

          {project.credit && (
            <ProjectBriefSection
              brief={{ ...project.credit, sectionTitle: "Credit" }}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
