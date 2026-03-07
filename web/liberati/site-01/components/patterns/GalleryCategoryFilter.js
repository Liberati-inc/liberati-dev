import Link from "next/link";
import { typeServices } from "@/content/typography";

export const toolkitExclude = false;
export const toolkitOrder = 7;

/**
 * Category filter tabs for projects gallery (Brands, Series & Film, Interactive, All).
 * Active tab uses liberatiRed underline; inactive use muted with hover to white.
 * When onSelect is provided, tabs are buttons and call onSelect(key); otherwise they are Links.
 */
export default function GalleryCategoryFilter({ items = [], activeKey, onSelect }) {
  const baseClass = `px-4 py-2 ${typeServices.meta} transition-colors`;

  return (
    <div className="flex flex-wrap gap-2 md:gap-4 border-b border-mutedGray/10 pb-2">
      {items.map((item) => {
        const isActive = activeKey === item.key;
        const itemClass = `${baseClass} ${
          isActive
            ? "text-liberatiRed"
            : "text-mutedGray hover:text-white group"
        }`;
        const underlineClass = `inline-block pb-1.5 border-b-2 ${
          isActive ? "border-liberatiRed" : "border-transparent "
        }`;
        if (onSelect) {
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onSelect(item.key)}
              className={itemClass}
            >
              <span className={underlineClass}>{item.label}</span>
            </button>
          );
        }
        return (
          <Link key={item.key} href={item.href ?? "#"} className={itemClass}>
            <span className={underlineClass}>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
