import SectionLabel from "@/components/atoms/SectionLabel";
import ColorSwatch from "@/components/molecules/ColorSwatch";

export default function TK_ColorPaletteSection() {
  return (
    <section
      className="py-20 border-b border-white/5"
      data-purpose="colors-section"
    >
      <div className="space-y-6">
        <SectionLabel>Color Palette</SectionLabel>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <ColorSwatch
            name="Obsidican"
            hex="#0A0A0A"
            swatchClass="bg-obsidian border border-white/10"
          />
          <ColorSwatch
            name="Liberati Red"
            hex="#AE1E22"
            swatchClass="bg-liberatiRed"
          />
          <ColorSwatch
            name="Pure White"
            hex="#FFFFFF"
            swatchClass="bg-white"
            nameClass="text-white"
          />
          <ColorSwatch
            name="Muted Gray"
            hex="#A0A0A0"
            swatchClass="bg-mutedGray"
            nameClass="text-white"
          />
        </div>
      </div>
    </section>
  );
}
