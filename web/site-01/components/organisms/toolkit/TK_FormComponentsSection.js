import SectionLabel from "@/components/atoms/SectionLabel";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import FormField from "@/components/molecules/FormField";
import { typeServices } from "@/content/typography";

export default function TK_FormComponentsSection() {
  return (
    <section
      className="py-20 border-b border-white/5"
      data-purpose="form-components-section"
    >
      <div className="space-y-6">
        <SectionLabel>1.5 Form Components</SectionLabel>

        <div>
          <form className="max-w-2xl space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField label="Full Name" placeholder="John Doe" />
              <FormField
                label="Email Address"
                type="email"
                placeholder="john@example.com"
              />
            </div>
            <FormField
              label="Message"
              placeholder="Tell us about your vision..."
              multiline
            />
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <PrimaryButton>Send Message</PrimaryButton>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] tracking-widest text-green-500 uppercase">
                  Message sent successfully
                </span>
              </div>
            </div>
          </form>
          <p className={`mt-4 ${typeServices.meta}`}>
            FormField &mdash; components/molecules/FormField / PrimaryButton &mdash;
            components/atoms/PrimaryButton
          </p>
        </div>
      </div>
    </section>
  );
}

