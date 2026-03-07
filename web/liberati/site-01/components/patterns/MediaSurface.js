"use client";

import { useId, useRef, useEffect, useState } from "react";
import Player from "@vimeo/player";

export const toolkitExclude = true;
export const toolkitOrder = 999;

/**
 * Vimeo embed via SDK. Poster fades when video is playing (playing event + poll fallback).
 * Unique container id per instance to avoid duplicate conflicts.
 * @see https://github.com/vimeo/player.js
 */
export default function MediaSurface({
  vimeoId,
  imageUrl,
  useFallbackImage = false,
  className = "",
  iframeClassName = "absolute inset-0 w-full h-full pointer-events-none object-cover",
  heroCover = false,
  iframeStyle,
  playMode = "auto",
  loop = true,
  posterFadeMs = 1500,
  playingPollMs = 150,
  blackTintOpacity,
  tintClassName,
}) {
  const showPoster = useFallbackImage && imageUrl && vimeoId;
  const showFallbackOnly = useFallbackImage && imageUrl && !vimeoId;
  const [videoPlaying, setVideoPlaying] = useState(false);
  const instanceId = useId().replace(/:/g, "-");
  const containerRef = useRef(null);
  const pollRef = useRef(null);

  useEffect(() => {
    if (!vimeoId || !containerRef.current) return;

    const container = containerRef.current;
    let cancelled = false;

    const fadePoster = () => {
      if (cancelled) return;
      setVideoPlaying(true);
      if (pollRef.current) {
        clearInterval(pollRef.current);
        pollRef.current = null;
      }
    };

    const player = new Player(container, {
      id: vimeoId,
      autoplay: playMode === "auto",
      muted: true,
      loop,
      controls: false,
      playsinline: true,
      preload: "auto",
      autopause: false,
    });

    player.on("playing", fadePoster);

    const startPoll = () => {
      if (cancelled) return;
      if (playMode === "auto") {
        pollRef.current = setInterval(() => {
          if (cancelled) return;
          if (!containerRef.current || !document.contains(containerRef.current)) return;
          player.getPaused()
            .then((paused) => {
              if (cancelled) return;
              if (!paused) fadePoster();
            })
            .catch(() => {});
        }, playingPollMs);
      }
    };

    player.ready().then(startPoll).catch(() => {});

    return () => {
      cancelled = true;
      if (pollRef.current) {
        clearInterval(pollRef.current);
        pollRef.current = null;
      }
      player.off("playing", fadePoster);
      player.destroy().catch(() => {});
    };
  }, [vimeoId, playMode, playingPollMs]);

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
          id={`vimeo-container-${instanceId}`}
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
