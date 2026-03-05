import SvgIcon from "@/components/atoms/SvgIcon";
import { type, typeServices } from "@/content/typography";

export default function ProjectCard({ title, meta, stillImage, vimeoId }) {
  const thumb =
    stillImage != null
      ? { backgroundImage: `url(${stillImage})`, backgroundSize: "cover", backgroundPosition: "center" }
      : null;

  return (
    <div className="group cursor-pointer">
      <div className="aspect-video bg-white/5 mb-4 overflow-hidden relative">
        {thumb ? (
          <div className="w-full h-full" style={thumb} />
        ) : (
          <div className="w-full h-full bg-white/5 flex items-center justify-center">
            <span className={`${type.scale.micro} ${type.mod.uppercase} ${type.mod.wideTrack} text-white/10`}>
              {vimeoId ? "Video" : "Project Asset Placeholder"}
            </span>
          </div>
        )}
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h5 className={`${typeServices.projectCardTitle} group-hover:text-liberatiRed transition-colors`}>{title}</h5>
          <p className={`${typeServices.meta} ${type.mod.uppercase} mt-1`}>
            {meta}
          </p>
        </div>
        <SvgIcon
          variant="northEast"
          sizeClass="w-5 h-5"
          colorClass="text-white group-hover:text-liberatiRed transition-colors"
          className="shrink-0"
        />
      </div>
    </div>
  );
}

