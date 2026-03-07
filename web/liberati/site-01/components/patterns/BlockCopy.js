import BlockTitle from "@/components/blocks/BlockTitle";
import { BLOCK_CONTENT_PAD_Y } from "@/components/patterns/blockUtils";
import { typeRole } from "@/content/typography";

export const toolkitExclude = false;
export const toolkitOrder = 1;

export default function BlockCopy({ block = {} }) {
  const { header, subtext } = block;
  return (
    <div className={`w-full min-w-0 ${BLOCK_CONTENT_PAD_Y}`}>
      <div className="w-full">
        {header && <BlockTitle compact>{header}</BlockTitle>}
        {subtext && <div className="w-full"><p className={typeRole.body}>{subtext}</p></div>}
      </div>
    </div>
  );
}
