import SvgIcon from "@/components/atoms/SvgIcon";

export default function SvgButton({
  variant,
  materialIcon,
  label,
  href = "#",
  kind = "circle", // "circle" (About) or "footer"
  className = "",
}) {
  if (kind === "footer") {
    const base =
      "text-white hover:text-liberatiRed transition-colors inline-flex items-center justify-center";

    return (
      <a href={href} className={`${base} ${className}`}>
        {materialIcon ? (
          <span className="material-symbols-outlined">{materialIcon}</span>
        ) : (
          <SvgIcon variant={variant} sizeClass="w-5 h-5" colorClass="" />
        )}
        <span className="sr-only">{label}</span>
      </a>
    );
  }

  const baseCircle =
    "w-12 h-12 rounded-full border-2 border-mutedGray/25 flex items-center justify-center hover:bg-white hover:text-black transition-all text-slate-100";

  return (
    <a href={href} className={`${baseCircle} ${className}`}>
      {materialIcon ? (
        <span className="material-symbols-outlined">{materialIcon}</span>
      ) : (
        <SvgIcon variant={variant} />
      )}
      <span className="sr-only">{label}</span>
    </a>
  );
}



