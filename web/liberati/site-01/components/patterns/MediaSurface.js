"use client";

import { useRef, useEffect, useState } from "react";
import Player from "@vimeo/player";

export const toolkitExclude = true; // composition-only
export const toolkitOrder = 999;

/**
 * Uses Vimeo Player SDK to create embed with options (per official docs).
 * Embed options only apply when creating a new embed via SDK, not when attaching to iframe.
 * @see https://developer.vimeo.com/player/sdk/embed
 */
export default function MediaSurface({
  vimeoId,
  imageUrl,
  useFallbackImage = false,
  className = "",
  iframeClassName = "absolute inset-0 w-full h-full pointer-events-none object-cover",
  heroCover = false, // when true, hero-video-cover handles iframe layout; skip [&_iframe] positioning
  iframeStyle,
  playMode = "auto",
  loop = true,
  posterFadeMs = 1500,
  blackTintOpacity,
  tintClassName,
}) {
  const showPoster = useFallbackImage && imageUrl && vimeoId;
  const showFallbackOnly = useFallbackImage && imageUrl && !vimeoId;
  const [videoPlaying, setVideoPlaying] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!vimeoId || !containerRef.current) return;
    setVideoPlaying(false); // Reset when vimeoId changes

    const options = {
      id: vimeoId,
      autoplay: playMode === "auto",
      muted: true,
      loop,
      controls: false,
      playsinline: true,
      preload: "auto",
      autopause: false,
    };

    const player = new Player(containerRef.current, options);

    let pollId;
    const fadePoster = () => {
      setVideoPlaying(true);
      if (pollId) clearInterval(pollId);
    };
    player.on("playing", fadePoster);

    if (playMode === "auto") {
      player.ready().then(() => player.play().catch(() => {}));
      // Fallback: poll getPaused() — when false, video is playing (covers cases where events don't fire)
      pollId = setInterval(() => {
        player.getPaused().then((paused) => {
          if (!paused) fadePoster();
        }).catch(() => {});
      }, 300);
      const timeout = setTimeout(fadePoster, 4000); // Fade after 4s regardless — avoid stuck poster
      return () => {
        clearInterval(pollId);
        clearTimeout(timeout);
        player.off("playing", fadePoster);
        player.destroy();
      };
    }

    return () => {
      player.off("playing", fadePoster);
      player.destroy();
    };
  }, [vimeoId, playMode, loop]);

  const posterOpacity = showPoster && videoPlaying ? 0 : 1;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 z-0 bg-black"
        style={
          showFallbackOnly && imageUrl
            ? {
                backgroundImage: `url('${imageUrl}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      />

      {showPoster && imageUrl && (
        <div
          className="absolute inset-0 z-10 bg-black transition-opacity pointer-events-none"
          style={{
            opacity: posterOpacity,
            transitionDuration: `${posterFadeMs}ms`,
            backgroundImage: `url('${imageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden={videoPlaying}
        />
      )}

      {vimeoId && (
        <div
          ref={containerRef}
          className={
            heroCover
              ? `absolute inset-0 [&_iframe]:pointer-events-none ${iframeClassName}`
              : `absolute inset-0 [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:h-full [&_iframe]:w-full [&_iframe]:object-cover [&_iframe]:pointer-events-none ${iframeClassName}`
          }
          style={iframeStyle}
        />
      )}

      {blackTintOpacity != null && (
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: `rgba(0,0,0,${Number(blackTintOpacity) / 100 || 0})`,
          }}
        />
      )}

      {blackTintOpacity == null && tintClassName && (
        <div className={`absolute inset-0 ${tintClassName}`} />
      )}
    </div>
  );
}
