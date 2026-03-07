"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SvgIcon from "@/components/blocks/SvgIcon";
import { useHeaderVisibility } from "@/components/providers/HeaderVisibilityProvider";
import ProjectLink from "@/components/blocks/ProjectLink";
import PrimaryButton from "@/components/blocks/PrimaryButton";
import SecondaryButton from "@/components/blocks/SecondaryButton";
import MediaSurface from "@/components/patterns/MediaSurface";
import FadeOnHover from "@/components/blocks/FadeOnHover";
import { type, typeRole, typeBlockOverlay, typeProjectCard } from "@/content/typography";


export const toolkitExclude = false;
export const toolkitOrder = 0;

/**
 * playMode → playback. Keys: preview | user | thumb.
 * preview: autoplay muted loop | user: manual, no loop | thumb: autoplay loop (hover preview)
 * Override via playback/loop props only when a page needs different behavior.
 * Text overlays are controlled solely by the overlay prop, not playMode.
 */
const PLAY_MODE_DEFAULTS = {
  preview: { playMode: "auto", loop: true },
  user: { playMode: "manual", loop: false },
  thumb: { playMode: "auto", loop: true },
};


export default function ProjectCard({
  playMode = "thumb", // "thumb" | "preview" | "user" — controls playback/layout only
  fill,
  title,
  meta,
  stillImage,
  vimeoId,
  loop,
  playback, // "auto" | "manual" — override playMode default
  blackTintOpacity,
  playingPollMs,
  overlay, // "landing" | "featured" | "none" — only prop controlling text overlays
  overlayOpacity,
  overlayPadding,
  contentFadeOnHover,
  overlayPosition,
  showOverlay = true,
  showOverlayCta = true, // false = hide "View Project" link (e.g. when whole card is clickable)
  cover,
  href,
  heading,
  body,
  primaryCta,
  secondaryCta,
  ctaLabel,
}) {
  const pm = playMode ?? "thumb";
  const defaults = PLAY_MODE_DEFAULTS[pm] ?? PLAY_MODE_DEFAULTS.thumb;
  const effectivePlayMode = playback ?? defaults.playMode;
  const effectiveLoop = loop ?? defaults.loop;

  const [heroHovered, setHeroHovered] = useState(false);
  const { headerVisible } = useHeaderVisibility();
  const thumbUrl = stillImage ?? null;
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

  const showTextOverlay = overlay !== "none" && (overlay ?? (pm === "preview" ? "landing" : null));
  if (pm === "preview") {
    return (
      <section
        className={`relative w-full flex flex-col overflow-hidden h-full min-h-full ${positionClass}`}
      >
        <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
          <MediaSurface
            vimeoId={vimeoId}
            imageUrl={thumbUrl || undefined}
            useFallbackImage={Boolean(thumbUrl)}
            heroCover
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-video hero-video-cover"
            playMode={effectivePlayMode}
            loop={effectiveLoop}
            playingPollMs={playingPollMs}
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
        {showOverlay && showTextOverlay && (
        <FadeOnHover
          when={contentFadeOnHover}
          className={`relative z-10 max-w-7xl w-full ${contentAlignClass} ${
            overlayPadding ??
            (isLanding
              ? "px-6 lg:px-10 pb-[calc(4rem+env(safe-area-inset-bottom,0px))] md:pb-[calc(6rem+env(safe-area-inset-bottom,0px))] lg:pb-96"
              : "px-6 lg:px-10 pb-9")
          }`}
        >
          <div className={isLanding ? "max-w-5xl" : "w-full"}>
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
                    <PrimaryButton href={primaryCta.href} label={primaryCta.label} />
                    <SecondaryButton href={secondaryCta.href} label={secondaryCta.label} />
                  </div>
                )}
              </>
            ) : (
              <div className="w-full">
                {meta && (
                  <p
                    className={`${typeProjectCard.meta} ${type.mod.whiteSoft} mb-1 md:mb-0`}
                  >
                    {meta}
                  </p>
                )}
                <div className="flex justify-between items-end gap-4 w-full">
                  {title && (
                    <h1
                      className={`${typeBlockOverlay.header} ${type.mod.white} mt-0 min-w-0 max-w-[85%] sm:max-w-2xl`}
                    >
                      {title}
                    </h1>
                  )}
                  <SvgIcon
                    variant="northEast"
                    sizeClass="w-8 h-8 md:w-10 md:h-10"
                    colorClass="text-white"
                    className="shrink-0"
                  />
                </div>
                {href && showOverlayCta && (
                  <ProjectLink href={href} className="mt-9" label={ctaLabel?.trim() || "VIEW PROJECT"} />
                )}
              </div>
            )}
          </div>
        </FadeOnHover>
        )}
      </section>
    );
  }

  if (pm === "user") {
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
        useFallbackImage={Boolean(thumbUrl)}
        className="aspect-video mb-4"
        playMode={effectivePlayMode}
        loop={effectiveLoop}
        playingPollMs={playingPollMs}
        blackTintOpacity={blackTintOpacity}
      />
      <div className="flex justify-between items-start">
        <div>
          <h5
            className={`${typeProjectCard.title} group-hover:text-liberatiRed transition-colors`}
          >
            {title}
          </h5>
          <p className={`${typeProjectCard.meta} ${type.mod.uppercase} mt-1`}>
            {meta}
          </p>
        </div>
        <SvgIcon
          variant="northEast"
          sizeClass="w-5 h-5"
          colorClass="text-white group-hover:text-liberatiRed transition-colors"
          className="shrink-0 mt-1"
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

