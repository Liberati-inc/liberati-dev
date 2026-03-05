"use client";

import { useState } from "react";
import SvgIcon from "@/components/atoms/SvgIcon";
import ProjectLink from "@/components/atoms/ProjectLink";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import SecondaryButton from "@/components/atoms/SecondaryButton";
import MediaSurface from "@/components/molecules/MediaSurface";
import { type, typeRole, typeServices } from "@/content/typography";

export default function ProjectCard({
  variant = "thumb", // "thumb" | "hero" | "video"
  title,
  meta,
  stillImage,
  vimeoId,
  loop = true,
  playMode = "auto",
  blackTintOpacity,
  href,
  heading,
  body,
  primaryCta,
  secondaryCta,
  ctaLabel,
}) {
  const [playing, setPlaying] = useState(false);
  const thumbUrl =
    stillImage ?? (vimeoId ? `https://vumbnail.com/${vimeoId}.jpg` : null);
  const showLoop = loop && vimeoId;
  const isLanding = Boolean(heading);

  if (variant === "hero") {
    return (
      <section
        className={`relative w-full flex flex-col justify-end overflow-hidden ${
          isLanding ? "h-full" : "h-[85vh]"
        }`}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <MediaSurface
            vimeoId={showLoop ? vimeoId : undefined}
            imageUrl={thumbUrl || undefined}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-video min-h-full min-w-full"
            playMode={playMode}
            loop={loop}
            blackTintOpacity={blackTintOpacity}
          />
        </div>
        {isLanding && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/30 to-obsidian z-10 pointer-events-none" />
        )}
        <div
          className={`relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 ${
            isLanding ? "pb-96" : "pb-9"
          }`}
        >
          <div className="max-w-3xl">
            {isLanding ? (
              <>
                {heading && (
                  <h1 className={`${type.scale.h0} ${type.mod.uppercase} mb-4 text-left`}>
                    {heading}
                  </h1>
                )}
                {body && (
                  <p className={`${typeRole.body} mb-8 max-w-xl text-left`}>
                    {body}
                  </p>
                )}
                {primaryCta && secondaryCta && (
                  <div className="flex flex-col sm:flex-row gap-4 justify-start">
                    <PrimaryButton href={primaryCta.href}>
                      {primaryCta.label}
                    </PrimaryButton>
                    <SecondaryButton href={secondaryCta.href}>
                      {secondaryCta.label}
                    </SecondaryButton>
                  </div>
                )}
              </>
            ) : (
              <>
                {title && (
                  <h1
                    className={`${type.scale.h1} ${type.mod.uppercase} mb-3 text-white`}
                  >
                    {title}
                  </h1>
                )}
                {meta && (
                  <p
                    className={`${typeServices.meta} ${type.mod.whiteSoft} mt-0`}
                  >
                    {meta}
                  </p>
                )}
                {href && (
                  <ProjectLink href={href} className="mt-9">
                    {ctaLabel?.trim() || "VIEW PROJECT"}
                  </ProjectLink>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "video") {
    return (
      <div className="relative aspect-video overflow-hidden group cursor-pointer">
        <MediaSurface
          vimeoId={playing ? vimeoId : undefined}
          imageUrl={thumbUrl || undefined}
          className="absolute inset-0"
          playMode={playing ? "auto" : "manual"}
          loop={loop}
        />
        {!playing && vimeoId && (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 z-10 flex items-center justify-center"
            aria-label="Play video"
          >
            <span className="w-20 h-20 rounded-full bg-liberatiRed flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    );
  }

  // Default: thumbnail card
  return (
    <div className="group cursor-pointer">
      <MediaSurface
        vimeoId={showLoop ? vimeoId : undefined}
        imageUrl={thumbUrl || undefined}
        useFallbackImage
        className="aspect-video mb-4"
        playMode={playMode}
        loop={loop}
        blackTintOpacity={blackTintOpacity}
      />
      <div className="flex justify-between items-start">
        <div>
          <h5
            className={`${typeServices.projectCardTitle} group-hover:text-liberatiRed transition-colors`}
          >
            {title}
          </h5>
          <p className={`${typeServices.meta} ${type.mod.uppercase} mt-1`}>
            {meta}
          </p>
        </div>
        <SvgIcon
          variant="northEast"
          sizeClass="w-5 h-5"
          colorClass="text-white group-hover:text-liberatiRed transition-colors"
          className="shrink-0"
        />
      </div>
    </div>
  );
}

