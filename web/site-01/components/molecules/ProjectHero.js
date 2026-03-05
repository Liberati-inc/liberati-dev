"use client";

import { useState } from "react";
import { type, typeRole } from "@/content/typography";
import ProjectLink from "@/components/atoms/ProjectLink";

/**
 * Project hero: full-bleed video or still, optional overlay.
 * Use as featured project thumbnail, project detail header loop, etc.
 * - loop: Vimeo autoplay muted loop (like landing hero).
 * - preview: same as loop, for featured carousel / thumbnails.
 * - manual: poster + play button; on click plays video.
 * - alignOverlay="page": overlay uses same horizontal padding as PageContainer (px-6 lg:px-10)
 *   so title/subtext align with content below (e.g. projects page gallery).
 */
export default function ProjectHero({
  vimeoId,
  stillImage,
  playMode = "loop",
  title,
  subtext,
  ctaHref,
  ctaLabel = "VIEW PROJECT",
  aspectRatio,
  alignOverlay,
}) {
  const [playing, setPlaying] = useState(false);
  const hasVideo = vimeoId && (playMode === "loop" || playMode === "preview" || playing);
  const posterUrl = stillImage || (vimeoId ? `https://vumbnail.com/${vimeoId}.jpg` : null);
  const is16x9 = aspectRatio === "16:9";
  const sectionClass = is16x9
    ? "relative w-full aspect-video flex flex-col justify-end overflow-hidden"
    : "relative h-[85vh] w-full flex flex-col justify-end overflow-hidden";

  return (
    <section className={sectionClass}>
      <div className="absolute inset-0 z-0">
        {hasVideo ? (
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&muted=1&loop=1`}
              className="absolute top-1/2 left-1/2 w-[max(100%,177.78vh)] h-[max(56.25vw,100vh)] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                width: "max(100%, 177.78vh)",
                height: "max(56.25vw, 100vh)",
              }}
              allow="autoplay; fullscreen"
              title="Project hero"
            />
          </div>
        ) : (
          <div
            className="absolute inset-0 w-full h-full bg-black"
            style={{
              backgroundImage: posterUrl ? `url(${posterUrl})` : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
        {playMode === "preview" && (
          <div className="absolute inset-0 z-[1] bg-black/60 pointer-events-none" aria-hidden />
        )}
        {playMode === "manual" && !playing && (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 z-10 flex items-center justify-center group"
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
      {(title || subtext || ctaHref) && (
        <div
          className={`relative z-10 pb-20 max-w-7xl mx-auto w-full ${
            alignOverlay === "page" ? "px-6 lg:px-10" : "px-6 md:px-16"
          }`}
        >
          <div className="max-w-3xl">
            {title && (
              <h1 className={`${type.scale.h1} ${type.mod.uppercase} mb-6 text-white`}>
                {title}
              </h1>
            )}
            {subtext && (
              <p className={`${typeRole.body} max-w-2xl mb-6 text-white/90`}>{subtext}</p>
            )}
            {ctaHref && (
              <ProjectLink href={ctaHref}>{ctaLabel}</ProjectLink>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
