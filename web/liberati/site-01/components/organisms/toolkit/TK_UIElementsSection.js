import SectionLabel from "@/components/atoms/SectionLabel";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import SecondaryButton from "@/components/atoms/SecondaryButton";
import ProjectLink from "@/components/atoms/ProjectLink";
import TextNavButton from "@/components/atoms/TextNavButton";
import EyebrowLabel from "@/components/atoms/EyebrowLabel";
import FadeOnHover from "@/components/atoms/FadeOnHover";
import FilterPill from "@/components/molecules/FilterPill";
import { typeRole, typeServices } from "@/content/typography";
import { servicesCta } from "@/content/services";

export default function TK_UIElementsSection() {
  return (
    <section
      className="py-20 border-b border-white/5"
      data-purpose="ui-elements-section"
    >
      <div className="space-y-6">
        <SectionLabel>1.2 UI Elements</SectionLabel>

        <div className="space-y-16">
          {/* Primary Action */}
          <div className="flex flex-wrap items-center gap-8">
            <PrimaryButton>{servicesCta.label}</PrimaryButton>
            <ProjectLink href="#">View Project</ProjectLink>
          </div>

          {/* Text Nav Buttons (Top Nav / Footer) */}
          <div className="flex flex-wrap items-center gap-6">
            <TextNavButton href="#">Idle</TextNavButton>
            <TextNavButton href="#" className="text-white">
              Hover
            </TextNavButton>
            <TextNavButton href="#" active>
              Active
            </TextNavButton>
          </div>
          <p className={typeServices.meta}>
            TextNavButton &mdash; components/atoms/TextNavButton
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            <FilterPill>Idle</FilterPill>
            <FilterPill state="hover">Hover</FilterPill>
            <FilterPill state="active">Active</FilterPill>
          </div>
          <p className={typeServices.meta}>
            FilterPill &mdash; components/molecules/FilterPill
          </p>

          {/* Eyebrow label */}
          <div className="space-y-4">
            <EyebrowLabel>What We Do</EyebrowLabel>
            <p className={typeServices.meta}>
              EyebrowLabel &mdash; components/atoms/EyebrowLabel
            </p>
          </div>

          {/* FadeOnHover – overlay reveal (parent needs group) */}
          <div className="group relative w-48 h-24 bg-white/10 rounded overflow-hidden cursor-default">
            <FadeOnHover className="absolute inset-0 flex items-center justify-center bg-black/60">
              <span className="text-white text-sm">Hover to reveal</span>
            </FadeOnHover>
          </div>
          <p className={typeServices.meta}>
            FadeOnHover &mdash; components/atoms/FadeOnHover
          </p>

          {/* Button Atoms – Storybook-style lookup */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <PrimaryButton>PrimaryButton</PrimaryButton>
              <p className={`mt-2 ${typeServices.meta}`}>
                components/atoms/PrimaryButton
              </p>
            </div>
            <div>
              <SecondaryButton>SecondaryButton</SecondaryButton>
              <p className={`mt-2 ${typeServices.meta}`}>
                components/atoms/SecondaryButton
              </p>
            </div>
          </div>

          {/* Secondary Action */}
          <div>
            <button className="w-full py-6 border border-white/10 text-xs font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500">
              Load More Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

