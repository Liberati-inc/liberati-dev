import { createProject } from "./template";

export default createProject({
  slug: "mara",
  title: "This is MARA",
  meta: "Various • MARA",
  class: "brand",
  vimeoId: "727899592",
  previewVimeoId: "727899592",
  heroPlayMode: "loop",
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
    { type: "preview-vimeo", vimeoId: "727899592" },
    {
      type: "copy",
      header: "This is MARA",
      subtext: "Brand and content work.",
      layout: "stack",
    },
    // { type: "vimeo", vimeoId: "...", header: "MARA IN MOTION", subtext: "Smart Cities", layout: "full" },
    // { type: "gallery", sectionTitle: "Oil & Gas Infographics", images: [...] },
  ],
});
