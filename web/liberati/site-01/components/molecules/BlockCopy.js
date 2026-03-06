import BlockTitle from "@/components/molecules/BlockTitle";
import { typeRole } from "@/content/typography";

export default function BlockCopy({ block }) {
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
