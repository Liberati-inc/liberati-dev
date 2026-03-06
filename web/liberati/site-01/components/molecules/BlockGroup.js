import { COLS_CLASS } from "./blockUtils";
import BlockCopy from "./BlockCopy";
import BlockVimeo from "./BlockVimeo";
import BlockStill from "./BlockStill";
import BlockGallery from "./BlockGallery";

export default function BlockGroup({ block = {} }) {
  const { blocks, layout = "cols", ratio } = block;
  if (!blocks?.length) return null;

  const renderBlock = (b, i, opts = {}) => {
    if (b.contentType === "copy") return <BlockCopy key={i} block={b} />;
    if (b.contentType === "vimeo") return <BlockVimeo key={i} block={b} fill={opts.fill} />;
    if (b.contentType === "still") return <BlockStill key={i} block={b} fill={opts.fill} />;
    if (b.contentType === "gallery") return <BlockGallery key={i} block={b} />;
    if (b.contentType === "group") return <BlockGroup key={i} block={b} />;
    return null;
  };
  const count = Math.min(blocks.length, 4);
  const useRatio =
    layout === "cols" &&
    ratio?.length === blocks.length &&
    ratio.every((r) => typeof r === "number" && r > 0);
  const gridClass =
    layout === "cols"
      ? useRatio
        ? "grid grid-cols-1 gap-3 sm:gap-4 md:gap-6 md:aspect-video md:[grid-template-columns:var(--group-ratio)]"
        : `grid grid-cols-1 ${COLS_CLASS[count]} gap-3 sm:gap-4 md:gap-6`
      : "flex flex-col gap-3 sm:gap-4 md:gap-6";
  const gridStyle = useRatio
    ? { "--group-ratio": ratio.map((r) => `${r}fr`).join(" ") }
    : undefined;

  return (
    <section className="w-full px-6 py-3 md:px-16 md:py-3">
      <div className={`max-w-7xl mx-auto ${gridClass}`} style={gridStyle}>
        {blocks.map((b, i) =>
          useRatio ? (
            <div key={i} className="min-h-0 overflow-hidden aspect-video md:aspect-auto md:h-full">
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
