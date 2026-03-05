export default function ColorSwatch({ name, hex, swatchClass, nameClass }) {
  return (
    <div className="space-y-2">
      <div className={`h-32 w-full rounded-sm ${swatchClass}`} />
      <p className={`text-sm font-bold ${nameClass ?? ""}`}>{name}</p>
      <p className="text-xs text-mutedGray">{hex}</p>
    </div>
  );
}

