import { typeRole, typeSectionBlock } from "@/content/typography";

export const toolkitExclude = false;
export const toolkitOrder = 0;

export default function BriefCard({ title, copy, lineDelimiter }) {
  const copyText = typeof copy === "string" ? copy : String(copy ?? "");
  const parts = lineDelimiter ? copyText.split(lineDelimiter).map((s) => s.trim()).filter(Boolean) : [copyText];
  return (
    <div>
      <h6 className={`${typeSectionBlock.label} mb-4`}>{title}</h6>
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

