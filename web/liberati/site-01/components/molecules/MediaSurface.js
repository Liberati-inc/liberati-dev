export const toolkitExclude = true; // composition-only
export const toolkitOrder = 999;

export default function MediaSurface({
  vimeoId,
  imageUrl,
  useFallbackImage = false,
  className = "",
  iframeClassName = "absolute inset-0 w-full h-full pointer-events-none object-cover",
  iframeStyle,
  // playback + overlay controls
  playMode = "auto", // "auto" | "manual" (manual = don't autoplay; caller decides when to pass vimeoId)
  loop = true,
  blackTintOpacity, // e.g. 40 -> bg-black/40 equivalent; when undefined, no tint
  tintClassName, // legacy escape hatch
}) {
  const showFallback = useFallbackImage && imageUrl;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Base black + optional poster image */}
      <div
        className="absolute inset-0 bg-black"
        style={
          showFallback
            ? {
                backgroundImage: `url('${imageUrl}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      />

      {vimeoId && (
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=${
            playMode === "auto" ? 1 : 0
          }&muted=1&loop=${loop ? 1 : 0}&autopause=0`}
          className={iframeClassName}
          style={iframeStyle}
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Video"
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

