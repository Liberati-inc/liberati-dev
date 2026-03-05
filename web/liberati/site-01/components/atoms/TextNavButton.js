import { typeRole } from "@/content/typography";

export default function TextNavButton({
  children,
  href = "#",
  active = false,
  className = "",
}) {
  const base = `${typeRole.navLink} transition-colors`;
  const idleColors = "text-mutedGray hover:text-white";
  const activeColors = "text-liberatiRed";

  const colors = active ? activeColors : idleColors;

  return (
    <a href={href} className={`${base} ${colors} ${className}`}>
      {children}
    </a>
  );
}

