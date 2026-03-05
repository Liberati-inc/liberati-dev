import { typeRole } from "@/content/typography";

/**
 * View Project–style CTA link. Unified hover: text + arrow turn liberatiRed, arrow slides right.
 * Use in ProjectHero overlay, toolkit, etc.
 */
export default function ProjectLink({ href, children = "VIEW PROJECT", className = "" }) {
  return (
    <a
      href={href}
      className={`group flex items-center text-white hover:text-liberatiRed transition-colors ${typeRole.primaryCta} ${className}`}
    >
      {children}
      <span className="ml-2 hover-arrow">→</span>
    </a>
  );
}
