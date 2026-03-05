"use client";

import SectionLabel from "@/components/atoms/SectionLabel";
import NavArrowButton from "@/components/atoms/NavArrowButton";
import SvgButton from "@/components/atoms/SvgButton";
import { footerSocial } from "@/content/nav";
import { typeServices } from "@/content/typography";

export default function TK_IconButtonsSection() {
  return (
    <section
      className="py-20 border-b border-white/5"
      data-purpose="icon-buttons-section"
    >
      <div className="space-y-6">
        <SectionLabel>1.4 Icon Buttons</SectionLabel>

        {/* Nav arrows (carousel prev/next) */}
        <div className="relative h-24 rounded border border-white/10 flex items-center justify-center bg-black/20">
          <NavArrowButton direction="prev" onClick={() => {}} ariaLabel="Previous" />
          <NavArrowButton direction="next" onClick={() => {}} ariaLabel="Next" />
        </div>
        <p className={typeServices.meta}>
          NavArrowButton — components/atoms/NavArrowButton
        </p>

        {/* Circular social buttons (About section style) */}
        <div className="flex flex-wrap gap-4 justify-start">
          {footerSocial.map((social) => (
            <SvgButton
              key={`circle-${social.id}`}
              href={social.href}
              materialIcon={social.icon}
              label={social.icon}
            />
          ))}
        </div>
        <p className={typeServices.meta}>
          SvgButton (circle) &mdash; components/atoms/SvgButton
        </p>

        {/* Footer inline social icons (no border, red hover) */}
        <div className="flex flex-wrap gap-4 justify-start">
          {footerSocial.map((social) => (
            <SvgButton
              key={`footer-${social.id}`}
              href={social.href}
              materialIcon={social.icon}
              label={social.icon}
              kind="footer"
            />
          ))}
        </div>
        <p className={typeServices.meta}>
          SvgButton (footer) &mdash; components/atoms/SvgButton
        </p>
      </div>
    </section>
  );
}


