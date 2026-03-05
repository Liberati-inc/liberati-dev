import { typeRole } from "@/content/typography";

export default function PrimaryButton({ children, className = "", href }) {
  const baseClasses = `bg-liberatiRed text-white py-4 px-10 ${typeRole.primaryCta} transition-colors duration-300 hover:bg-white hover:text-black`;

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {children}
      </a>
    );
  }

  return <button className={`${baseClasses} ${className}`}>{children}</button>;
}

