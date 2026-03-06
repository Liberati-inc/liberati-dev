export const toolkitExclude = true; // composition-only
export const toolkitOrder = 999;

export default function TypographySample({ label, as: Tag = "p", className, sample }) {
  return (
    <div>
      <span className="text-white/30 text-xs mb-2 block">{label}</span>
      <Tag className={className}>{sample}</Tag>
    </div>
  );
}

