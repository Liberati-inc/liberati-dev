/**
 * Toolkit page navigation. Organizes sections into Brand, Atoms, Molecules, Organisms.
 * Used by TK_Header for in-page anchor links.
 */
export const tkNav = [
  { id: "brand", label: "Brand", href: "#brand" },
  { id: "atoms", label: "Atoms", href: "#atoms" },
  { id: "molecules", label: "Molecules", href: "#molecules" },
  { id: "organisms", label: "Organisms", href: "#organisms" },
] as const;
