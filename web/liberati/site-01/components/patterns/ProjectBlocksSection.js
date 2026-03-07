import BlockCopy from "@/components/patterns/BlockCopy";
import BlockVimeo from "@/components/patterns/BlockVimeo";
import BlockStill from "@/components/patterns/BlockStill";
import BlockGroup from "@/components/patterns/BlockGroup";
import { BLOCK_GAP } from "./blockUtils";

function renderBlock(block, i, opts = {}) {
  if (block.contentType === "copy") return <BlockCopy key={i} block={block} />;
  if (block.contentType === "vimeo") return <BlockVimeo key={i} block={block} fill={opts.fill} />;
  if (block.contentType === "still") return <BlockStill key={i} block={block} fill={opts.fill} />;
  if (block.contentType === "group") return <BlockGroup key={i} block={block} />;
  return null;
}

/**
 * Renders project blocks (from project.blocks). Maps block data to BlockCopy, BlockVimeo, BlockStill, BlockGroup.
 */
export const toolkitExclude = true; // composition-only
export const toolkitOrder = 999;

/** When stack is true: "full" = 16:9 (default), "half" = 32:9 (half height). */
export default function ProjectBlocksSection({ blocks, stack, stackHeight = "full" }) {
  if (!blocks?.length) return null;

  const stackAspectClass =
    stackHeight === "half" ? "aspect-[32/9]" : "aspect-video";

  return (
    <div
      className={`flex flex-col ${stack ? BLOCK_GAP : "space-y-0"}`}
      data-purpose="project-blocks"
    >
      {blocks.map((block, i) => {
        const content = renderBlock(block, i, { fill: stack });
        return stack ? (
          <div key={i} className={`w-full min-h-0 ${stackAspectClass}`}>
            {content}
          </div>
        ) : (
          content
        );
      })}
    </div>
  );
}
