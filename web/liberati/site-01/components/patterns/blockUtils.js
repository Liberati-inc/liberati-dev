/** Default aspect ratio for video/still containers. */
export const DEFAULT_ASPECT = "16:9";

/** Gap between blocks in stack. Uses tokens from globals.css (--block-gap*). */
export const BLOCK_GAP = "gap-block sm:gap-block-sm md:gap-block-md";

/** Section padding for block sections. Uses tokens from globals.css (--block-pad-*). */
export const BLOCK_SECTION_PAD = "px-block-x py-block-y md:px-block-x-md";

/** Content padding for individual blocks (BlockCopy, BlockVimeo thumb, BlockStill thumb). */
export const BLOCK_CONTENT_PAD = "px-block-x py-block-content-y md:px-block-x-md md:py-block-content-y-md";

/** Vertical-only padding for blocks that fill width (BlockVimeo/BlockStill user variant). */
export const BLOCK_CONTENT_PAD_Y = "py-block-content-y md:py-block-content-y-md";

/** Shared bottom padding for overlay copy — responsive for safe area on mobile. */
export const OVERLAY_BOTTOM = "pb-6 pt-4 md:pb-6 md:pt-0";

/** overlayPosition → figcaption position classes for still hero. */
export function getStillOverlayPositionClass(position) {
  const map = {
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };
  return map[position] ?? "bottom-0 left-0";
}

/** Parse aspectRatio string ("16:9") or resolution { width, height } into aspect-ratio CSS value. */
export function getAspectStyle(block) {
  const aspectRatio = block.aspectRatio ?? block.resolution ?? DEFAULT_ASPECT;
  if (typeof aspectRatio === "object" && aspectRatio.width && aspectRatio.height) {
    return { aspectRatio: `${aspectRatio.width} / ${aspectRatio.height}` };
  }
  const str = String(aspectRatio);
  if (/^\d+:\d+$/.test(str)) {
    const [w, h] = str.split(":").map(Number);
    return { aspectRatio: `${w} / ${h}` };
  }
  return { aspectRatio: "16 / 9" };
}

export const COLS_CLASS = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};
