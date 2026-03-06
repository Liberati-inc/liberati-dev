export const toolkitExclude = false;
export const toolkitOrder = 9;

export default function PageContainer({
  as: Component = "div",
  className = "",
  content,
  children,
}) {
  const inner = content ?? children;
  return (
    <Component
      className={`max-w-7xl mx-auto px-6 lg:px-10 ${className}`}
    >
      {inner}
    </Component>
  );
}

