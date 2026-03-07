import ProjectCard from "@/components/patterns/ProjectCard";
import BlockOverlay from "@/components/patterns/BlockOverlay";
import BlockOverlayCopy from "@/components/patterns/BlockOverlayCopy";
import FadeOnHover from "@/components/blocks/FadeOnHover";
import { type, typeBlockOverlay } from "@/content/typography";
import { getAspectStyle, getStillOverlayPositionClass, OVERLAY_BOTTOM } from "./blockUtils";

export const toolkitExclude = false;
export const toolkitOrder = 4;

export default function BlockStill({ block, fill }) {
  const { imageUrl, header, subtext } = block;
  const variant = block.variant ?? "video";
  const aspectStyle = getAspectStyle(block);

  if (variant === "thumb") {
    return (
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <ProjectCard
          variant="thumb"
          stillImage={imageUrl}
          title={header}
          meta={subtext}
        />
      </div>
    );
  }

  if (variant === "hero") {
    if (!imageUrl) return null;
    const overlayOpacity = block.overlayOpacity ?? 0.4;
    const overlayPadding = block.overlayPaddingBottom ?? OVERLAY_BOTTOM;
    return (
      <figure
        className={`group relative overflow-hidden bg-black cursor-default ${fill ? "h-full w-full min-h-0" : "w-full"}`}
        style={fill ? undefined : aspectStyle}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <BlockOverlay opacity={overlayOpacity} />
        <div className="absolute inset-0 z-[11] bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
        {(header || subtext) && (
          <FadeOnHover
            as="figcaption"
            className={`absolute z-20 max-w-[85%] sm:max-w-2xl ${getStillOverlayPositionClass(block.overlayPosition)} ${block.overlayPaddingBottom ? `px-4 sm:px-6 lg:px-10 ${block.overlayPaddingBottom}` : `px-4 sm:px-6 lg:px-10 ${overlayPadding}`}`}
          >
            {header && <p className={`${typeBlockOverlay.header} ${type.mod.white} mb-1 sm:mb-2`}>{header}</p>}
            {subtext && <p className={`${typeBlockOverlay.subtext} ${type.mod.whiteSoft}`}>{subtext}</p>}
          </FadeOnHover>
        )}
      </figure>
    );
  }

  if (!imageUrl) return null;
  const overlayOpacity = block.overlayOpacity ?? 0.4;
  return (
    <section className={`group relative overflow-hidden bg-black cursor-default ${fill ? "h-full w-full" : "w-full py-12"}`}>
      <div className={`relative ${fill ? "h-full w-full min-h-0" : "w-full"}`} style={fill ? undefined : aspectStyle}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
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
