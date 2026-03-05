import SectionLabel from "@/components/atoms/SectionLabel";
import TypographySample from "@/components/molecules/TypographySample";
import { type, typeRole, typeServices } from "@/content/typography";

export default function TK_TypographySection() {
  return (
    <section
      className="py-20 border-b border-white/5"
      data-purpose="typography-section"
    >
      <div className="space-y-6">
        <SectionLabel>1.1 Typography</SectionLabel>

        <div className="space-y-12">
          <TypographySample
            label="H0 - Manrope ExtraBold (80px)"
            as="h1"
            className={`${type.scale.h0} ${type.mod.uppercase}`}
          >
            Cinematic Motion &amp; Design
          </TypographySample>

          <TypographySample
            label="H1 - Manrope ExtraBold (72px)"
            as="h1"
            className={type.scale.h1}
          >
            Cinematic Direction.
          </TypographySample>

          <TypographySample
            label="H2 - Manrope Bold (48px)"
            as="h2"
            className={type.scale.h2}
          >
            Immersive Digital Experiences.
          </TypographySample>

          <TypographySample
            label="H3 - Manrope SemiBold (30px)"
            as="h3"
            className={type.scale.h3}
          >
            The Intersection of Art and Code.
          </TypographySample>

          <TypographySample
            label="Body - Manrope Regular (16px/1.6)"
            as="p"
            className={typeRole.body}
          >
            We create visual narratives that resonate with global audiences,
            blending high-end aesthetics with technical precision. Every pixel
            serves a purpose in the Liberati ecosystem.
          </TypographySample>

          <TypographySample
            label="Disclaimer - Manrope Micro (10px)"
            as="p"
            className={typeRole.disclaimer}
          >
            Services availability and details may vary by engagement.
          </TypographySample>

          <TypographySample
            label="Service Title"
            as="h4"
            className={typeServices.title}
          >
            Direction &amp; Creative Strategy
          </TypographySample>

          <TypographySample
            label="Service Body"
            as="p"
            className={typeServices.body}
          >
            High-level positioning and narrative framing for each engagement.
          </TypographySample>

          <TypographySample
            label="Service Meta List"
            as="p"
            className={typeServices.meta}
          >
            Brand systems • Pitch Decks • Campaign Themes
          </TypographySample>

          <TypographySample
            label="Nav Link"
            as="button"
            className={typeRole.navLink}
          >
            Work
          </TypographySample>

          <TypographySample
            label="Nav Filter Pill"
            as="button"
            className={typeRole.primaryCta}
          >
            Direction &amp; Strategy
          </TypographySample>

          <TypographySample
            label="Primary CTA Label"
            as="button"
            className={typeRole.primaryCta}
          >
            View Showreel
          </TypographySample>
          <p className={typeServices.meta}>
            TypographySample &mdash; components/molecules/TypographySample
          </p>
        </div>
      </div>
    </section>
  );
}

