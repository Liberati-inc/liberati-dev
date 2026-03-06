import { typeServices } from "@/content/typography";

/**
 * Block section title with horizontal line (gallery-style).
 * Use for copy headers, gallery sectionTitle, and other block titles.
 * compact = less margin below (for copy blocks).
 */
export const toolkitExclude = true; // composition-only
export const toolkitOrder = 999;

export default function BlockTitle({ label, compact, className = "" }) {
  if (!label) return null;
  const marginClass = compact ? "mb-6" : "mb-12";
  return (
    <h2
      className={`${typeServices.meta} ${marginClass} border-b border-white/10 pb-6 ${className}`}
    >
      {label}
    </h2>
  );
}
