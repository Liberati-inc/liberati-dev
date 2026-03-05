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
            <span className="text-white/10 text-xs tracking-widest uppercase">
              {vimeoId ? "Video" : "Project Asset Placeholder"}
            </span>
          </div>
        )}
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h5 className="text-lg font-bold">{title}</h5>
          <p className="text-[10px] text-mutedGray uppercase tracking-widest mt-1">
            {meta}
          </p>
        </div>
        <span className="text-xl group-hover:text-liberatiRed transition-colors">
          ↗
        </span>
      </div>
    </div>
  );
}

