import { cookies } from "next/headers";
import PageContainer from "@/components/blocks/PageContainer";
import SiteHeader from "@/components/sections/SiteHeader";
import ProjectCard from "@/components/patterns/ProjectCard";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Footer from "@/components/sections/Footer";
import SetLastHeroCookie from "./SetLastHeroCookie";
import { getProjectBySlug, projectsForGallery } from "@/content/projects";
import {
  projectsHero,
  galleryCategories,
  galleryCategoryClasses,
  gallerySections,
  galleryDefaultKey,
} from "@/content/projectsPage";

const LAST_HERO_COOKIE = "last_projects_hero";

function getHeroProject(projectsList, config, excludeSlug) {
  if (config.randomize && projectsList.length > 0) {
    const pool = excludeSlug
      ? projectsList.filter((p) => p.slug !== excludeSlug)
      : projectsList;
    const list = pool.length > 0 ? pool : projectsList;
    const i = Math.floor(Math.random() * list.length);
    return list[i];
  }
  return getProjectBySlug(config.projectSlug);
}

export default async function ProjectsPage() {
  const cookieStore = await cookies();
  const lastSlug = cookieStore.get(LAST_HERO_COOKIE)?.value;
  const heroProject = getHeroProject(projectsForGallery, projectsHero, lastSlug);

  return (
    <div className="bg-obsidian text-white min-h-screen">
      {projectsHero.randomize && heroProject?.slug && (
        <SetLastHeroCookie slug={heroProject.slug} />
      )}
      <SiteHeader />

      <main>
        {heroProject && (
          <div className="h-[32vh] w-full">
            <ProjectCard
              variant="hero"
              vimeoId={heroProject.vimeoId}
              stillImage={heroProject.stillImage}
              title={heroProject.title}
              meta={heroProject.meta}
              href={`/project/${heroProject.slug}`}
              ctaLabel={heroProject.ctaLabel}
              showOverlay={false}
            />
          </div>
        )}

        <section className="py-16">
          <PageContainer>
            <ProjectsSection
              projects={projectsForGallery}
              filterItems={galleryCategories}
              filterActiveKey={galleryDefaultKey}
              galleryCategoryClasses={galleryCategoryClasses}
              gallerySections={gallerySections}
            />
          </PageContainer>
        </section>
      </main>

      <Footer />
    </div>
  );
}
