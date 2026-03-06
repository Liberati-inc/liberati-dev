"use client";

import { useState } from "react";
import EyebrowLabel from "@/components/atoms/EyebrowLabel";
import NavArrowButton from "@/components/atoms/NavArrowButton";
import ProjectCard from "@/components/molecules/ProjectCard";
import { featuredCopy, featuredProjectSlugs } from "@/content/home";
import { getProjectBySlug } from "@/content/projects";

export const toolkitExclude = false;
export const toolkitOrder = 5;

export default function FeaturedSection() {
  const featured = featuredProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter(Boolean);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (featured.length === 0) return null;

  const project = featured[currentIndex];
  const goPrev = () =>
    setCurrentIndex((i) => (i - 1 + featured.length) % featured.length);
  const goNext = () =>
    setCurrentIndex((i) => (i + 1) % featured.length);

  return (
    <section className="bg-obsidian py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-10">
        <EyebrowLabel label={featuredCopy.eyebrow} />
        <div className="relative rounded overflow-hidden">
          {featured.length > 1 && (
            <>
              <NavArrowButton direction="prev" onClick={goPrev} ariaLabel="Previous project" />
              <NavArrowButton direction="next" onClick={goNext} ariaLabel="Next project" />
            </>
          )}
          <div className="h-[25vh] w-full">
            <ProjectCard
            key={project.slug}
            variant="hero"
            vimeoId={project.vimeoId}
            stillImage={project.stillImage}
            blackTintOpacity={30}
            title={project.title}
            meta={project.meta}
            href={`/project/${project.slug}`}
            ctaLabel={project.ctaLabel}
            overlayPadding="px-8 lg:px-32 pb-12"
            showOverlay={false}
          />
          </div>
        </div>
      </div>
    </section>
  );
}
