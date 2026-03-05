import { typeRole } from "@/content/typography";

export default function SectionLabel({ children }) {
  return <span className={typeRole.sectionLabel}>{children}</span>;
}

