import BlockCopy from "@/components/molecules/BlockCopy";
import BlockVimeo from "@/components/molecules/BlockVimeo";
import BlockStill from "@/components/molecules/BlockStill";
import BlockGallery from "@/components/molecules/BlockGallery";
import BlockGroup from "@/components/molecules/BlockGroup";

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
export default function ProjectBlocksSection({ blocks }) {
  if (!blocks?.length) return null;

  return (
    <div className="space-y-0" data-purpose="project-blocks">
      {blocks.map((block, i) => renderBlock(block, i))}
    </div>
  );
}
