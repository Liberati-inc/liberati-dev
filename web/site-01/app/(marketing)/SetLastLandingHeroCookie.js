"use client";

import { useEffect } from "react";

const LAST_LANDING_HERO_COOKIE = "last_landing_hero";
const MAX_AGE_DAYS = 30;

/** Sets the last-shown hero vimeo ID so the server can exclude it on next reload. */
export default function SetLastLandingHeroCookie({ vimeoId }) {
  useEffect(() => {
    if (!vimeoId) return;
    const maxAge = 60 * 60 * 24 * MAX_AGE_DAYS;
    document.cookie = `${LAST_LANDING_HERO_COOKIE}=${encodeURIComponent(vimeoId)}; path=/; max-age=${maxAge}; SameSite=Lax`;
  }, [vimeoId]);
  return null;
}
