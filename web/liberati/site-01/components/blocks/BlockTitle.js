import { typeBlockTitle } from "@/content/typography";

/**
 * Block section title with horizontal line (gallery-style).
 * Use for copy headers, gallery sectionTitle, and other block titles.
 * @param {React.ReactNode} children - Title text (required)
 * @param {string} [token] - Typography token class (default: typeBlockTitle). Pass a token to override and see changes.
 * @param {boolean} [compact] - Less margin below (for copy blocks)
 * @param {string} [className] - Extra classes
 */
export const toolkitExclude = false;
export const toolkitOrder = 999;

export default function BlockTitle({ children, token, compact, className = "" }) {
  if (!children) return null;
  const typeClass = token ?? typeBlockTitle;
  const marginClass = compact ? "mb-6" : "mb-12";
  return (
    <h2
      className={`${typeClass} ${marginClass} border-b border-white/10 pb-6 ${className}`}
    >
      {children}
    </h2>
  );
}
