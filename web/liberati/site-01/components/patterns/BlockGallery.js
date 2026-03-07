import BlockTitle from "@/components/blocks/BlockTitle";
import { typeRole } from "@/content/typography";
import { getAspectStyle } from "./blockUtils";

export const toolkitExclude = false;
export const toolkitOrder = 2;

export default function BlockGallery({ block = {} }) {
  const { sectionTitle, images } = block;
  const validImages = (images ?? []).filter((img) => img?.imageUrl);
  if (!validImages.length) return null;
  const cols =
    validImages.length >= 6
      ? "grid-cols-2 sm:grid-cols-2 md:grid-cols-3"
      : validImages.length >= 3
        ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        : "grid-cols-1 sm:grid-cols-2";

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-16 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        {sectionTitle && <BlockTitle>{sectionTitle}</BlockTitle>}
        <div className={`grid ${cols} gap-3 sm:gap-4 md:gap-8`}>
          {validImages.map((img, i) => {
            const aspectStyle = getAspectStyle({ ...block, ...img });
            return (
              <div key={i} className="group relative overflow-hidden bg-white/5 min-h-0 aspect-video" style={aspectStyle}>
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${img.imageUrl})` }}
                />
                {img.caption && (
                  <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4">
                    <p className={`${typeRole.disclaimer} text-white`}>{img.caption}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
