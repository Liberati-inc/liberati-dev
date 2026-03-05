import { typeRole } from "@/content/typography";

export default function PrimaryButton({ children, className = "", href, onClick }) {
  const baseClasses = `bg-liberatiRed text-white py-4 px-10 ${typeRole.primaryCta} transition-colors duration-300 hover:bg-white hover:text-black`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={`${baseClasses} ${className}`}>
        {children}
      </a>
    );
  }

  return <button type="button" onClick={onClick} className={`${baseClasses} ${className}`}>{children}</button>;
}

