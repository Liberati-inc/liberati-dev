// Atomic typography tokens: scale + modifiers
export const type = {
  scale: {
    h0: "text-5xl md:text-8xl font-extrabold tracking-tighter uppercase",
    h1: "text-6xl md:text-7xl font-extrabold tracking-tighter uppercase",
    h2: "text-4xl md:text-5xl font-bold tracking-tight",
    h3: "text-2xl md:text-3xl font-semibold ",
    h4: "text-sm md:text-base font-semibold ",
    body: "text-lg leading-relaxed",
    micro: "text-[10px] font-bold",
  },
  mod: {
    uppercase: "uppercase",
    tightTrack: "tracking-tight",
    mediumTrack: "tracking-[0.1em]",
    wideTrack: "tracking-[0.2em]",
    widestTrack: "tracking-[0.3em]",
    wordSpacingWide: "[word-spacing:0.09em]",
    wordSpacingWider: "[word-spacing:0.12em]",
    wordSpacingWidest: "[word-spacing:0.18em]",
    muted: "text-mutedGray",
    white: "text-white",
    whiteSoft: "text-white/30",
    red: "text-liberatiRed",
    italic: "italic",
  },
} as const;

// Global roles composed from scale (+ mods where it makes sense)
export const typeRole = {
  //Landing
  landing:`${type.scale.h0} ${type.mod.wordSpacingWider}`,
  // Core copy
  body: `${type.scale.body} ${type.mod.muted} ${type.mod.wordSpacingWide}`,

  // Navigation / chrome
  navLink: `text-sm font-bold ${type.mod.mediumTrack}`,
  primaryCta: `${type.scale.micro} ${type.mod.widestTrack} ${type.mod.uppercase}`,

  // Small system labels / disclaimers
  disclaimer: `${type.scale.micro} ${type.mod.red} ${type.mod.uppercase} ${type.mod.wideTrack}`,
  toolkitLabel: `${type.scale.micro} ${type.mod.muted} ${type.mod.uppercase} ${type.mod.wideTrack}`,

  // Section labels (Toolkit only)
  sectionLabel: `${type.scale.h4} ${type.mod.muted} ${type.mod.uppercase} ${type.mod.wideTrack}`,

  // Marketing eyebrows (e.g. "What We Do")
  eyebrow: `${type.scale.micro} ${type.mod.red} ${type.mod.uppercase} ${type.mod.widestTrack}`,

  // Footer Section Labels
  footerTitle:`${type.scale.micro} ${type.mod.uppercase} ${type.mod.wideTrack} `,
  footerLink: `${type.scale.micro} ${type.mod.whiteSoft} ${type.mod.widestTrack} list-none space-y-4`,
  footerMeta: `${type.scale.micro} ${type.mod.whiteSoft} ${type.mod.widestTrack} ${type.mod.uppercase}`,
  footerMetaUpper: `${type.scale.micro} ${type.mod.whiteSoft} ${type.mod.widestTrack} ${type.mod.uppercase}`,
} as const;

// Block overlay titles — responsive for mobile/iOS (smaller than h2)
export const typeBlockOverlay = {
  title: "text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase",
} as const;

// Domain roles – services/cards, etc.
export const typeServices = {
  title: `${type.scale.h3} ${type.mod.white} ${type.mod.uppercase} ${type.mod.tightTrack}`,
  body: `${type.scale.body} ${type.mod.muted}`,
  meta: `${type.scale.micro} ${type.mod.muted} ${type.mod.uppercase} ${type.mod.widestTrack}`,
  projectCardTitle: `text-lg font-bold uppercase ${type.mod.mediumTrack} `,
} as const;

