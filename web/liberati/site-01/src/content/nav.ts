import type { NavItem, SocialLink } from "./types";

// Top nav categories (Brands, Series & Film, Interactive)
export const mainNav: NavItem[] = [
  { id: "about", label: "About", href: "/#about" },
  { id: "projects", label: "Projects", href: "/projects" },
];

export const footerSocial: SocialLink[] = [
  { id: "public", icon: "public", href: "#" },
  { id: "video", icon: "video_library", href: "#" },
  { id: "camera", icon: "camera", href: "#" },
];

