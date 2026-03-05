import TK_Header from "@/components/organisms/toolkit/TK_Header";
import TK_ColorPaletteSection from "@/components/organisms/toolkit/TK_ColorPaletteSection";
import TK_TypographySection from "@/components/organisms/toolkit/TK_TypographySection";
import TK_UIElementsSection from "@/components/organisms/toolkit/TK_UIElementsSection";
import TK_IconographySection from "@/components/organisms/toolkit/TK_IconographySection";
import TK_IconButtonsSection from "@/components/organisms/toolkit/TK_IconButtonsSection";
import TK_FormComponentsSection from "@/components/organisms/toolkit/TK_FormComponentsSection";
import TK_LayoutGridSection from "@/components/organisms/toolkit/TK_LayoutGridSection";
import TK_ProjectDetailsSection from "@/components/organisms/toolkit/TK_ProjectDetailsSection";
import TK_AdditionalSection from "@/components/organisms/toolkit/TK_AdditionalSection";
import TK_TopNavSection from "@/components/organisms/toolkit/TK_TopNavSection";
import TK_HeroSection from "@/components/organisms/toolkit/TK_HeroSection";
import TK_AboutSection from "@/components/organisms/toolkit/TK_AboutSection";
import TK_ServicesSection from "@/components/organisms/toolkit/TK_ServicesSection";
import TK_Footer from "@/components/organisms/toolkit/TK_Footer";

export default function ToolkitPage() {
  return (
    <main className="min-h-screen bg-obsidian text-pureWhite">
      <TK_Header />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-32">
        {/* Atoms / tokens */}
        <TK_ColorPaletteSection />
        <TK_TypographySection />
        <TK_UIElementsSection />
        <TK_IconographySection />
        <TK_IconButtonsSection />
        <TK_FormComponentsSection />

        {/* Molecules / layouts */}
        <TK_LayoutGridSection />
        <TK_AdditionalSection />

        {/* Organisms */}
        <TK_TopNavSection />
        <TK_HeroSection />
        <TK_AboutSection />
        <TK_ServicesSection />
        <TK_ProjectDetailsSection />
        <TK_Footer />
      </div>
    </main>
  );
}

