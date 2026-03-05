import { typeRole } from "@/content/typography";

export default function EyebrowLabel({ children }) {
  return (
    <div className="space-y-4">
      <div className="h-px w-16 bg-liberatiRed" />
      <span className={typeRole.eyebrow}>{children}</span>
    </div>
  );
}

