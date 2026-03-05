import SectionLabel from "@/components/atoms/SectionLabel";
import BriefCard from "@/components/molecules/BriefCard";
import VideoOverlay from "@/components/molecules/VideoOverlay";
import { typeServices } from "@/content/typography";

export default function TK_AdditionalSection() {
  return (
    <section
      className="py-20 border-t border-white/5"
      data-purpose="additional-toolkit-components"
    >
      {/* 2.3 Project Brief */}
      <div className="space-y-6 mb-24">
        <SectionLabel>2.3 Project Brief</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <BriefCard title="CONTEXT">
            Detailed description of project origins and requirements goes here.
          </BriefCard>
          <BriefCard title="STRATEGY">
            Overview of the strategic approach and creative methodology.
          </BriefCard>
          <BriefCard title="SOLUTION">
            Technical implementation details and project outcomes.
          </BriefCard>
        </div>
      </div>

      {/* 2.4 Video Overlay */}
      <div className="space-y-6 mb-24">
        <SectionLabel>2.4 Video Overlay</SectionLabel>
        <VideoOverlay />
      </div>

      {/* 2.5 Gallery Header */}
      <div className="space-y-6">
        <SectionLabel>2.5 Gallery Header</SectionLabel>
        <div className="space-y-8">
          <div className="flex items-center gap-8">
            <h3 className="text-xl font-bold tracking-widest uppercase whitespace-nowrap">
              GALLERY SECTION TITLE
            </h3>
            <div className="w-full h-[1px] bg-white/10" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-video bg-white/5" />
            <div className="aspect-video bg-white/5" />
          </div>
        </div>
        <p className={`mt-4 ${typeServices.meta}`}>
          BriefCard &mdash; components/molecules/BriefCard / VideoOverlay
          &mdash; components/molecules/VideoOverlay
        </p>
      </div>
    </section>
  );
}

