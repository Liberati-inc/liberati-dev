import type { Service, CTA } from "./types";

export const servicesCopy = {
  eyebrow: "What We Do",
};

export const services: Service[] = [
  {
    id: "direction",
    title: "Direction",
    description:
      "Conceptual development with strategic creative and technical execution.",
    items: ["Art Direction", "Brand Narrative", "Visual Strategy"],
    iconVariant: "direction",
  },
  {
    id: "motion",
    title: "Motion",
    description:
      "High-end 3D animation and cinematic sequences that bring static ideas to life.",
    items: ["2D/3D Motion Graphics", "Title Sequences", "VFX Mastery"],
    iconVariant: "motion",
  },
  {
    id: "interactive",
    title: "Interactive",
    description:
      "Bespoke web experiences and UI/UX motion designed for deep engagement.",
    items: ["Web Experiences", "Experimental Tech", "UI Motion"],
    iconVariant: "interactive",
  },
];

export const servicesNote =
  "+ Services are subject to change.";

export const servicesCta: CTA = {
  id: "services-schedule-call",
  label: "Schedule a Call",
};

