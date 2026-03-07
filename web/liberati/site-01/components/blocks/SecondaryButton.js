import { typeRole } from "@/content/typography";

export const toolkitExclude = false;
export const toolkitOrder = 3;

export default function SecondaryButton({ label, className = "", href }) {
  const baseClasses =
    `rounded-[var(--radius\/main)] bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white py-4 px-10 ${typeRole.button} transition-colors duration-300`;

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {label}
      </a>
    );
  }

  return <button className={`${baseClasses} ${className}`}>{label}</button>;
}

