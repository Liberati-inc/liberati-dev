"use client";

import ProjectCard from "@/components/molecules/ProjectCard";
import { heroCopy, heroFallbackImage } from "@/content/home";
import { heroPrimaryCta, heroSecondaryCta } from "@/content/cta";
import { getRandomHeroVimeoId } from "@/content/videos";

export const toolkitExclude = false;
export const toolkitOrder = 2;

export default function HeroSection({ vimeoId: vimeoIdProp, overlayOpacity }) {
  const vimeoId = vimeoIdProp ?? getRandomHeroVimeoId();

  return (
    <ProjectCard
      variant="hero"
      vimeoId={vimeoId}
      stillImage={heroFallbackImage}
      heading={heroCopy.heading}
      body={heroCopy.body}
      primaryCta={heroPrimaryCta}
      secondaryCta={heroSecondaryCta}
      overlayOpacity={overlayOpacity}
      showOverlay
      contentFadeOnHover={false}
    />
  );
}
