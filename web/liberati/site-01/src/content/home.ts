export const heroCopy = {
  heading: "Liberating Ideas Through Motion & Interactive Design",
  body:
    "High-end visuals for global brands that demand distinction. We transform concepts into immersive digital experiences.",
};

/** Hero poster images — URL refs to Git assets (no bundling). Override base via NEXT_PUBLIC_IMAGE_BASE. */
const IMAGE_BASE =
  process.env.NEXT_PUBLIC_IMAGE_BASE ??
  "https://raw.githubusercontent.com/Liberati-inc/liberati-dev/main/assets/images/img";

export const heroFallbackImages: string[] = [
  `${IMAGE_BASE}/landing/landing-01.jpg`,
  `${IMAGE_BASE}/landing/landing_02.webp`,
  `${IMAGE_BASE}/landing/landing_03.jpg`,
  `${IMAGE_BASE}/landing/landing_04.jpg`,
  `${IMAGE_BASE}/landing/landing_bg_06.png`,
  `${IMAGE_BASE}/landing/FTC_Concept_03.webp`,
  `${IMAGE_BASE}/landing/2013-06-19%2011.35.18-2.jpg`,
  `${IMAGE_BASE}/landing/Hornet_GRABS_01.jpg`,
  `${IMAGE_BASE}/landing/Hornet_GRABS_02.jpg`,
];

/** Returns a random hero fallback image excluding the given one (for cookie memory). */
export function getHeroFallbackImageExcluding(excludePath: string | undefined): string {
  if (heroFallbackImages.length === 0) return "";
  const pool = excludePath ? heroFallbackImages.filter((p) => p !== excludePath) : heroFallbackImages;
  const pickFrom = pool.length > 0 ? pool : heroFallbackImages;
  return pickFrom[Math.floor(Math.random() * pickFrom.length)];
}
/** When true, landing hero picks a random video and excludes the last-shown one on reload (cookie memory). */
export const heroRandomize = true;

export const aboutCopy = {
  eyebrow: "About Us",
  heading: "We partner with\nbrands & beyond",
  body:
  "Liberati is a remote studio crafting motion and interactive experiences, led by award-winning director and designer Ming Hsiung. He brings ideas to life with a focus on craft, curiosity, and clarity—approaching every project with the same energy he brings to his own."  
  // "Liberati is a remote motion and interactive design studio led by Ming Hsiung. We are dedicated to pushing the boundaries of visual storytelling, crafting cinematic experiences that resonate.",
};

/** Eyebrow and copy for the featured projects section. */
export const featuredCopy = {
  eyebrow: "Featured Work",
};

/** Slugs of projects to feature on the landing. Resolved from content/projects/. */
export const featuredProjectSlugs: string[] = ["katrina", "mara"];
