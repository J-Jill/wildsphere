export function Topbar({ onHome }: { onHome: () => void }) {
  return (
    <div className="flex items-center justify-between w-full">
      <h1
        onClick={onHome}
        className="font-vietnam font-black text-xl uppercase tracking-tighter cursor-pointer hover:text-white/70 transition-colors duration-200">
        Wildsphere
      </h1>

      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/30">
        <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
        Live data
      </div>
    </div>
  );
}
