import Link from "next/link";
import { typeServices } from "@/content/typography";

/**
 * Category filter tabs for projects gallery (Brands, Series & Film, Interactive, All).
 * Active tab uses liberatiRed underline; inactive use muted with hover to white.
 * When onSelect is provided, tabs are buttons and call onSelect(key); otherwise they are Links.
 */
export default function GalleryCategoryFilter({ items, activeKey, onSelect }) {
  const baseClass = `px-4 py-2 ${typeServices.meta} border-b-2 transition-colors`;

  return (
    <div className="flex flex-wrap gap-2 md:gap-4 border-b border-liberatiRed/10 pb-2">
      {items.map((item) => {
        const isActive = activeKey === item.key;
        const itemClass = `${baseClass} ${
          isActive
            ? "border-liberatiRed text-liberatiRed"
            : "border-transparent text-mutedGray hover:text-white"
        }`;
        if (onSelect) {
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onSelect(item.key)}
              className={itemClass}
            >
              {item.label}
            </button>
          );
        }
        return (
          <Link key={item.key} href={item.href ?? "#"} className={itemClass}>
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
