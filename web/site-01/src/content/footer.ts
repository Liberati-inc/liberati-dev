import type { FooterLinkGroup } from "./types";

/** Footer tagline, copyright, and bottom meta — edit here. */
export const footerCopy = {
  tagline:
    "Elevating brands through cinematic digital experiences. Liberate your ideas",
  copyright: "© 2026 Liberati, Inc. All Rights Reserved.",
  locationMeta: "Remote Only / On-Site ( TBD )",
};

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    id: "navigation",
    title: "Navigation",
    links: [
      { label: "About", href: "/#about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    id: "social",
    title: "Social",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Vimeo", href: "#" },
    ],
  },
];

