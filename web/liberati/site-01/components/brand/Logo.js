import SvgIcon from "@/components/blocks/SvgIcon";

/**
 * Liberati logo: wing + wordmark. Same as SiteHeader top nav.
 * @param {string} [size] - "sm" (footer) or "md" (header). Default "md"
 */
export const toolkitExclude = false;
export const toolkitOrder = 0;

export default function Logo({ size = "md", className = "" }) {
  const wingSize = size === "sm" ? "h-5 w-auto" : "h-6 w-auto";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <SvgIcon variant="wing" sizeClass={wingSize} />
      <SvgIcon variant="wordmark" sizeClass="h-4 w-auto" colorClass="text-white" />
    </div>
  );
}
