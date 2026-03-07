import { COLS_CLASS, BLOCK_GAP } from "./blockUtils";
import BlockCopy from "./BlockCopy";
import BlockVimeo from "./BlockVimeo";
import BlockStill from "./BlockStill";

export const toolkitExclude = false;
export const toolkitOrder = 3;

export default function BlockGroup({ block = {} }) {
  const { blocks, layout = "cols", ratio } = block;
  if (!blocks?.length) return null;

  const renderBlock = (b, i, opts = {}) => {
    if (b.contentType === "copy") return <BlockCopy key={i} block={b} />;
    if (b.contentType === "vimeo") return <BlockVimeo key={i} block={b} fill={opts.fill} />;
    if (b.contentType === "still") return <BlockStill key={i} block={b} fill={opts.fill} />;
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
        ? `grid grid-cols-1 ${BLOCK_GAP} md:aspect-video md:[grid-template-columns:var(--group-ratio)]`
        : `grid grid-cols-1 ${COLS_CLASS[count]} ${BLOCK_GAP}`
      : `flex flex-col ${BLOCK_GAP}`;
  const gridStyle = useRatio
    ? { "--group-ratio": ratio.map((r) => `${r}fr`).join(" ") }
    : undefined;

  return (
    <section className="w-full">
      <div className={`max-w-7xl mx-auto ${gridClass}`} style={gridStyle}>
        {blocks.map((b, i) =>
          useRatio ? (
            <div key={i} className="min-h-0 overflow-hidden aspect-video md:aspect-auto md:h-full">
              {renderBlock(b, i, { fill: true })}
            </div>
          ) : (
            <div key={i} className="w-full min-w-0">{renderBlock(b, i)}</div>
          )
        )}
      </div>
    </section>
  );
}
