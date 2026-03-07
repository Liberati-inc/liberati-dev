import { typeServices } from "@/content/typography";

export const toolkitExclude = false;
export const toolkitOrder = 10;

export default function FormField({
  label,
  type = "text",
  placeholder,
  multiline = false,
}) {
  const commonClasses =
    "w-full bg-transparent border-none p-0 focus:ring-0 focus:outline-none text-white placeholder:text-white/20";

  return (
    <div className="border-b border-white/20 focus-within:border-liberatiRed transition-colors pb-2">
      <label className={`block mb-2 ${typeServices.meta}`}>
        {label}
      </label>
      {multiline ? (
        <textarea
          rows={4}
          placeholder={placeholder}
          className={`${commonClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={commonClasses}
        />
      )}
    </div>
  );
}

