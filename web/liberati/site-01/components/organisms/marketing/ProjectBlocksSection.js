import { type, typeRole, typeServices } from "@/content/typography";
import ProjectCard from "@/components/molecules/ProjectCard";
import BlockTitle from "@/components/molecules/BlockTitle";
import BlockOverlay from "@/components/molecules/BlockOverlay";
import BlockOverlayCopy from "@/components/molecules/BlockOverlayCopy";

/** Default aspect ratio for video/still containers. */
const DEFAULT_ASPECT = "16:9";

/** Shared bottom padding for overlay copy — use everywhere for consistency. */
const OVERLAY_BOTTOM = "pb-16 md:pb-6";

/** overlayPosition → figcaption position classes for still hero. */
function getStillOverlayPositionClass(position) {
  const map = {
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };
  return map[position] ?? "bottom-0 left-0";
}

/** Parse aspectRatio string ("16:9") or resolution { width, height } into aspect-ratio CSS value. */
function getAspectStyle(block) {
  const aspectRatio = block.aspectRatio ?? block.resolution ?? DEFAULT_ASPECT;
  if (typeof aspectRatio === "object" && aspectRatio.width && aspectRatio.height) {
    return { aspectRatio: `${aspectRatio.width} / ${aspectRatio.height}` };
  }
  const str = String(aspectRatio);
  if (/^\d+:\d+$/.test(str)) {
    const [w, h] = str.split(":").map(Number);
    return { aspectRatio: `${w} / ${h}` };
  }
  return { aspectRatio: "16 / 9" };
}

/** Renders project blocks (copy, vimeo, still, gallery) in a stack. */
function BlockCopy({ block }) {
  const { header, subtext } = block;
  return (
    <div className="px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto">
        {header && <BlockTitle compact>{header}</BlockTitle>}
        {subtext && <div className="max-w-3xl"><p className={typeRole.body}>{subtext}</p></div>}
      </div>
    </div>
  );
}

function BlockVimeo({ block, fill }) {
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
              ? `px-6 lg:px-10 ${block.overlayPaddingBottom}`
              : `px-6 lg:px-10 ${OVERLAY_BOTTOM}`
          }
          contentFadeOnHover
          overlayPosition={block.overlayPosition}
          cover={fill}
        />
      </section>
    );
  }

  // Default: video (embed only)
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

function BlockStill({ block, fill }) {
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
    const overlayOpacity = block.overlayOpacity ?? 0.4;
    return (
      <figure
        className={`group relative overflow-hidden bg-black cursor-default ${fill ? "h-full w-full" : "w-full"}`}
        style={fill ? undefined : aspectStyle}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <BlockOverlay opacity={overlayOpacity} />
        <div className="absolute inset-0 z-[11] bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
        {(header || subtext) && (
          <figcaption
            className={`absolute z-20 max-w-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${getStillOverlayPositionClass(block.overlayPosition)} ${block.overlayPaddingBottom ? `px-6 md:px-10 ${block.overlayPaddingBottom}` : `px-6 md:px-10 ${OVERLAY_BOTTOM}`}`}
          >
            {header && <p className={`${type.scale.h2} ${type.mod.uppercase} text-white mb-2`}>{header}</p>}
            {subtext && <p className={`${typeServices.meta} ${type.mod.whiteSoft}`}>{subtext}</p>}
          </figcaption>
        )}
      </figure>
    );
  }

  // Default: video (image only) — overlay + hover copy like vimeo video
  const overlayOpacity = block.overlayOpacity ?? 0.4;
  return (
    <section className={`group relative overflow-hidden bg-black cursor-default ${fill ? "h-full w-full" : "w-full py-12"}`}>
      <div className={`relative ${fill ? "h-full w-full" : "w-full"}`} style={fill ? undefined : aspectStyle}>
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

function BlockGallery({ block }) {
  const { sectionTitle, images } = block;
  const cols = images.length >= 6 ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1 md:grid-cols-3";

  return (
    <section className="py-24 px-6 md:px-16 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        {sectionTitle && <BlockTitle>{sectionTitle}</BlockTitle>}
        <div className={`grid ${cols} gap-4 md:gap-8`}>
          {images.map((img, i) => {
            const aspectStyle = getAspectStyle({ ...block, ...img });
            return (
            <div key={i} className="group relative overflow-hidden bg-white/5" style={aspectStyle}>
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url(${img.imageUrl})` }}
              />
              {img.caption && (
                <div className="absolute bottom-4 left-4">
                  <p className={`${typeRole.disclaimer} text-white`}>{img.caption}</p>
                </div>
              )}
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}

function renderBlock(block, i, opts = {}) {
  if (block.contentType === "copy") return <BlockCopy key={i} block={block} />;
  if (block.contentType === "vimeo") return <BlockVimeo key={i} block={block} fill={opts.fill} />;
  if (block.contentType === "still") return <BlockStill key={i} block={block} fill={opts.fill} />;
  if (block.contentType === "gallery") return <BlockGallery key={i} block={block} />;
  if (block.contentType === "group") return <BlockGroup key={i} block={block} />;
  return null;
}

const COLS_CLASS = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

function BlockGroup({ block }) {
  const { blocks, layout = "cols", ratio } = block;
  if (!blocks?.length) return null;
  const count = Math.min(blocks.length, 4);
  const useRatio =
    layout === "cols" &&
    ratio?.length === blocks.length &&
    ratio.every((r) => typeof r === "number" && r > 0);
  const gridClass =
    layout === "cols"
      ? useRatio
        ? "grid grid-cols-1 gap-4 md:gap-6 md:aspect-video md:[grid-template-columns:var(--group-ratio)]"
        : `grid grid-cols-1 ${COLS_CLASS[count]} gap-4 md:gap-6`
      : "flex flex-col gap-4 md:gap-6";
  const gridStyle = useRatio
    ? { "--group-ratio": ratio.map((r) => `${r}fr`).join(" ") }
    : undefined;
  return (
    <section className="w-full px-6 py-3 md:px-16 md:py-3">
      <div className={`max-w-7xl mx-auto ${gridClass}`} style={gridStyle}>
        {blocks.map((b, i) =>
          useRatio ? (
            <div key={i} className="min-h-0 overflow-hidden md:h-full">
              {renderBlock(b, i, { fill: true })}
            </div>
          ) : (
            <div key={i}>{renderBlock(b, i)}</div>
          )
        )}
      </div>
    </section>
  );
}

export default function ProjectBlocksSection({ blocks }) {
  if (!blocks?.length) return null;

  return (
    <div className="space-y-0" data-purpose="project-blocks">
      {blocks.map((block, i) => renderBlock(block, i))}
    </div>
  );
}
