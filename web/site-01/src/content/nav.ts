import type { NavItem, SocialLink } from "./types";

// Top nav categories (Brands, Series & Film, Interactive)
export const mainNav: NavItem[] = [
  { id: "brands", label: "Brands", href: "#brands" },
  { id: "series-film", label: "Series & Film", href: "#series-film" },
  { id: "interactive", label: "Interactive", href: "#interactive" },
];

export const footerSocial: SocialLink[] = [
  { id: "public", icon: "public", href: "#" },
  { id: "video", icon: "video_library", href: "#" },
  { id: "camera", icon: "camera", href: "#" },
];

