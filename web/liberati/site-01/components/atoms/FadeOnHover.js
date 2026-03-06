/**
 * Wraps content that fades in on hover (desktop). Always visible on touch.
 * Parent must have `group` class for md:group-hover:opacity-100 to work.
 * When when=false, renders without fade (always visible).
 */
export const toolkitExclude = true; // composition-only
export const toolkitOrder = 999;

const FADE_ON_HOVER_CLASS =
  "opacity-100 md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100";

export default function FadeOnHover({
  content,
  children,
  className = "",
  as: Component = "div",
  when = true,
}) {
  const inner = content ?? children;
  const baseClass = when ? FADE_ON_HOVER_CLASS : "opacity-100";
  return (
    <Component className={`${baseClass} ${className}`.trim()}>
      {inner}
    </Component>
  );
}
