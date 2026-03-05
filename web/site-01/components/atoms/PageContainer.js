export default function PageContainer({
  as: Component = "div",
  className = "",
  children,
}) {
  return (
    <Component
      className={`max-w-7xl mx-auto px-6 lg:px-10 ${className}`}
    >
      {children}
    </Component>
  );
}

