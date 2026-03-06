import { type, typeServices } from "@/content/typography";

const POSITION_ALIGN = {
  "bottom-left": "text-left",
  "bottom-right": "text-right",
  "top-left": "text-left",
  "top-right": "text-right",
  center: "text-center",
};

/**
 * Copy overlay for block media. Fades in on hover. Position controls alignment.
 */
export default function BlockOverlayCopy({ header, subtext, position }) {
  if (!header && !subtext) return null;
  const alignClass = position ? POSITION_ALIGN[position] : "text-center";
  return (
    <div
      className={`px-6 pt-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${alignClass}`}
    >
      {header && (
        <p className={`${typeServices.meta} mb-4`}>{header}</p>
      )}
      {subtext && (
        <h3 className={`${type.scale.h2} ${type.mod.uppercase} text-white mb-8 max-w-4xl ${position?.includes("right") ? "ml-auto" : position?.includes("left") ? "mr-auto" : "mx-auto"}`}>
          {subtext}
        </h3>
      )}
    </div>
  );
}
