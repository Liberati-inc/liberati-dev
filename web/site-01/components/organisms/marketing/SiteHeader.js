import SvgIcon from "@/components/atoms/SvgIcon";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import PageContainer from "@/components/atoms/PageContainer";
import TextNavButton from "@/components/atoms/TextNavButton";
import { mainNav } from "@/content/nav";
import { headerPrimaryCta } from "@/content/cta";

/**
 * Toolkit header bar — same atoms/structure as TopNavSection.
 * Compare with landing_import.html to verify parity.
 */
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/75 backdrop-blur-md">
      <PageContainer className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <SvgIcon variant="wing" sizeClass="h-6 w-auto" />
          <a href="/#top" className="inline-flex items-center" aria-label="Liberati home">
            <SvgIcon
              variant="wordmark"
              sizeClass="h-4 w-auto"
              colorClass="text-white"
            />
          </a>
        </div>

        <div className="hidden items-center gap-12 md:flex">
          <nav className="flex items-center gap-12">
            {mainNav.map((item) => (
              <TextNavButton key={item.id} href={item.href}>
                {item.label}
              </TextNavButton>
            ))}
          </nav>

          <PrimaryButton href={headerPrimaryCta.href} className="py-2 px-6">
            {headerPrimaryCta.label}
          </PrimaryButton>
        </div>
      </PageContainer>
    </header>
  );
}
