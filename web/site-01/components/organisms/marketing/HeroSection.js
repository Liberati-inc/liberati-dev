import PrimaryButton from "@/components/atoms/PrimaryButton";
import SecondaryButton from "@/components/atoms/SecondaryButton";
import HeroBackground from "@/components/organisms/marketing/HeroBackground";
import { heroCopy } from "@/content/home";
import { heroPrimaryCta, heroSecondaryCta } from "@/content/cta";
import { type, typeRole } from "@/content/typography";
import { getRandomHeroVimeoId } from "@/content/videos";

const HERO_FALLBACK_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDgfeF8BlBclNhBPSZsb22BP0TEBZiW5JbqHv3TyfYp5wcbvlz66DSXAj8_aA0DLDFCRmPVsOzZJQsKDYbQr_pELbWz59agD6otNzcXcajaFN8NoDDljpB88fu3JdWj96Q8MgmbD4zsdF4pWWHOH8lb6zfneusgUWwjL_5pa4QptBwkd_R7Awt4VRUb1kcb1igaZX0xe9SFWE7G0QLPYvu45Ha3sAJoK8k793lSqlvfLxQaSboQrTreIIF2943cULmUX3bRZgluaQFv";

export default function HeroSection({ vimeoId: vimeoIdProp }) {
  const vimeoId = vimeoIdProp ?? getRandomHeroVimeoId();

  return (
    <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <HeroBackground vimeoId={vimeoId} fallbackImageUrl={HERO_FALLBACK_IMAGE} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-obsidian z-10" />
      </div>

      <div className="relative z-20 max-w-5xl px-6 text-center">
        <h1 className={`${type.scale.h0} ${type.mod.uppercase} mb-6`}>
          {heroCopy.heading}
        </h1>
        <p className={`${typeRole.body} mx-auto mb-10`}>
          {heroCopy.body}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PrimaryButton>
            {heroPrimaryCta.label}
          </PrimaryButton>
          <SecondaryButton>
            {heroSecondaryCta.label}
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}

