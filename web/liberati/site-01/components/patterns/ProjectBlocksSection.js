import BlockCopy from "@/components/patterns/BlockCopy";
import BlockVimeo from "@/components/patterns/BlockVimeo";
import BlockStill from "@/components/patterns/BlockStill";
import BlockGallery from "@/components/patterns/BlockGallery";
import BlockGroup from "@/components/patterns/BlockGroup";

function renderBlock(block, i, opts = {}) {
  if (block.contentType === "copy") return <BlockCopy key={i} block={block} />;
  if (block.contentType === "vimeo") return <BlockVimeo key={i} block={block} fill={opts.fill} />;
  if (block.contentType === "still") return <BlockStill key={i} block={block} fill={opts.fill} />;
  if (block.contentType === "gallery") return <BlockGallery key={i} block={block} />;
  if (block.contentType === "group") return <BlockGroup key={i} block={block} />;
  return null;
}

/**
 * Renders project blocks (from project.blocks). Maps block data to BlockCopy, BlockVimeo, BlockStill, BlockGallery, BlockGroup.
 */
export const toolkitExclude = true; // composition-only
export const toolkitOrder = 999;

export default function ProjectBlocksSection({ blocks }) {
  if (!blocks?.length) return null;

  return (
    <div className="space-y-0" data-purpose="project-blocks">
      {blocks.map((block, i) => renderBlock(block, i))}
    </div>
  );
}
