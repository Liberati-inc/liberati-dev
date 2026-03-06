import { typeRole } from "@/content/typography";

export default function BriefCard({ title, children, lineDelimiter }) {
  const copy = typeof children === "string" ? children : String(children ?? "");
  const parts = lineDelimiter ? copy.split(lineDelimiter).map((s) => s.trim()).filter(Boolean) : [copy];
  return (
    <div>
      <h6 className={`${typeRole.disclaimer} mb-4`}>{title}</h6>
      <p className={typeRole.body}>
        {parts.length === 1 ? (
          parts[0]
        ) : (
          <>
            {parts.map((line, i) => (
              <span key={i}>
                {line}
                {i < parts.length - 1 && <br />}
              </span>
            ))}
          </>
        )}
      </p>
    </div>
  );
}

