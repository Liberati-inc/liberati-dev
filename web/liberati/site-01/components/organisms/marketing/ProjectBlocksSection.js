import { type, typeRole, typeServices } from "@/content/typography";

/** Default aspect ratio for video/still containers. */
const DEFAULT_ASPECT = "16:9";

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

/** Renders project blocks (vimeo, copy, still, gallery) in a stack. */
function BlockCopy({ block }) {
  const { header, subtext } = block;
  return (
    <div className="max-w-3xl">
      {header && (
        <h2 className={`${type.scale.h2} ${type.mod.uppercase} text-white mb-4`}>{header}</h2>
      )}
      {subtext && <p className={typeRole.body}>{subtext}</p>}
    </div>
  );
}

function BlockVimeo({ block }) {
  const { vimeoId, header, subtext } = block;
  const aspectStyle = getAspectStyle(block);

  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden bg-black"
      style={aspectStyle}
    >
      <div className="absolute inset-0 z-0">
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=0&muted=0`}
          className="absolute inset-0 w-full h-full pointer-events-auto"
          allow="fullscreen"
          title={header || "Video"}
        />
      </div>
      {(header || subtext) && (
        <div className="relative z-10 text-center px-6">
          {header && (
            <p className={`${typeServices.meta} mb-4`}>{header}</p>
          )}
          {subtext && (
            <h3 className={`${type.scale.h2} ${type.mod.uppercase} text-white mb-8 max-w-4xl mx-auto`}>
              {subtext}
            </h3>
          )}
        </div>
      )}
    </section>
  );
}

function BlockStill({ block }) {
  const { imageUrl, header, subtext } = block;
  const aspectStyle = getAspectStyle(block);
  return (
    <figure className="space-y-4">
      <div
        className="w-full bg-white/5 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})`, ...aspectStyle }}
      />
      {(header || subtext) && (
        <figcaption className="px-6 max-w-7xl mx-auto">
          {header && <p className={`${typeRole.disclaimer} text-white`}>{header}</p>}
          {subtext && <p className={`${typeServices.body} text-white`}>{subtext}</p>}
        </figcaption>
      )}
    </figure>
  );
}

function BlockGallery({ block }) {
  const { sectionTitle, images } = block;
  const cols = images.length >= 6 ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1 md:grid-cols-3";

  return (
    <section className="py-24 px-6 md:px-16 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        {sectionTitle && (
          <h2 className={`${typeServices.meta} mb-12 border-b border-white/10 pb-6`}>
            {sectionTitle}
          </h2>
        )}
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

export default function ProjectBlocksSection({ blocks }) {
  if (!blocks?.length) return null;

  const contentBlocks = blocks.filter((b) => b.type !== "preview-vimeo");

  return (
    <div className="space-y-0" data-purpose="project-blocks">
      {contentBlocks.map((block, i) => {
        if (block.type === "copy") return <BlockCopy key={i} block={block} />;
        if (block.type === "vimeo") return <BlockVimeo key={i} block={block} />;
        if (block.type === "still") return <BlockStill key={i} block={block} />;
        if (block.type === "gallery") return <BlockGallery key={i} block={block} />;
        return null;
      })}
    </div>
  );
}
