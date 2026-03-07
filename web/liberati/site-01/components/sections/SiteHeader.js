"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SvgIcon from "@/components/blocks/SvgIcon";
import PrimaryButton from "@/components/blocks/PrimaryButton";
import PageContainer from "@/components/blocks/PageContainer";
import TextNavButton from "@/components/blocks/TextNavButton";
import { useHeaderVisibility } from "@/components/providers/HeaderVisibilityProvider";
import { mainNav } from "@/content/nav";
import { headerPrimaryCta } from "@/content/cta";

export const toolkitExclude = false;
export const toolkitOrder = 1;

/**
 * Site header. On landing, visibility from HeaderVisibilityProvider (mouse + scroll).
 * Hamburger menu for mobile (below md).
 */
export default function SiteHeader({ slideOnScroll = false, position = "fixed" }) {
  const pathname = usePathname();
  const { headerVisible } = useHeaderVisibility();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutInView, setAboutInView] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const visible = !slideOnScroll || headerVisible;

  useEffect(() => {
    if (pathname !== "/") return;
    const aboutEl = document.getElementById("about");
    const topEl = document.getElementById("top");
    const check = () => {
      if (aboutEl) {
        const r = aboutEl.getBoundingClientRect();
        setAboutInView(r.top <= 0 && r.bottom > 0);
      }
      if (topEl) {
        const r = topEl.getBoundingClientRect();
        setAtTop(r.top >= -20);
      }
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [pathname]);

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
        className={`w-full shrink-0 border-b border-white/10 bg-black/75 backdrop-blur-md transition-transform duration-300 ease-out ${
          position === "static"
            ? "relative"
            : `fixed top-0 left-0 right-0 z-50 ${visible ? "translate-y-0" : "-translate-y-full"}`
        }`}
      >
        <PageContainer className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <SvgIcon variant="wing" sizeClass="h-6 w-auto" />
            <a
              href="/#top"
              className="inline-flex items-center"
              aria-label="Liberati home"
              onClick={(e) => {
                if (pathname === "/" && atTop) {
                  e.preventDefault();
                  window.location.href = "/#top";
                }
              }}
            >
              <SvgIcon
                variant="wordmark"
                sizeClass="h-4 w-auto"
                colorClass="text-white"
              />
            </a>
          </div>

          <div className="hidden items-center gap-12 md:flex">
            <nav className="flex items-center gap-12">
              {mainNav.map((item) => {
                const active =
                  item.href === "/projects"
                    ? pathname?.startsWith("/projects")
                    : item.href === "/#about"
                      ? pathname === "/" && aboutInView
                      : pathname === "/" && item.href.startsWith("/#");
                return (
                  <TextNavButton key={item.id} href={item.href} active={active} label={item.label} />
                );
              })}
            </nav>

            <PrimaryButton href={headerPrimaryCta.href} className="py-2 px-6" label={headerPrimaryCta.label} />
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex md:hidden p-3 -mr-3 min-w-[44px] min-h-[44px] items-center justify-center text-white hover:text-liberatiRed transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <SvgIcon
              variant={menuOpen ? "close" : "menu"}
              sizeClass="w-6 h-6"
              colorClass="currentColor"
            />
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
              label={headerPrimaryCta.label}
            />
          </div>
        </div>
      </div>
    </>
  );
}
