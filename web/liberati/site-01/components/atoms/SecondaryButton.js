export default function SecondaryButton({ children, className = "", href }) {
  const baseClasses =
    "rounded-[var(--radius\/main)] bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold uppercase tracking-widest text-xs transition-colors duration-300 py-4 px-10";

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {children}
      </a>
    );
  }

  return <button className={`${baseClasses} ${className}`}>{children}</button>;
}

