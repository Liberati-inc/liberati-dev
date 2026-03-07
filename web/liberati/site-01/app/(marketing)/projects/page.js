import { cookies } from "next/headers";
import PageContainer from "@/components/blocks/PageContainer";
import SiteHeader from "@/components/sections/SiteHeader";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Footer from "@/components/sections/Footer";
import SetLastLandingHeroCookie from "../SetLastLandingHeroCookie";
import SetLastLandingHeroImageCookie from "../SetLastLandingHeroImageCookie";
import { projectsForGallery } from "@/content/projects";
import { enrichProjectsWithThumbnails } from "@/lib/enrichProjects";
import { getHeroVimeoIdExcluding } from "@/content/videos";
import { getHeroFallbackImageExcluding } from "@/content/home";
import {
  galleryCategories,
  galleryCategoryClasses,
  gallerySections,
  galleryDefaultKey,
} from "@/content/projectsPage";

const LAST_LANDING_HERO_COOKIE = "last_landing_hero";
const LAST_LANDING_HERO_IMAGE_COOKIE = "last_landing_hero_image";

export default async function ProjectsPage() {
  const cookieStore = await cookies();
  const lastId = cookieStore.get(LAST_LANDING_HERO_COOKIE)?.value;
  const lastImageRaw = cookieStore.get(LAST_LANDING_HERO_IMAGE_COOKIE)?.value;
  const lastImage = lastImageRaw ? decodeURIComponent(lastImageRaw) : undefined;

  const heroVimeoId = getHeroVimeoIdExcluding(lastId);
  const heroFallbackImage = getHeroFallbackImageExcluding(lastImage);

  const enriched = await enrichProjectsWithThumbnails(projectsForGallery);

  return (
    <div className="bg-obsidian text-white min-h-screen">
      {heroVimeoId && <SetLastLandingHeroCookie vimeoId={heroVimeoId} />}
      {heroFallbackImage && (
        <SetLastLandingHeroImageCookie imagePath={heroFallbackImage} />
      )}
      <SiteHeader />

      <main>
        <div className="h-[32vh] w-full">
          <HeroSection
            vimeoId={heroVimeoId ?? undefined}
            stillImage={heroFallbackImage}
            overlayOpacity={0.6}
          />
        </div>

        <section className="py-16">
          <PageContainer>
            <ProjectsSection
              projects={enriched}
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
