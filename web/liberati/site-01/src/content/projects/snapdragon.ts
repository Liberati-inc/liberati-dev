import { createProject } from "./template";

export default createProject({
  slug: "snapdragon",
  title: "Snapdragon XR",
  meta: "Commercial • Snapdragon",
  description:
    "Shaping the future of XR experiences through cinematic branding and strategic design.",
  class: "brand",
  vimeoId: "924881851",
  previewVimeoId: "924881851",
  detailPlayMode: "manual",
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
    {
      contentType: "copy",
      header: "Behind the Screens",
      subtext: "",
      layout: "stack",
    },
    {
      contentType: "group",
      layout: "cols",
      ratio: [1, 1.25],
      blocks: [
        {
          contentType: "vimeo",
          vimeoId: "1170838807",
          header: "COD",
          subtext: "Dynamic rig test",
          layout: "full",
          variant: "hero",
        },
        {
          contentType: "vimeo",
          vimeoId: "1170838970",
          header: "Flock Test",
          subtext: "Testing group behavior",
          layout: "full",
          variant: "hero",
        },
        
      ],
    },
    {
      contentType: "group",
      layout: "cols",
      ratio: [2, 1],
      blocks: [
        
        {
          contentType: "still",
          imageUrl: "/assets/img/projects/snapdragon/snap_bts_01.png",
          header: "Beluga Whale",
          subtext: "Cinema 4D",
          layout: "full",
          variant: "hero",
        },
        {
          contentType: "vimeo",
          vimeoId: "1170838854",
          header: "Salmon",
          subtext: "Dynamic rig test",
          layout: "full",
          variant: "hero",
        },
      
      ],
    },
    
    // { contentType: "still", imageUrl: "/path/to/image.jpg", header: "...", layout: "split" },
    // { contentType: "gallery", sectionTitle: "Explorations & Stills", images: [{ imageUrl: "...", caption: "..." }] },
  ],
  credit: {
    copyDelimiter: ",",
    context: {
      title: "Credit",
      copy:
        "CG Design & Animation, Rigging, Tracking, Compositing, Rendering, Post-Production",
    },
    strategy: {
      title: "Client",
      copy:
        "Trollbäck+Company",
    },
    solution: {
      title: "Brand",
      copy:
        "Snapdragon",
    },
  },
});
