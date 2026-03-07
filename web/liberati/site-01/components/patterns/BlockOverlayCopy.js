import FadeOnHover from "@/components/blocks/FadeOnHover";
import ProjectLink from "@/components/blocks/ProjectLink";
import { type, typeBlockOverlay } from "@/content/typography";

const POSITION_ALIGN = {
  "bottom-left": "text-left justify-start",
  "bottom-right": "text-right justify-end",
  "top-left": "text-left justify-start",
  "top-right": "text-right justify-end",
  center: "text-center justify-center",
};

const POSITION_FLEX = {
  "bottom-left": "items-end justify-start",
  "bottom-right": "items-end justify-end",
  "top-left": "items-start justify-start",
  "top-right": "items-start justify-end",
  center: "items-center justify-center",
};

/**
 * Overlay copy on block media. Canonical: bottom-left, header + subtext + View Project link.
 * Fades in on hover (desktop); always visible on touch.
 */
export const toolkitExclude = true; // composition-only
export const toolkitOrder = 999;

export default function BlockOverlayCopy({ header, subtext, position = "bottom-left", href, overlay = true }) {
  if (!header && !subtext && !href) return null;
  const alignClass = POSITION_ALIGN[position] ?? POSITION_ALIGN["bottom-left"];
  const flexClass = POSITION_FLEX[position] ?? POSITION_FLEX["bottom-left"];

  const content = (
    <FadeOnHover className={`px-4 sm:px-6 py-4 ${alignClass}`}>
      {header && (
        <p className={`${typeBlockOverlay.header} ${type.mod.white} mb-2 sm:mb-4`}>{header}</p>
      )}
      {subtext && (
        <p className={`${typeBlockOverlay.subtext} ${type.mod.whiteSoft} mb-4 sm:mb-8 max-w-[85%] sm:max-w-4xl ${position?.includes("right") ? "ml-auto" : position?.includes("left") ? "mr-auto" : "mx-auto"}`}>
          {subtext}
        </p>
      )}
      {href && <ProjectLink href={href} label="VIEW PROJECT" className="mt-2" />}
    </FadeOnHover>
  );

  if (overlay) {
    return (
      <div className={`absolute inset-0 flex ${flexClass} pointer-events-none`}>
        <div className="pointer-events-auto">{content}</div>
      </div>
    );
  }
  return content;
}
