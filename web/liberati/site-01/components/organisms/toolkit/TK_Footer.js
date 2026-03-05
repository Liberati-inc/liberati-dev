import SectionLabel from "@/components/atoms/SectionLabel";
import Footer from "@/components/organisms/marketing/Footer";
import { typeServices } from "@/content/typography";

export default function TK_Footer() {
  return (
    <section
      className="py-20 border-b border-white/5"
      data-purpose="footer-section"
    >
      <div className="space-y-6">
        <SectionLabel>3.4 Footer</SectionLabel>

        <div>
          <Footer />
          <p className={`mt-4 ${typeServices.meta}`}>
            Footer &mdash; components/organisms/marketing/Footer
          </p>
        </div>
      </div>
    </section>
  );
}

