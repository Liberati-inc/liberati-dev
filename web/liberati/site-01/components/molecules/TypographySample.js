export default function TypographySample({ label, as: Tag = "p", className, children }) {
  return (
    <div>
      <span className="text-white/30 text-xs mb-2 block">{label}</span>
      <Tag className={className}>{children}</Tag>
    </div>
  );
}

