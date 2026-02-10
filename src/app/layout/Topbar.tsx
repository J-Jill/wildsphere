export function Topbar({ onHome }: { onHome: () => void }) {
  return (
    <div className="flex items-center justify-center w-full">
      <h1
        onClick={onHome}
        className="font-vietnam font-black text-2xl uppercase tracking-tighter">
        Wildsphere
      </h1>
    </div>
  );
}
