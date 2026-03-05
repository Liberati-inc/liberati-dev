"use client";

import { useState } from "react";
import EyebrowLabel from "@/components/atoms/EyebrowLabel";
import NavArrowButton from "@/components/atoms/NavArrowButton";
import ProjectHero from "@/components/molecules/ProjectHero";
import { featuredCopy, featuredProjectSlugs } from "@/content/home";
import { getProjectBySlug } from "@/content/projects";

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
        <EyebrowLabel>{featuredCopy.eyebrow}</EyebrowLabel>
        <div className="relative rounded overflow-hidden">
          {featured.length > 1 && (
            <>
              <NavArrowButton direction="prev" onClick={goPrev} ariaLabel="Previous project" />
              <NavArrowButton direction="next" onClick={goNext} ariaLabel="Next project" />
            </>
          )}
          <ProjectHero
            key={project.slug}
            vimeoId={project.vimeoId}
            stillImage={project.stillImage}
            playMode="preview"
            title={project.title}
            subtext={project.meta}
            ctaHref={`/project/${project.slug}`}
            ctaLabel="VIEW PROJECT"
          />
        </div>
      </div>
    </section>
  );
}
