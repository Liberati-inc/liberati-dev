import EyebrowLabel from "@/components/blocks/EyebrowLabel";
import ProjectBlocksSection from "@/components/patterns/ProjectBlocksSection";
import { featuredCopy, featuredProjectSlugs } from "@/content/home";
import { getProjectBySlug } from "@/content/projects";

export const toolkitExclude = false;
export const toolkitOrder = 5;

/**
 * Build vimeo blocks from featured projects for ProjectBlocksSection.
 * Uses same featured source as home: featuredProjects prop or featuredProjectSlugs from home.ts.
 */
function buildFeaturedBlocks(featured) {
  return featured
    .filter((p) => p?.vimeoId || p?.previewVimeoId)
    .map((p) => ({
      contentType: "vimeo",
      vimeoId: p.previewVimeoId ?? p.vimeoId,
      header: p.title,
      subtext: p.meta,
      slug: p.slug,
      variant: "preview",
      overlay: "featured",
    }));
}

export default function FeaturedSection({ featuredProjects: featuredProp }) {
  const featured =
    featuredProp?.length > 0
      ? featuredProp
      : featuredProjectSlugs
          .map((slug) => getProjectBySlug(slug))
          .filter(Boolean);

  const blocks = buildFeaturedBlocks(featured);
  if (blocks.length === 0) return null;

  return (
    <section className="bg-obsidian py-24">
      <div className="max-w-7xl mx-auto space-y-10">
        <EyebrowLabel label={featuredCopy.eyebrow} />
        <ProjectBlocksSection blocks={blocks} stack stackHeight="half" />
      </div>
    </section>
  );
}
