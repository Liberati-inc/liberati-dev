import { typeRole } from "@/content/typography";

export default function EyebrowLabel({ children, className = "" }) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="h-0.5 w-16 bg-liberatiRed" />
      <span className={typeRole.eyebrow}>{children}</span>
    </div>
  );
}

