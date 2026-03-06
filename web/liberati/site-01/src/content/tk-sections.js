/**
 * Auto-discovers components via webpack require.context (like projects/index.ts).
 * Scans brand/, atoms/, molecules/, organisms/. No meta text.
 */
import SectionLabel from "@/components/atoms/SectionLabel";
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
          <SectionLabel>{label}</SectionLabel>
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
    children: "Label",
    _render: (Comp) => (
      <div className="flex flex-wrap gap-8">
        <div>
          <span className={hoverLabel}>Default</span>
          <Comp>Label</Comp>
        </div>
        <div>
          <span className={hoverLabel}>Hover → white bg, black text</span>
          <Comp className="!bg-white !text-black">Label</Comp>
        </div>
      </div>
    ),
  },
  SecondaryButton: {
    children: "Secondary",
    _render: (Comp) => (
      <div className="flex flex-wrap gap-8">
        <div>
          <span className={hoverLabel}>Default</span>
          <Comp>Secondary</Comp>
        </div>
        <div>
          <span className={hoverLabel}>Hover → brighter bg</span>
          <Comp className="!bg-white/20">Secondary</Comp>
        </div>
      </div>
    ),
  },
  ProjectLink: {
    href: "#",
    children: "View Project",
    _render: (Comp) => (
      <div className="flex flex-wrap gap-8">
        <div>
          <span className={hoverLabel}>Default</span>
          <Comp href="#">View Project</Comp>
        </div>
        <div>
          <span className={hoverLabel}>Hover → red text</span>
          <Comp href="#" className="!text-liberatiRed">View Project</Comp>
        </div>
      </div>
    ),
  },
  TextNavButton: {
    href: "#",
    children: "Work",
    _render: (Comp) => (
      <div className="flex flex-wrap gap-8">
        <div>
          <span className="text-white/30 text-xs mb-2 block">Default (hover → white)</span>
          <Comp href="#" active={false}>Work</Comp>
        </div>
        <div>
          <span className="text-white/30 text-xs mb-2 block">Active (border red)</span>
          <Comp href="#" active>Work</Comp>
        </div>
      </div>
    ),
  },
  EyebrowLabel: { children: "Eyebrow" },
  FilterPill: {
    children: "Filter",
    _render: (Comp) => (
      <div className="flex flex-wrap gap-8">
        <div>
          <span className={hoverLabel}>Idle (hover → light bg)</span>
          <Comp state="idle">Filter</Comp>
        </div>
        <div>
          <span className={hoverLabel}>Hover</span>
          <Comp state="hover">Filter</Comp>
        </div>
        <div>
          <span className={hoverLabel}>Active</span>
          <Comp state="active">Filter</Comp>
        </div>
      </div>
    ),
  },
  FormField: { label: "Example", placeholder: "..." },
  NavArrowButton: {
    direction: "next",
    onClick: () => {},
    ariaLabel: "Next",
    _render: (Comp) => (
      <div className="flex flex-wrap gap-8 justify-start">
        <div>
          <span className={hoverLabel}>Default</span>
          <div className="relative h-14 w-14 flex items-center justify-center flex-shrink-0">
            <Comp direction="prev" onClick={() => {}} ariaLabel="Prev" className="!relative !top-0 !translate-y-0 !left-0 !right-0" />
          </div>
        </div>
        <div>
          <span className={hoverLabel}>Hover → white text, red border</span>
          <div className="relative h-14 w-14 flex items-center justify-center flex-shrink-0">
            <Comp direction="next" onClick={() => {}} ariaLabel="Next" className="!relative !top-0 !translate-y-0 !left-0 !right-0 !text-white !border-liberatiRed" />
          </div>
        </div>
      </div>
    ),
  },
  SvgIcon: { variant: "wing", sizeClass: "w-10 h-10", colorClass: "text-white" },
  SvgButton: {
    materialIcon: "camera",
    label: "Camera",
    _render: (Comp) => (
      <div className="flex flex-wrap gap-8">
        <div>
          <span className={hoverLabel}>Circle default</span>
          <Comp materialIcon="camera" label="Camera" kind="circle" />
        </div>
        <div>
          <span className={hoverLabel}>Circle hover → white bg</span>
          <Comp materialIcon="camera" label="Camera" kind="circle" className="!bg-white !text-black" />
        </div>
        <div>
          <span className={hoverLabel}>Footer default</span>
          <Comp materialIcon="camera" label="Camera" kind="footer" />
        </div>
        <div>
          <span className={hoverLabel}>Footer hover → red text</span>
          <Comp materialIcon="camera" label="Camera" kind="footer" className="!text-liberatiRed" />
        </div>
      </div>
    ),
  },
  FadeOnHover: { children: "Hover" },
  PageContainer: { children: "Content" },
  ServiceCard: () => {
    const s = services?.[0];
    return s
      ? { iconVariant: s.iconVariant, title: s.title, description: s.description, items: s.items ?? [] }
      : { iconVariant: "direction", title: "Example", description: "—", items: [] };
  },
  ProjectCard: { title: "Project", meta: "Tagline", vimeoId: "727899592" },
  BlockCopy: { block: { header: "Example", subtext: "Subtext copy." } },
  BlockGallery: {
    block: {
      sectionTitle: "Gallery",
      images: [
        { imageUrl: "https://via.placeholder.com/800x600", caption: "Caption 1" },
        { imageUrl: "https://via.placeholder.com/800x600", caption: "Caption 2" },
      ],
    },
  },
  BlockGroup: {
    block: {
      blocks: [{ contentType: "copy", header: "Example", subtext: "Block group copy." }],
      layout: "cols",
    },
  },
  BlockStill: {
    block: {
      imageUrl: "/assets/img/projects/snapdragon/snap_bts_01.png",
      header: "Example Still",
      subtext: "Subtext copy.",
      variant: "hero",
      overlayPosition: "bottom-left",
    },
  },
  BlockVimeo: {
    block: {
      vimeoId: "1170838807",
      header: "COD",
      subtext: "Dynamic rig test",
      variant: "hero",
      overlayPosition: "bottom-left",
    },
  },
  GalleryCategoryFilter: {
    items: galleryCategories ?? [],
    activeKey: galleryDefaultKey ?? "all",
  },
  ServicesSection: {
    services: services ?? [],
    note: servicesNote ?? "",
    cta: servicesCta ?? { label: "CTA" },
  },
  ProjectsSection: {
    projects: projectsForGallery ?? [],
    filterItems: galleryCategories ?? [],
    filterActiveKey: galleryDefaultKey ?? "all",
    galleryCategoryClasses: galleryCategoryClasses ?? {},
    gallerySections: gallerySections ?? {},
  },
  SiteHeader: { position: "static", slideOnScroll: false },
};

function discover(context, excludeRe, wrap = true, excludeTkPrefix = true) {
  const seen = new Set();
  return context
    .keys()
    .filter((k) => !excludeRe.test(k))
    .map((k) => {
      const mod = context(k);
      const Component = mod.default;
      if (!Component || typeof Component !== "function") return null;
      if (mod.toolkitExclude) return null;
      const name = baseName(k); // dedupe by filename only (webpack can return ./X.js and components/atoms/X.js)
      if (name === "index" || (excludeTkPrefix && name.startsWith("TK_"))) return null;
      if (seen.has(name)) return null;
      seen.add(name);
      if (!wrap) return Component;
      const label = labelFromPath(k);
      const propsRaw = PROPS[name];
      const props = typeof propsRaw === "function" ? propsRaw() : propsRaw || {};
      const { _render, ...rest } = props;
      const finalProps = _render ? rest : props;
      return wrapSection(Component, label, finalProps, _render ? (Comp) => _render(Comp) : undefined);
    })
    .filter(Boolean);
}

const excludeAtomsMolecules = /(^\.\/index\.|^\.\/TK_)/i;
const excludeOrganisms = /(^\.\/index\.)/i;
const excludeBrand = /(^\.\/index\.)/i;

const brandCtx = require.context("@/components/brand", false, /\.js$/);
const atomsCtx = require.context("@/components/atoms", false, /\.js$/);
const moleculesCtx = require.context("@/components/molecules", false, /\.js$/);
const organismsCtx = require.context("@/components/organisms", false, /\.js$/);

const sectionsByCategory = {
  brand: discover(brandCtx, excludeBrand, false, false), // brand uses TK_* components, don't exclude
  atoms: discover(atomsCtx, excludeAtomsMolecules, true),
  molecules: discover(moleculesCtx, excludeAtomsMolecules, true),
  organisms: discover(organismsCtx, excludeOrganisms, true),
};

export { sectionsByCategory };
