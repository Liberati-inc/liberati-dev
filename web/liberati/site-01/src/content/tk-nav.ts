/**
 * Toolkit page navigation. Organizes sections into Brand, Blocks, Patterns, Sections.
 * Used by TK_Header for in-page anchor links.
 */
export const tkNav = [
  { id: "brand", label: "Brand", href: "#brand" },
  { id: "blocks", label: "Blocks", href: "#blocks" },
  { id: "patterns", label: "Patterns", href: "#patterns" },
  { id: "sections", label: "Sections", href: "#sections" },
] as const;
