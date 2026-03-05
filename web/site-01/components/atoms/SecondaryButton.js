export default function SecondaryButton({ children, className = "" }) {
  const baseClasses =
    "bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold uppercase tracking-widest text-xs transition-colors duration-300 py-4 px-10";

  return (
    <button className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
}

