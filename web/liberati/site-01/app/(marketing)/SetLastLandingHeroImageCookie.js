"use client";

import { useEffect } from "react";

const LAST_LANDING_HERO_IMAGE_COOKIE = "last_landing_hero_image";
const MAX_AGE_DAYS = 30;

/** Sets the last-shown hero fallback image so the server can exclude it on next reload. */
export default function SetLastLandingHeroImageCookie({ imagePath }) {
  useEffect(() => {
    if (!imagePath) return;
    const maxAge = 60 * 60 * 24 * MAX_AGE_DAYS;
    document.cookie = `${LAST_LANDING_HERO_IMAGE_COOKIE}=${encodeURIComponent(imagePath)}; path=/; max-age=${maxAge}; SameSite=Lax`;
  }, [imagePath]);
  return null;
}
