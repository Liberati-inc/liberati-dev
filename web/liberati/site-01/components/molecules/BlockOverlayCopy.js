import { type, typeServices, typeBlockOverlay } from "@/content/typography";

const POSITION_ALIGN = {
  "bottom-left": "text-left",
  "bottom-right": "text-right",
  "top-left": "text-left",
  "top-right": "text-right",
  center: "text-center",
};

/**
 * Copy below block media. Fades in on hover (desktop); always visible on touch.
 */
export default function BlockOverlayCopy({ header, subtext, position }) {
  if (!header && !subtext) return null;
  const alignClass = position ? POSITION_ALIGN[position] : "text-center";
  return (
    <div
      className={`px-4 sm:px-6 pt-4 opacity-100 md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100 ${alignClass}`}
    >
      {header && (
        <p className={`${typeServices.meta} mb-2 sm:mb-4`}>{header}</p>
      )}
      {subtext && (
        <h3 className={`${typeBlockOverlay.title} ${type.mod.white} mb-4 sm:mb-8 max-w-[85%] sm:max-w-4xl ${position?.includes("right") ? "ml-auto" : position?.includes("left") ? "mr-auto" : "mx-auto"}`}>
          {subtext}
        </h3>
      )}
    </div>
  );
}
