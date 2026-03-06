export type ServiceId = "direction" | "motion" | "interactive";

export interface Service {
  id: ServiceId;
  title: string;
  description: string;
  items: string[];
  iconVariant: ServiceId;
}

export interface CTA {
  id: string;
  label: string;
  sublabel?: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  icon: string;
  href: string;
}

export interface FooterLinkGroup {
  id: string;
  title: string;
  links: { label: string; href?: string }[];
}

/** Editable brief section: title + copy for Context, Strategy, Solution. */
export interface ProjectBriefItem {
  title: string;
  copy: string;
}

export interface ProjectBrief {
  sectionTitle?: string;
  introCopy?: string;
  /** When set, copy is split by this delimiter and each part rendered as a line. e.g. "," for comma-separated. */
  copyDelimiter?: string;
  context: ProjectBriefItem;
  strategy: ProjectBriefItem;
  solution: ProjectBriefItem;
}

/** Project category for filtering and display. */
export type ProjectClass =
  | "brand"
  | "series"
  | "film"
  | "interactive"
  | "documentary"
  | "other";

/** Layout hint for block-level organisms (full-bleed, split, stacked). */
export type ProjectBlockLayout = "full" | "split" | "stack";

/** Block display variant: hero (overlay), video (embed only), thumb (card). Matches ProjectCard. */
export type ProjectBlockVariant = "hero" | "video" | "thumb";

/** Content blocks for project detail pages. contentType = block kind; variant = display style. */
export type ProjectBlock =
  | {
      contentType: "copy";
      header: string;
      subtext?: string;
      layout?: ProjectBlockLayout;
    }
  | {
      contentType: "vimeo";
      vimeoId: string;
      header?: string;
      subtext?: string;
      layout?: ProjectBlockLayout;
      /** hero = overlay; video = embed only; thumb = card. Default video. */
      variant?: ProjectBlockVariant;
      /** Black overlay opacity 0–1. Default 0.4. Fades in/out on scroll. */
      overlayOpacity?: number;
      /** Copy position in overlay. Default bottom-left. */
      overlayPosition?: "bottom-left" | "bottom-right" | "top-left" | "top-right" | "center";
      /** Override bottom padding for overlay copy (e.g. "pb-8" or "pb-6 md:pb-8" for lower). Default pb-16 md:pb-24. */
      overlayPaddingBottom?: string;
      /** Aspect ratio: "16:9" or { width, height }. */
      aspectRatio?: string | { width: number; height: number };
    }
  | {
      contentType: "still";
      imageUrl: string;
      header?: string;
      subtext?: string;
      layout?: ProjectBlockLayout;
      /** hero = full-bleed overlay; video = image only; thumb = card. Default video. */
      variant?: ProjectBlockVariant;
      /** Black overlay opacity 0–1. Default 0.4. Fades in/out on scroll. */
      overlayOpacity?: number;
      /** Copy position in overlay. Default bottom-left. */
      overlayPosition?: "bottom-left" | "bottom-right" | "top-left" | "top-right" | "center";
      /** Override bottom padding for overlay copy (e.g. "pb-8" for lower). Default pb-16 md:pb-24. */
      overlayPaddingBottom?: string;
      aspectRatio?: string | { width: number; height: number };
    }
  | {
      contentType: "gallery";
      sectionTitle?: string;
      images: { imageUrl: string; caption?: string }[];
      layout?: ProjectBlockLayout;
    }
  | {
      contentType: "group";
      /** cols = side-by-side grid; stack = vertical. Default cols. */
      layout?: "cols" | "stack";
      /** Proportional column widths for cols layout. e.g. [2, 1] = first 2× second; [2, 1, 1] = 2:1:1. Length must match blocks. */
      ratio?: number[];
      blocks: ProjectBlock[];
    };

/** Full project: card fields + optional class + block-based detail content. */
export interface Project {
  slug: string;
  title: string;
  meta: string;
  /** Card/hero: primary preview video (e.g. for thumbnail or detail hero). */
  vimeoId?: string;
  /** Card fallback image when no video. */
  stillImage?: string;
  /** Hero CTA label override; blank = "VIEW PROJECT". */
  ctaLabel?: string;
  /** Project description; shown below title + meta in brief section. */
  description?: string;
  /** Project category. */
  class?: ProjectClass;
  /** Hero preview Vimeo (detail page); can duplicate vimeoId or differ. */
  previewVimeoId?: string;
  /** Detail page video: "loop" = autoplay muted loop; "manual" = play button. */
  detailPlayMode?: "loop" | "manual";
  /** Detail page hero: "hero" = overlay with title/meta; "video" = video only, no overlay. */
  detailHeroVariant?: "hero" | "video";
  /** Detail hero video aspect ratio; default "16/9". */
  heroAspectRatio?: "16/9" | "4/3" | "21/9" | "1/1";
  /** Context / Strategy / Solution section; title + copy editable per project. */
  brief?: ProjectBrief;
  /** Modular content blocks for detail page; order = render order. */
  blocks?: ProjectBlock[];
  /** Credit section below blocks; same structure as brief (e.g. Credit, Client, Brand). */
  credit?: ProjectBrief;
  /** When false, project is excluded from the /projects gallery. Default true. */
  showOnProjectsPage?: boolean;
}

