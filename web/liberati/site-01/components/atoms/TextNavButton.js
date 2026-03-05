import { typeRole } from "@/content/typography";

export default function TextNavButton({
  children,
  href = "#",
  active = false,
  className = "",
}) {
  const base = `${typeRole.navLink} transition-colors inline-block pb-1.5 border-b-2`;
  const idleColors = "text-mutedGray hover:text-white border-transparent";
  const activeColors = "text-mutedGray border-liberatiRed";

  const colors = active ? activeColors : idleColors;

  return (
    <a href={href} className={`${base} ${colors} ${className}`}>
      {children}
    </a>
  );
}

