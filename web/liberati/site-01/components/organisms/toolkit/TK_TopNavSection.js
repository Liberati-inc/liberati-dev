import SectionLabel from "@/components/atoms/SectionLabel";
import SiteHeader from "@/components/organisms/marketing/SiteHeader";
import { typeServices } from "@/content/typography";

export default function TK_TopNavSection() {
  return (
    <section
      className="py-20 border-b border-white/5"
      data-purpose="topnav-section"
    >
      <div className="space-y-6">
        <SectionLabel>3.0 Top Navigation</SectionLabel>

        <div>
          <SiteHeader />
          <p className={`mt-4 ${typeServices.meta}`}>
            SiteHeader &mdash; components/organisms/marketing/SiteHeader
          </p>
        </div>
      </div>
    </section>
  );
}

