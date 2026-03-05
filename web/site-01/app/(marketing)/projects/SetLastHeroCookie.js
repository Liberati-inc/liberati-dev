"use client";

import { useEffect } from "react";

const LAST_HERO_COOKIE = "last_projects_hero";
const MAX_AGE_DAYS = 30;

/** Sets the last-shown hero slug in a cookie so the server can exclude it on next reload. */
export default function SetLastHeroCookie({ slug }) {
  useEffect(() => {
    if (!slug) return;
    const maxAge = 60 * 60 * 24 * MAX_AGE_DAYS;
    document.cookie = `${LAST_HERO_COOKIE}=${encodeURIComponent(slug)}; path=/; max-age=${maxAge}; SameSite=Lax`;
  }, [slug]);
  return null;
}
