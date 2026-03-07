import ProjectCard from "@/components/patterns/ProjectCard";
import BlockOverlay from "@/components/patterns/BlockOverlay";
import BlockOverlayCopy from "@/components/patterns/BlockOverlayCopy";
import { getAspectStyle, OVERLAY_BOTTOM } from "./blockUtils";

export const toolkitExclude = false;
export const toolkitOrder = 5;

export default function BlockVimeo({ block, fill }) {
  const { vimeoId, header, subtext } = block;
  const variant = block.variant ?? "video";
  const aspectStyle = getAspectStyle(block);

  if (variant === "thumb") {
    return (
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <ProjectCard
          variant="thumb"
          vimeoId={vimeoId}
          title={header}
          meta={subtext}
        />
      </div>
    );
  }

  if (variant === "hero") {
    const overlayOpacity = block.overlayOpacity ?? 0.4;
    return (
      <section
        className={`group relative overflow-hidden bg-black cursor-default ${fill ? "h-full w-full" : "w-full"}`}
        style={fill ? undefined : aspectStyle}
      >
        <BlockOverlay opacity={overlayOpacity} />
        <ProjectCard
          variant="hero"
          fill
          vimeoId={vimeoId}
          title={header}
          meta={subtext}
          overlayPadding={
            block.overlayPaddingBottom
              ? `px-4 sm:px-6 lg:px-10 ${block.overlayPaddingBottom}`
              : `px-4 sm:px-6 lg:px-10 ${OVERLAY_BOTTOM}`
          }
          contentFadeOnHover
          overlayPosition={block.overlayPosition}
          cover={fill}
        />
      </section>
    );
  }

  const overlayOpacity = block.overlayOpacity ?? 0.4;
  return (
    <section className={`group relative overflow-hidden bg-black cursor-default ${fill ? "h-full w-full" : "w-full py-12"}`}>
      <div className={`relative ${fill ? "h-full w-full" : "w-full"}`} style={fill ? undefined : aspectStyle}>
        <div className="absolute inset-0">
          <ProjectCard variant="video" fill vimeoId={vimeoId} />
        </div>
        <BlockOverlay opacity={overlayOpacity} />
      </div>
      {(header || subtext) && (
        <BlockOverlayCopy
          header={header}
          subtext={subtext}
          position={block.overlayPosition}
        />
      )}
    </section>
  );
}
