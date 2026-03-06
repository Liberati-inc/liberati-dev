import { typeRole } from "@/content/typography";

export const toolkitExclude = false;

export default function FilterPill({
  label,
  active = false,
  variant = "filter", // "filter" (03. UI Elements) or "nav" (top nav)
  state, // optional: "idle" | "hover" | "active" for docs/toolkit
}) {
  if (variant === "nav") {
    const base = `px-0 py-0 ${typeRole.navLink} transition-colors hover:text-liberatiRed`;
    const activeClasses = "";

    return (
      <button className={`${base} ${active ? activeClasses : ""}`}>
        {label}
      </button>
    );
  }

  const base = `border border-white/20 px-6 py-2 ${typeRole.primaryCta} transition-colors`;

  const activeClasses = "bg-white text-black";
  const hoverClasses = "bg-white/10";
  const idleClasses = "hover:bg-white/10";

  let stateClasses = idleClasses;
  if (state === "hover") stateClasses = hoverClasses;
  if (state === "active" || active) stateClasses = activeClasses;

  return (
    <button className={`${base} ${stateClasses}`}>
      {label}
    </button>
  );
}

