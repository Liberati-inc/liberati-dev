import Link from "next/link";
import { typeServices } from "@/content/typography";

/**
 * Category filter tabs for projects gallery (Brands, Series & Film, Interactive, All).
 * Active tab uses liberatiRed underline; inactive use muted with hover to white.
 */
export default function GalleryCategoryFilter({ items, activeKey }) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-4 border-b border-liberatiRed/10 pb-2">
      {items.map((item) => {
        const isActive = activeKey === item.key;
        const linkClass = `px-4 py-2 ${typeServices.meta} border-b-2 transition-colors ${
          isActive
            ? "border-liberatiRed text-liberatiRed"
            : "border-transparent text-mutedGray hover:text-white"
        }`;
        return (
          <Link key={item.key} href={item.href ?? "#"} className={linkClass}>
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
