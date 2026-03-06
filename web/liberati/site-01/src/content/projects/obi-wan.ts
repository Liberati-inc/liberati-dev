import { createProject } from "./template";

export default createProject({
  slug: "obi-wan",
  title: "Porsche x Obi-Wan Kenobi: Parallels 03",
  meta: "Promo • Porsche + Disney ",
  class: "brand",
  vimeoId: "727899592",
  previewVimeoId: "727899592",
  detailPlayMode: "manual",
  stillImage: undefined,
  brief: {
    context: {
      title: "Context",
      copy:
        "A comprehensive approach to redefining the visual identity of a global energy leader, bridging the gap between legacy infrastructure and digital future.",
    },
    strategy: {
      title: "Strategy",
      copy:
        "Creating a cinematic visual language that conveys massive scale and technical innovation through a palette of obsidian and electric crimson.",
    },
    solution: {
      title: "Solution",
      copy:
        "A modular design system integrated across physical infrastructure, digital touchpoints, and large-scale architectural environments.",
    },
  },
  blocks: [
    {
      contentType: "copy",
      header: "Behind The Screenes",
      subtext: "Brand and content work.",
      layout: "stack",
    },
    // { contentType: "vimeo", vimeoId: "...", header: "MARA IN MOTION", subtext: "Smart Cities", layout: "full", variant: "video" },
    // { contentType: "gallery", sectionTitle: "Oil & Gas Infographics", images: [...] },
  ],
});
