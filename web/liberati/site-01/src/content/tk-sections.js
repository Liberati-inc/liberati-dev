/**
 * Auto-discovers components via webpack require.context (like projects/index.ts).
 * Scans brand/, blocks/, patterns/, sections/. No meta text.
 */
import SectionLabel from "@/components/blocks/SectionLabel";
import { services, servicesNote, servicesCta } from "@/content";
import { projectsForGallery } from "@/content/projects";
import {
  galleryCategories,
  galleryCategoryClasses,
  gallerySections,
  galleryDefaultKey,
} from "@/content/projectsPage";

function labelFromPath(path) {
  const base = path.replace(/^.*[/\\]/, ""); // use filename only, ignore path
  return base
    .replace(/^\.\//, "")
    .replace(/\.(js|jsx|ts|tsx)$/, "")
    .replace(/([A-Z])/g, " $1")
    .replace(/^ /, "");
}

function baseName(key) {
  return key.replace(/^.*[/\\]/, "").replace(/\.(js|jsx|ts|tsx)$/, "");
}

function wrapSection(Component, label, props = {}, renderContent) {
  return function TkSection() {
    const content = renderContent ? renderContent(Component, props) : <Component {...props} />;
    return (
      <section className="py-20 border-b border-white/5">
        <div className="space-y-6">
          <SectionLabel label={label} />
          <div className="mt-6">
            {content}
          </div>
        </div>
      </section>
    );
  };
}

const hoverLabel = "text-white/30 text-xs mb-2 block";

const PROPS = {
  PrimaryButton: {
    label: "label",
    _render: (Comp) => (
      <div className="flex flex-wrap gap-8">
        <div>
          <span className={hoverLabel}>Default</span>
          <Comp label="label" />
        </div>
        <div>
          <span className={hoverLabel}>Hover → white bg, black text</span>
          <Comp className="!bg-white !text-black" label="label" />
        </div>
      </div>
    ),
  },
  SecondaryButton: {
    label: "label",
    _render: (Comp) => (
      <div className="flex flex-wrap gap-8">
        <div>
          <span className={hoverLabel}>Default</span>
          <Comp label="label" />
        </div>
        <div>
          <span className={hoverLabel}>Hover → brighter bg</span>
          <Comp className="!bg-white/20" label="label" />
        </div>
      </div>
    ),
  },
  ProjectLink: {
    href: "#",
    label: "label",
    _render: (Comp) => (
      <div className="flex flex-wrap gap-8">
        <div>
          <span className={hoverLabel}>Default</span>
          <Comp href="#" label="label" />
        </div>
        <div>
          <span className={hoverLabel}>Hover → red text</span>
          <Comp href="#" className="!text-liberatiRed" label="label" />
        </div>
      </div>
    ),
  },
  TextNavButton: {
    href: "#",
    label: "label",
    _render: (Comp) => (
      <div className="flex flex-wrap gap-8">
        <div>
          <span className="text-white/30 text-xs mb-2 block">Default (hover → white)</span>
          <Comp href="#" active={false} label="label" />
        </div>
        <div>
          <span className="text-white/30 text-xs mb-2 block">Active (border red)</span>
          <Comp href="#" active label="label" />
        </div>
      </div>
    ),
  },
  EyebrowLabel: { label: "label" },
  BlockTitle: { children: "Gallery Header" },
  FilterPill: {
    label: "label",
    _render: (Comp) => (
      <div className="flex flex-wrap gap-8">
        <div>
          <span className={hoverLabel}>Idle (hover → light bg)</span>
          <Comp state="idle" label="label" />
        </div>
        <div>
          <span className={hoverLabel}>Hover</span>
          <Comp state="hover" label="label" />
        </div>
        <div>
          <span className={hoverLabel}>Active</span>
          <Comp state="active" label="label" />
        </div>
      </div>
    ),
  },
  FormField: { label: "label", placeholder: "placeholder" },
  NavArrowButton: {
    direction: "next",
    onClick: () => {},
    ariaLabel: "ariaLabel",
    _render: (Comp) => (
      <div className="flex flex-wrap gap-8 justify-start">
        <div>
          <span className={hoverLabel}>Default</span>
          <div className="relative h-14 w-14 flex items-center justify-center flex-shrink-0">
            <Comp direction="prev" onClick={() => {}} ariaLabel="ariaLabel" className="!relative !top-0 !translate-y-0 !left-0 !right-0" />
          </div>
        </div>
        <div>
          <span className={hoverLabel}>Hover → white text, red border</span>
          <div className="relative h-14 w-14 flex items-center justify-center flex-shrink-0">
            <Comp direction="next" onClick={() => {}} ariaLabel="ariaLabel" className="!relative !top-0 !translate-y-0 !left-0 !right-0 !text-white !border-liberatiRed" />
          </div>
        </div>
      </div>
    ),
  },
  SvgIcon: { variant: "wing", sizeClass: "w-10 h-10", colorClass: "text-white" },
  SvgButton: {
    materialIcon: "camera",
    label: "label",
    _render: (Comp) => (
      <div className="flex flex-wrap gap-8">
        <div>
          <span className={hoverLabel}>Circle default</span>
          <Comp materialIcon="camera" label="label" kind="circle" />
        </div>
        <div>
          <span className={hoverLabel}>Circle hover → white bg</span>
          <Comp materialIcon="camera" label="label" kind="circle" className="!bg-white !text-black" />
        </div>
        <div>
          <span className={hoverLabel}>Footer default</span>
          <Comp materialIcon="camera" label="label" kind="footer" />
        </div>
        <div>
          <span className={hoverLabel}>Footer hover → red text</span>
          <Comp materialIcon="camera" label="label" kind="footer" className="!text-liberatiRed" />
        </div>
      </div>
    ),
  },
  FadeOnHover: { content: "content" },
  PageContainer: { content: "content" },
  ServiceCard: () => ({
    iconVariant: "direction",
    title: "title",
    description: "description",
    items: ["items[0]", "items[1]"],
  }),
  ProjectCard: { title: "title", meta: "meta", vimeoId: "727899592" },
  BlockCopy: { block: { header: "header", subtext: "subtext" } },
  BlockGallery: {
    block: {
      sectionTitle: "sectionTitle",
      images: [
        { imageUrl: "https://via.placeholder.com/800x600", caption: "caption" },
        { imageUrl: "https://via.placeholder.com/800x600", caption: "caption" },
      ],
    },
  },
  BlockGroup: {
    block: {
      layout: "cols",
      ratio: [1, 1.25],
      blocks: [
        { contentType: "copy", header: "header", subtext: "subtext" },
        { contentType: "still", imageUrl: "/assets/img/projects/snapdragon/snap_bts_01.png", header: "header", subtext: "subtext", variant: "hero", overlayPosition: "bottom-left" },
      ],
    },
  },
  BlockStill: {
    block: {
      imageUrl: "/assets/img/projects/snapdragon/snap_bts_01.png",
      header: "header",
      subtext: "subtext",
      variant: "hero",
      overlayPosition: "bottom-left",
    },
  },
  BlockVimeo: {
    block: {
      vimeoId: "727899592",
      header: "header",
      subtext: "subtext",
      variant: "hero",
      overlayPosition: "bottom-left",
    },
  },
  BriefCard: { title: "title", copy: "copy" },
  ColorSwatch: { name: "name", hex: "hex", swatchClass: "bg-obsidian border border-white/10" },
  ProjectBriefSection: () => ({
    brief: {
      sectionTitle: "sectionTitle",
      introCopy: "introCopy",
      copyDelimiter: "\n",
      context: { title: "title", copy: "copy" },
      strategy: { title: "title", copy: "copy" },
      solution: { title: "title", copy: "copy" },
    },
    meta: "meta",
    description: "description",
  }),
  ProjectsGalleryHeader: { title: "title", description: "description" },
  GalleryCategoryFilter: () => ({
    items: [
      { key: "all", label: "items[0].label", href: "#" },
      { key: "a", label: "items[1].label", href: "#" },
      { key: "b", label: "items[2].label", href: "#" },
    ],
    activeKey: "all",
  }),
  ServicesSection: () => ({
    services: services ?? [],
    note: servicesNote,
    cta: servicesCta ?? {},
  }),
  ProjectsSection: {
    projects: projectsForGallery ?? [],
    filterItems: galleryCategories ?? [],
    filterActiveKey: galleryDefaultKey ?? "all",
    galleryCategoryClasses: galleryCategoryClasses ?? {},
    gallerySections: gallerySections ?? {},
  },
  SiteHeader: { position: "static", slideOnScroll: false },
};

const DEFAULT_ORDER = 999; // components without toolkitOrder sort last

function discover(context, excludeRe, wrap = true, excludeTkPrefix = true) {
  const seen = new Set();
  const items = context
    .keys()
    .filter((k) => !excludeRe.test(k))
    .map((k) => {
      const mod = context(k);
      const Component = mod.default;
      if (!Component || typeof Component !== "function") return null;
      if (mod.toolkitExclude !== false) return null; // must explicitly set false to be visible
      const name = baseName(k); // dedupe by filename only (webpack can return ./X.js and components/blocks/X.js)
      if (name === "index" || (excludeTkPrefix && name.startsWith("TK_"))) return null;
      if (seen.has(name)) return null;
      seen.add(name);
      const order = typeof mod.toolkitOrder === "number" ? mod.toolkitOrder : DEFAULT_ORDER;
      if (!wrap) return { Component, order };
      const label = labelFromPath(k);
      const propsRaw = PROPS[name];
      const props = typeof propsRaw === "function" ? propsRaw() : propsRaw || {};
      const { _render, ...rest } = props;
      const finalProps = _render ? rest : props;
      const Section = wrapSection(Component, label, finalProps, _render ? (Comp) => _render(Comp) : undefined);
      return { Section, order };
    })
    .filter(Boolean);
  const sorted = items.sort((a, b) => a.order - b.order);
  return sorted.map((x) => x.Component ?? x.Section);
}

const excludeAtomsMolecules = /(^\.\/index\.|^\.\/TK_)/i;
const excludeOrganisms = /(^\.\/index\.)/i;
const excludeBrand = /(^\.\/index\.)/i;

const brandCtx = require.context("@/components/brand", false, /\.js$/);
const blocksCtx = require.context("@/components/blocks", false, /\.js$/);
const patternsCtx = require.context("@/components/patterns", false, /\.js$/);
const sectionsCtx = require.context("@/components/sections", false, /\.js$/);

const sectionsByCategory = {
  brand: discover(brandCtx, excludeBrand, false, false), // brand uses TK_* components, don't exclude
  blocks: discover(blocksCtx, excludeAtomsMolecules, true),
  patterns: discover(patternsCtx, excludeAtomsMolecules, true),
  sections: discover(sectionsCtx, excludeOrganisms, true),
};

export { sectionsByCategory };
