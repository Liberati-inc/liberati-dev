"use client";

import { usePathname } from "next/navigation";
import { typeRole } from "@/content/typography";

export const toolkitExclude = false;
export const toolkitOrder = 5;

export default function TextNavButton({
  label,
  href = "#",
  active = false,
  className = "",
}) {
  const pathname = usePathname();
  const base = `${typeRole.navLink} transition-colors inline-block pb-1.5 border-b-2`;
  const idleColors = "text-mutedGray hover:text-white border-transparent";
  const activeColors = "text-mutedGray border-liberatiRed";

  const colors = active ? activeColors : idleColors;

  const handleClick = (e) => {
    const hash = href?.match(/#(.+)/)?.[1];
    if (hash && pathname === "/") {
      e.preventDefault();
      window.history.pushState(null, "", href);
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={`${base} ${colors} ${className}`}>
      {label}
    </a>
  );
}

