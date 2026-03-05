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

/** Content blocks for project detail pages. Map to molecules/organisms by type. */
export type ProjectBlock =
  | { type: "preview-vimeo"; vimeoId: string }
  | {
      type: "copy";
      header: string;
      subtext?: string;
      layout?: ProjectBlockLayout;
    }
  | {
      type: "vimeo";
      vimeoId: string;
      header?: string;
      subtext?: string;
      layout?: ProjectBlockLayout;
    }
  | {
      type: "still";
      imageUrl: string;
      header?: string;
      subtext?: string;
      layout?: ProjectBlockLayout;
    }
  | {
      type: "gallery";
      sectionTitle?: string;
      images: { imageUrl: string; caption?: string }[];
      layout?: ProjectBlockLayout;
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
  description?: string;
  /** Project category. */
  class?: ProjectClass;
  /** Hero preview Vimeo (detail page); can duplicate vimeoId or differ. */
  previewVimeoId?: string;
  /** "loop" = autoplay muted loop (like landing hero); "manual" = play button. */
  heroPlayMode?: "loop" | "manual";
  /** Context / Strategy / Solution section; title + copy editable per project. */
  brief?: ProjectBrief;
  /** Modular content blocks for detail page; order = render order. */
  blocks?: ProjectBlock[];
}

