import { typeRole } from "@/content/typography";

export const toolkitExclude = false;
export const toolkitOrder = 2;

export default function PrimaryButton({ label, className = "", href, onClick }) {
  const baseClasses = `rounded-[var(--radius\/main)] bg-liberatiRed text-white py-4 px-10 ${typeRole.primaryCta} transition-colors duration-300 hover:bg-white hover:text-black`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={`${baseClasses} ${className}`}>
        {label}
      </a>
    );
  }

  return <button type="button" onClick={onClick} className={`${baseClasses} ${className}`}>{label}</button>;
}

