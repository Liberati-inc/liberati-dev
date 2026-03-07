export const toolkitExclude = true;
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
      className={`max-w-7xl mx-auto ${className}`}
    >
      {inner}
    </Component>
  );
}

