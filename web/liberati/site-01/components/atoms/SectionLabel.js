import { typeRole } from "@/content/typography";

export const toolkitExclude = true;

export default function SectionLabel({ children }) {
  return <span className={typeRole.sectionLabel}>{children}</span>;
}

