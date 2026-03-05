import { aboutCopy } from "@/content/home";
import EyebrowLabel from "@/components/atoms/EyebrowLabel";
import SvgButton from "@/components/atoms/SvgButton";
import { type, typeRole } from "@/content/typography";

export default function AboutSection() {
  return (
    <section id="about" className="bg-obsidian py-48">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <EyebrowLabel>{aboutCopy.eyebrow}</EyebrowLabel>
          <h2 className={`${type.scale.h1} ${type.mod.uppercase}`}>
            {aboutCopy.heading}
          </h2>
        </div>

          <div className="space-y-10">
            <div className="max-w-md">
              <p className={typeRole.body}>{aboutCopy.body}</p>
            </div>
            <div className="flex gap-6">
              <SvgButton materialIcon="public" label="Public" />
              <SvgButton materialIcon="video_library" label="Video" />
              <SvgButton materialIcon="camera" label="Camera" />
            </div>
          </div>
      </div>
    </section>
  );
}

