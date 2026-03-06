"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SvgIcon from "@/components/atoms/SvgIcon";
import { useHeaderVisibility } from "@/components/providers/HeaderVisibilityProvider";
import ProjectLink from "@/components/atoms/ProjectLink";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import SecondaryButton from "@/components/atoms/SecondaryButton";
import MediaSurface from "@/components/molecules/MediaSurface";
import { type, typeRole, typeServices, typeBlockOverlay } from "@/content/typography";

/**
 * Variant → playback. Single source of truth.
 * hero: autoplay muted loop | video: manual, no loop | thumb: autoplay loop (hover preview)
 * Override via playMode/loop props only when a page needs different behavior.
 */
const VARIANT_PLAY_DEFAULTS = {
  hero: { playMode: "auto", loop: true },
  video: { playMode: "manual", loop: false },
  thumb: { playMode: "auto", loop: true },
};

export default function ProjectCard({
  variant = "thumb", // "thumb" | "hero" | "video"
  fill,
  title,
  meta,
  stillImage,
  vimeoId,
  loop,
  playMode,
  blackTintOpacity,
  overlayOpacity,
  overlayPadding,
  contentFadeOnHover,
  overlayPosition,
  cover,
  href,
  heading,
  body,
  primaryCta,
  secondaryCta,
  ctaLabel,
}) {
  const defaults = VARIANT_PLAY_DEFAULTS[variant] ?? VARIANT_PLAY_DEFAULTS.thumb;
  const effectivePlayMode = playMode ?? defaults.playMode;
  const effectiveLoop = loop ?? defaults.loop;

  const [heroHovered, setHeroHovered] = useState(false);
  const { headerVisible } = useHeaderVisibility();
  const thumbUrl =
    stillImage ?? (vimeoId ? `https://vumbnail.com/${vimeoId}.jpg` : null);
  const showLoop = effectiveLoop && vimeoId;
  const isLanding = Boolean(heading);
  useEffect(() => {
    if (!isLanding) return;
    const onEnter = () => setHeroHovered(true);
    const onLeave = (e) => {
      if (!e.relatedTarget || !document.contains(e.relatedTarget)) {
        setHeroHovered(false);
      }
    };
    document.addEventListener("mousemove", onEnter);
    document.addEventListener("mouseout", onLeave);
    return () => {
      document.removeEventListener("mousemove", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, [isLanding]);

  const OVERLAY_POSITION_CLASS = {
    "bottom-left": "justify-end items-start",
    "bottom-right": "justify-end items-end",
    "top-left": "justify-start items-start",
    "top-right": "justify-start items-end",
    center: "justify-center items-center",
  };
  const positionClass = overlayPosition
    ? OVERLAY_POSITION_CLASS[overlayPosition]
    : "justify-end items-start";

  /** Block-only override: when overlayPosition is passed, replace mx-auto so position actually applies. */
  const contentAlignClass = overlayPosition
    ? overlayPosition.includes("right")
      ? "self-end flex flex-col items-end"
      : overlayPosition.includes("left")
        ? "self-start flex flex-col items-start"
        : "mx-auto flex flex-col items-center"
    : "mx-auto";

  if (variant === "hero") {
    return (
      <section
        className={`relative w-full flex flex-col overflow-hidden h-full min-h-full ${positionClass}`}
      >
        <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
          <MediaSurface
            vimeoId={vimeoId}
            imageUrl={thumbUrl || undefined}
            className={
              cover
                ? "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-video hero-video-cover-compact"
                : `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-video ${
                    isLanding ? "hero-video-cover" : "hero-video-cover-compact"
                  }`
            }
            playMode={effectivePlayMode}
            loop={effectiveLoop}
            blackTintOpacity={blackTintOpacity}
          />
        </div>
        {isLanding && (
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, rgb(0 0 0 / 1), rgb(0 0 0 / ${overlayOpacity ?? 0.4}), #0A0A0A)`,
            }}
          />
        )}
        <div
          className={`relative z-10 max-w-7xl w-full ${contentAlignClass} ${
            contentFadeOnHover ? "opacity-100 md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100 " : ""
          }${
            overlayPadding ??
            (isLanding
              ? "px-6 lg:px-10 pb-[calc(4rem+env(safe-area-inset-bottom,0px))] md:pb-[calc(6rem+env(safe-area-inset-bottom,0px))] lg:pb-96"
              : "px-6 lg:px-10 pb-9")
          }`}
        >
          <div className={isLanding ? "max-w-5xl" : "max-w-[85%] sm:max-w-2xl"}>
            {isLanding ? (
              <>
                <div
                  className={`flex items-center gap-3 mb-6 transition-opacity duration-500 ${
                    headerVisible || heroHovered ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <SvgIcon variant="wing" sizeClass="h-8 w-auto" colorClass="text-liberatiRed" />
                  <SvgIcon
                    variant="wordmark"
                    sizeClass="h-5 w-auto"
                    colorClass="text-white"
                  />
                </div>
                {heading && (
                  <h1 className={`${typeRole.landing} mb-4 text-left`}>
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
                    className={`${typeBlockOverlay.title} ${type.mod.white} mb-2 md:mb-3`}
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
    if (!vimeoId) return null;
    return (
      <div
        className={`relative overflow-hidden ${
          fill ? "absolute inset-0 w-full h-full" : "aspect-video"
        }`}
      >
        <div className="absolute inset-0">
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=0&muted=0`}
            className="absolute inset-0 w-full h-full pointer-events-auto"
            allow="fullscreen; autoplay; picture-in-picture"
            allowFullScreen
            title="Video"
          />
        </div>
      </div>
    );
  }

  // Default: thumbnail card — links to project detail when href provided
  const cardContent = (
    <>
      <MediaSurface
        vimeoId={showLoop ? vimeoId : undefined}
        imageUrl={thumbUrl || undefined}
        useFallbackImage
        className="aspect-video mb-4"
        playMode={effectivePlayMode}
        loop={effectiveLoop}
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
    </>
  );

  if (href) {
    return (
      <Link href={href} className="group cursor-pointer block">
        {cardContent}
      </Link>
    );
  }
  return <div className="group cursor-pointer">{cardContent}</div>;
}

