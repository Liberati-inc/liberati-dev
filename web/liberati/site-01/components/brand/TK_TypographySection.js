import BlockTitle from "@/components/blocks/BlockTitle";
import SectionLabel from "@/components/blocks/SectionLabel";
import TypographySample from "@/components/patterns/TypographySample";
import {
  type,
  typeRole,
  typeSectionBlock,
  typeBlockOverlay,
  typeBlockTitle,
  typeProjectCard,
  typeServices,
} from "@/content/typography";

export const toolkitExclude = false;
export const toolkitOrder = 2;

const SAMPLE = {
  scale: "The quick brown fox jumps over the lazy dog",
  role: "The quick brown fox jumps over the lazy dog",
  micro: "The quick brown fox jumps",
  overlay: "The quick brown fox jumps over the lazy dog",
};

function renderGroup(title, entries, defaultSample = SAMPLE.role) {
  if (!entries || Object.keys(entries).length === 0) return null;
  return (
    <div key={title} className="space-y-6">
      <h3 className="text-white/50 text-sm font-bold uppercase tracking-wider">
        {title}
      </h3>
      <div className="border-b border-white/5 py-1" />
      <div className="space-y-8">
        {Object.entries(entries).map(([key, className]) => (
          <TypographySample
            key={key}
            label={key}
            as={["display", "h1", "h2", "h3", "h4", "landing"].includes(key) ? "h1" : "p"}
            className={className}
            sample={
              ["body", "landing"].includes(key)
                ? SAMPLE.role
                : key.includes("caption") || key.includes("disclaimer") || key.includes("Label") || key.includes("eyebrow") || key.includes("footer") || key.includes("Meta") || key.includes("button") || key.includes("navLink") || key.includes("bodySm")
                  ? SAMPLE.micro
                  : key.includes("title") || key.includes("overlay") || key.includes("projectCard")
                    ? SAMPLE.overlay
                    : SAMPLE.scale
            }
          />
        ))}
      </div>
    </div>
  );
}

export default function TK_TypographySection() {
  return (
    <section
      className="py-20 border-b border-white/5"
      data-purpose="typography-section"
    >
      <div className="space-y-6">
        <SectionLabel label="Typography" />
        <div className="space-y-16">
          {renderGroup("type.scale", type.scale, SAMPLE.scale)}
          {renderGroup("type.font", type.font, SAMPLE.micro)}
          {renderGroup("type.mod (sample)", {
            uppercase: `${type.scale.h2} ${type.mod.uppercase}`,
            muted: `${type.scale.body} ${type.mod.muted}`,
            red: `${type.font.mono} ${type.scale.caption} ${type.mod.red} ${type.mod.uppercase}`,
          })}
          {renderGroup("typeRole", typeRole)}
          {renderGroup("typeBlockTitle", { default: typeBlockTitle }, SAMPLE.micro)}
          <div className="space-y-6">
            <h3 className="text-white/50 text-sm font-bold uppercase tracking-wider">
              BlockTitle (blocks/BlockTitle.js)
            </h3>
            <div className="border-b border-white/5 py-1" />
            <BlockTitle>Gallery Header</BlockTitle>
            <BlockTitle token={typeSectionBlock.label}>Section Label Token</BlockTitle>
          </div>
          {renderGroup("typeSectionBlock", typeSectionBlock, SAMPLE.scale)}
          {renderGroup("typeBlockOverlay", typeBlockOverlay, SAMPLE.overlay)}
          {renderGroup("typeProjectCard", typeProjectCard, SAMPLE.overlay)}
          {renderGroup("typeServices", typeServices)}
        </div>
      </div>
    </section>
  );
}
