export default function VideoOverlay() {
  return (
    <div className="relative aspect-video bg-white/5 group cursor-pointer overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/5 transition-all duration-500">
          <svg
            className="w-6 h-6 text-liberatiRed ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <p className="text-[10px] text-white tracking-[0.4em] uppercase">
          WATCH FILM
        </p>
      </div>
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
      <div className="w-full h-full bg-neutral-900" />
    </div>
  );
}

