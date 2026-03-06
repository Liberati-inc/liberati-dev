import { typeRole } from "@/content/typography";

export const toolkitExclude = true; // toolkit chrome only
export const toolkitOrder = 999;

export default function SectionLabel({ label }) {
  return <span className={typeRole.sectionLabel}>{label}</span>;
}

