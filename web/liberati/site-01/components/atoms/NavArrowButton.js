"use client";

import SvgIcon from "@/components/atoms/SvgIcon";

export const toolkitExclude = false;
export const toolkitOrder = 6;

/**
 * Nav arrow for carousels (prev/next). Use in FeaturedSection, galleries, etc.
 */
export default function NavArrowButton({ direction, onClick, ariaLabel, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-white/25 flex items-center justify-center text-white/80 hover:text-white hover:border-liberatiRed/100 transition-colors ${
        direction === "prev" ? "left-4" : "right-4"
      } ${className}`}
      aria-label={ariaLabel}
    >
      <SvgIcon
        variant={direction === "prev" ? "chevronLeft" : "chevronRight"}
        sizeClass="w-5 h-5"
        colorClass="currentColor"
      />
    </button>
  );
}
