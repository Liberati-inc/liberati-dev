import { typeServices } from "@/content/typography";

/**
 * Block section title with horizontal line (gallery-style).
 * Use for copy headers, gallery sectionTitle, and other block titles.
 * compact = less margin below (for copy blocks).
 */
export default function BlockTitle({ children, compact, className = "" }) {
  if (!children) return null;
  const marginClass = compact ? "mb-6" : "mb-12";
  return (
    <h2
      className={`${typeServices.meta} ${marginClass} border-b border-white/10 pb-6 ${className}`}
    >
      {children}
    </h2>
  );
}
