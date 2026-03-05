import { typeRole } from "@/content/typography";

export default function PrimaryButton({ children, className = "" }) {
  const baseClasses = `bg-liberatiRed text-white py-4 px-10 ${typeRole.primaryCta} transition-colors duration-300 hover:bg-white hover:text-black`;

  return <button className={`${baseClasses} ${className}`}>{children}</button>;
}

