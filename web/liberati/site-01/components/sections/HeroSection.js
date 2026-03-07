"use client";

import ProjectCard from "@/components/patterns/ProjectCard";
import { heroCopy } from "@/content/home";
import { heroPrimaryCta, heroSecondaryCta } from "@/content/cta";
import { getRandomHeroVimeoId } from "@/content/videos";

export const toolkitExclude = false;
export const toolkitOrder = 2;

export default function HeroSection({ vimeoId: vimeoIdProp, stillImage, overlayOpacity }) {
  const vimeoId = vimeoIdProp ?? getRandomHeroVimeoId();

  return (
    <ProjectCard
      playMode="preview"
      overlay="landing"
      vimeoId={vimeoId}
      stillImage={stillImage}
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
