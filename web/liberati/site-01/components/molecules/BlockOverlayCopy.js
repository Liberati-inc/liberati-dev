import FadeOnHover from "@/components/atoms/FadeOnHover";
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
export const toolkitExclude = true; // composition-only
export const toolkitOrder = 999;

export default function BlockOverlayCopy({ header, subtext, position }) {
  if (!header && !subtext) return null;
  const alignClass = position ? POSITION_ALIGN[position] : "text-center";
  return (
    <FadeOnHover className={`px-4 sm:px-6 pt-4 ${alignClass}`}>
      {header && (
        <p className={`${typeServices.meta} mb-2 sm:mb-4`}>{header}</p>
      )}
      {subtext && (
        <h3 className={`${typeBlockOverlay.title} ${type.mod.white} mb-4 sm:mb-8 max-w-[85%] sm:max-w-4xl ${position?.includes("right") ? "ml-auto" : position?.includes("left") ? "mr-auto" : "mx-auto"}`}>
          {subtext}
        </h3>
      )}
    </FadeOnHover>
  );
}
