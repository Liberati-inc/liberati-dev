import { typeRole } from "@/content/typography";

export const toolkitExclude = false;
export const toolkitOrder = 1;

export default function EyebrowLabel({ label, className = "" }) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="h-0.5 w-16 bg-liberatiRed" />
      <span className={typeRole.eyebrow}>{label}</span>
    </div>
  );
}

