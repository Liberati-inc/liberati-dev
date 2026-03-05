"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const SCROLL_THRESHOLD = 50;
const HeaderVisibilityContext = createContext({ headerVisible: true });

export function useHeaderVisibility() {
  return useContext(HeaderVisibilityContext);
}

/** On landing (/), header shows on mousemove or scroll past top. Else always visible. */
export function HeaderVisibilityProvider({ children }) {
  const pathname = usePathname();
  const slideOnScroll = pathname === "/";
  const [mouseOver, setMouseOver] = useState(false);
  const [scrolledPastTop, setScrolledPastTop] = useState(false);
  const headerVisible = !slideOnScroll || mouseOver || scrolledPastTop;

  useEffect(() => {
    if (!slideOnScroll) return;
    const show = () => setMouseOver(true);
    const hide = () => setMouseOver(false);
    document.body.addEventListener("mousemove", show);
    document.body.addEventListener("mouseleave", hide);
    return () => {
      document.body.removeEventListener("mousemove", show);
      document.body.removeEventListener("mouseleave", hide);
    };
  }, [slideOnScroll]);

  useEffect(() => {
    if (!slideOnScroll) return;
    const onScroll = () => setScrolledPastTop(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slideOnScroll]);

  return (
    <HeaderVisibilityContext.Provider value={{ headerVisible }}>
      {children}
    </HeaderVisibilityContext.Provider>
  );
}
