/**
 * Black overlay for block media. Fades in when mouse hovers over parent (group).
 * Use with group/group-hover on parent. opacity: 0–1, default 0.4.
 */
export default function BlockOverlay({ opacity = 0.4, className = "" }) {
  return (
    <div
      className={`absolute inset-0 z-10 pointer-events-none opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 ${className}`}
      style={{ backgroundColor: `rgba(0,0,0,${opacity})` }}
      aria-hidden
    />
  );
}
