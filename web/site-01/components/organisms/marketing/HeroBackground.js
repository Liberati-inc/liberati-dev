"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroBackground({ vimeoId, fallbackImageUrl }) {
  const iframeRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (!vimeoId || videoError) return;

    const initPlayer = () => {
      const iframe = iframeRef.current;
      if (!iframe || typeof window.Vimeo === "undefined") return;
      const player = new window.Vimeo.Player(iframe);
      player.on("error", () => setVideoError(true));
    };

    if (typeof window !== "undefined" && window.Vimeo) {
      initPlayer();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);
    script.onload = initPlayer;

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [vimeoId, videoError]);

  const showFallback = !vimeoId || videoError;

  return (
    <>
      {/* Full black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Fallback image only when video errors or no video */}
      {showFallback && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('${fallbackImageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Vimeo: cover-scaled; black overlay on top for intensity control */}
      {vimeoId && !videoError && (
        <>
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              ref={iframeRef}
              src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&muted=1&loop=1`}
              className="absolute top-1/2 left-1/2 w-[max(100%,177.78vh)] h-[max(56.25vw,100vh)] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                width: "max(100%, 177.78vh)",
                height: "max(56.25vw, 100vh)",
              }}
              allow="autoplay; fullscreen"
              title="Hero background"
            />
          </div>
          {/* Black tint layer above video; tweak opacity as needed */}
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}
    </>
  );
}
