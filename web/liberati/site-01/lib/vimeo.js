/**
 * Fetches Vimeo thumbnail URL via public oEmbed API (no auth required).
 * maxwidth=1280 returns 1280×720 thumbnails (vs ~295px default).
 * @see https://developer.vimeo.com/oembed
 * @param {string} vimeoId - Vimeo video ID
 * @returns {Promise<string|null>} thumbnail_url or null on failure
 */
export async function fetchVimeoThumbnail(vimeoId) {
  if (!vimeoId) return null;
  try {
    const url = `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}&maxwidth=1280`;
    const res = await fetch(url, { next: { revalidate: 3600 } }); // cache 1h
    if (!res.ok) return null;
    const data = await res.json();
    return data?.thumbnail_url ?? null;
  } catch {
    return null;
  }
}
