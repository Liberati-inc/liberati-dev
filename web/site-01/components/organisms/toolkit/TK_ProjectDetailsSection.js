import SectionLabel from "@/components/atoms/SectionLabel";
import ProjectCard from "@/components/molecules/ProjectCard";
import ProjectBriefSection from "@/components/organisms/marketing/ProjectBriefSection";
import ProjectBlocksSection from "@/components/organisms/marketing/ProjectBlocksSection";
import { typeServices } from "@/content/typography";

/** 2.3 approved brief — Context / Strategy / Solution. */
const approvedBrief = {
  sectionTitle: "Project Title",
  introCopy:
    "A comprehensive approach to redefining the visual identity of a global energy leader, bridging the gap between legacy infrastructure and digital future.",
  context: {
    title: "Context",
    copy: "Detailed description of project origins and requirements goes here.",
  },
  strategy: {
    title: "Strategy",
    copy: "Overview of the strategic approach and creative methodology.",
  },
  solution: {
    title: "Solution",
    copy: "Technical implementation details and project outcomes.",
  },
};

const sampleBlocks = [
  {
    type: "vimeo",
    vimeoId: "727899592",
    header: "Featured Film",
    subtext: "Optional section headline",
    layout: "full",
    aspectRatio: "16:9",
  },
  {
    type: "gallery",
    sectionTitle: "Gallery",
    aspectRatio: "16:9",
    images: [
      { imageUrl: "https://via.placeholder.com/800x600", caption: "Caption 1" },
      { imageUrl: "https://via.placeholder.com/800x600", caption: "Caption 2" },
      { imageUrl: "https://via.placeholder.com/800x600", caption: "Caption 3" },
    ],
  },
];

export default function TK_ProjectDetailsSection() {
  return (
    <section className="py-20" data-purpose="project-detail-section">
      <div className="space-y-6">
        <SectionLabel>3.4 Project Details</SectionLabel>
        <div className="space-y-0">
          <p className={`${typeServices.meta} mb-4`}>
            ProjectCard (hero variant), ProjectBriefSection, ProjectBlocksSection
          </p>
          <div className="rounded overflow-hidden">
            <ProjectCard
              variant="hero"
              vimeoId="727899592"
              playMode="auto"
              loop
              blackTintOpacity={30}
              title="Project Title"
              meta="Optional tagline or project description."
            />
          </div>
          <ProjectBriefSection brief={approvedBrief} />
          <ProjectBlocksSection blocks={sampleBlocks} />
          <p className={`mt-8 ${typeServices.meta}`}>
            ProjectCard (hero variant) — components/molecules/ProjectCard
            <br />
            ProjectBriefSection — components/organisms/marketing/ProjectBriefSection
            <br />
            ProjectBlocksSection — components/organisms/marketing/ProjectBlocksSection
          </p>
        </div>
      </div>
    </section>
  );
}

