"use client";

import { useState, useEffect } from "react";
import SvgIcon from "@/components/atoms/SvgIcon";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import PageContainer from "@/components/atoms/PageContainer";
import TextNavButton from "@/components/atoms/TextNavButton";
import { mainNav } from "@/content/nav";
import { headerPrimaryCta } from "@/content/cta";

/**
 * Toolkit header bar — same atoms/structure as TopNavSection.
 * slideOnHover: only on landing; header slides in when mouse is over the browser. Else always visible.
 * Hamburger menu for mobile (below md).
 */
export default function SiteHeader({ slideOnScroll = false }) {
  const slideOnHover = slideOnScroll;
  const [visible, setVisible] = useState(!slideOnHover);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!slideOnHover) return;
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    document.body.addEventListener("mousemove", show);
    document.body.addEventListener("mouseleave", hide);
    return () => {
      document.body.removeEventListener("mousemove", show);
      document.body.removeEventListener("mouseleave", hide);
    };
  }, [slideOnHover]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-black/75 backdrop-blur-md transition-transform duration-300 ease-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
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

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex md:hidden p-3 -mr-3 min-w-[44px] min-h-[44px] items-center justify-center text-white hover:text-liberatiRed transition-colors"
            aria-label="Open menu"
          >
            <SvgIcon variant="menu" sizeClass="w-6 h-6" colorClass="currentColor" />
          </button>
        </PageContainer>
      </header>

      {/* Mobile menu overlay */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-obsidian/95 backdrop-blur-md md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col min-h-screen pt-20 pb-8 px-6" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            onClick={closeMenu}
            className="absolute top-4 right-6 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:text-liberatiRed transition-colors"
            aria-label="Close menu"
          >
            <SvgIcon variant="close" sizeClass="w-6 h-6" colorClass="currentColor" />
          </button>

          <nav className="flex flex-col gap-2">
            {mainNav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={closeMenu}
                className="block py-4 px-2 text-lg text-white hover:text-liberatiRed transition-colors border-b border-white/10 min-h-[44px] flex items-center"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-8">
            <PrimaryButton
              href={headerPrimaryCta.href}
              onClick={closeMenu}
              className="w-full py-4 justify-center"
            >
              {headerPrimaryCta.label}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
}
