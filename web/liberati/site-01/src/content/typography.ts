// Atomic typography tokens: scale (size/weight) + font (family) + mod (color/tracking/etc)
// Scale ordered largest → smallest: display, h1–h4, body, bodySm, caption, overlay
export const type = {
  scale: {
    display: "text-5xl md:text-8xl font-extrabold tracking-tighter uppercase",
    h1: "text-6xl md:text-7xl font-extrabold tracking-tighter uppercase",
    h2: "text-4xl md:text-5xl font-bold tracking-tight",
    h3: "text-2xl md:text-3xl font-semibold",
    h4: "text-sm md:text-base font-semibold",
    body: "text-lg leading-relaxed",
    bodySm: "text-sm font-bold",
    caption: "text-[12px] font-bold",
    overlay: "text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase",
  },
  font: {
    mono: "font-mono",
  },
  mod: {
    bold: "font-bold",
    uppercase: "uppercase",
    tightTrack: "tracking-tight",
    tighterTrack: "tracking-tighter",
    mediumTrack: "tracking-[0.1em]",
    wideTrack: "tracking-[0.2em]",
    widestTrack: "tracking-[0.3em]",
    wordSpacingWide: "[word-spacing:0.09em]",
    wordSpacingWider: "[word-spacing:0.12em]",
    muted: "text-mutedGray",
    white: "text-white",
    whiteSoft: "text-white/30",
    red: "text-liberatiRed",
  },
} as const;

// Global roles composed from scale (+ mods where it makes sense)
export const typeRole = {
 // Section labels (Toolkit only)
 sectionLabel: `${type.scale.h4} ${type.mod.muted} ${type.mod.uppercase} ${type.mod.wideTrack}`,

  //Landing
  landing: `${type.scale.display} ${type.mod.wordSpacingWider}`,
  // Core copy
  body: `${type.scale.body} ${type.mod.muted} ${type.mod.wordSpacingWide}`,

  // Navigation / chrome
  navLink: ` ${type.scale.bodySm} ${type.mod.mediumTrack} ${type.mod.uppercase}`,
  button: `${type.scale.caption} ${type.mod.widestTrack} ${type.mod.uppercase}`,

  // Small system labels / disclaimers
  disclaimer: `${type.font.mono} ${type.scale.caption} ${type.mod.red} ${type.mod.uppercase} ${type.mod.wideTrack}`,

 

  // Marketing eyebrows (e.g. "What We Do")
  eyebrow: `${type.scale.caption} ${type.mod.red} ${type.mod.uppercase} ${type.mod.widestTrack}`,

  // Footer Section Labels
  footerTitle: `${type.font.mono} ${type.scale.caption} ${type.mod.uppercase} ${type.mod.wideTrack}`,
  footerLink: `${type.scale.caption} ${type.mod.whiteSoft} ${type.mod.widestTrack}`,
  footerMeta: `${type.font.mono} ${type.scale.caption} ${type.mod.whiteSoft} ${type.mod.widestTrack} ${type.mod.uppercase}`,
} as const;

// Block title — gallery-style section headers (copy blocks, gallery sectionTitle)
export const typeBlockTitle = `${type.scale.caption} ${type.mod.muted} ${type.mod.uppercase} ${type.mod.widestTrack}` as const;

// Section block — page/section titles (e.g. Project Brief, gallery headers)
export const typeSectionBlock = {
  title: `${type.scale.h2} ${type.mod.uppercase} ${type.mod.white}`,
  label: `${type.scale.caption} ${type.mod.red} ${type.mod.uppercase} ${type.mod.wideTrack}`,
} as const;

// Block overlay — header (main title), subtext (meta/label). All use composed format.
export const typeBlockOverlay = {
  header: ` ${type.scale.h3} ${type.mod.uppercase} ${type.mod.mediumTrack}`,
  subtext: `${type.font.mono} ${type.scale.caption} ${type.mod.uppercase} ${type.mod.widestTrack}`,
} as const;

// Project card — title (below thumb) + meta (category, etc.). Grouped together.
export const typeProjectCard = {
  title: `${type.scale.body} ${type.mod.bold} ${type.mod.uppercase} ${type.mod.mediumTrack}`,
  meta: `${type.scale.caption} ${type.mod.muted} ${type.mod.uppercase} ${type.mod.widestTrack}`,
} as const;

// Domain roles – services/cards, etc.
export const typeServices = {
  title: `${type.scale.h3} ${type.mod.white} ${type.mod.uppercase} ${type.mod.tightTrack}`,
  body: `${type.scale.body} ${type.mod.muted}`,
  meta: ` ${type.scale.caption} ${type.mod.muted} ${type.mod.uppercase} ${type.mod.widestTrack}`,
} as const;

