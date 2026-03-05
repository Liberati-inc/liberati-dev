import { createProject } from "./template";

export default createProject({
  slug: "katrina",
  title: "KATRINA: Race Against Time",
  meta: "Documentary • Nat Geo",
  class: "documentary",
  vimeoId: "924881851",
  previewVimeoId: "924881851",
  heroPlayMode: "manual",
  stillImage: undefined,
  brief: {
    context: {
      title: "Context",
      copy:
        "Addressing the massive shift from traditional energy extraction to the management of decentralized digital assets and high-performance computing.",
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
    { type: "preview-vimeo", vimeoId: "924881851" },
    {
      type: "copy",
      header: "Race Against Time",
      subtext: "Documentary series for Nat Geo.",
      layout: "stack",
    },
    {
      type: "vimeo",
      vimeoId: "924881851",
      header: "Opening",
      subtext: "Optional subtext.",
      layout: "full",
    },
    // { type: "still", imageUrl: "/path/to/image.jpg", header: "...", layout: "split" },
    // { type: "gallery", sectionTitle: "Explorations & Stills", images: [{ imageUrl: "...", caption: "..." }] },
  ],
});
