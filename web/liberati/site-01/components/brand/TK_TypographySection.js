import SectionLabel from "@/components/atoms/SectionLabel";
import TypographySample from "@/components/molecules/TypographySample";
import {
  type,
  typeRole,
  typeBlockOverlay,
  typeServices,
} from "@/content/typography";

const SAMPLE = {
  scale: "Cinematic Motion & Design",
  role: "We create visual narratives that resonate with global audiences.",
  micro: "Services availability may vary.",
  overlay: "Immersive Digital Experiences.",
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
            as={["h0", "h1", "h2", "h3", "h4", "landing"].includes(key) ? "h1" : "p"}
            className={className}
          >
            {["body", "landing"].includes(key)
              ? SAMPLE.role
              : key.includes("micro") || key.includes("disclaimer") || key.includes("Label") || key.includes("eyebrow") || key.includes("footer") || key.includes("Meta") || key.includes("Cta") || key.includes("navLink")
                ? SAMPLE.micro
                : key.includes("title") || key.includes("overlay") || key.includes("projectCard")
                  ? SAMPLE.overlay
                  : SAMPLE.scale}
          </TypographySample>
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
        <SectionLabel>Typography</SectionLabel>
        <div className="space-y-16">
          {renderGroup("type.scale", type.scale, SAMPLE.scale)}
          {renderGroup("type.mod (sample)", {
            uppercase: `${type.scale.h2} ${type.mod.uppercase}`,
            muted: `${type.scale.body} ${type.mod.muted}`,
            red: `${type.scale.micro} ${type.mod.red} ${type.mod.uppercase}`,
          })}
          {renderGroup("typeRole", typeRole)}
          {renderGroup("typeBlockOverlay", typeBlockOverlay, SAMPLE.overlay)}
          {renderGroup("typeServices", typeServices)}
        </div>
      </div>
    </section>
  );
}
