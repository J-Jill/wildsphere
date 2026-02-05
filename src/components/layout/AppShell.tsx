import type { ReactNode } from "react";

type AppShellProps = {
  sidebar: ReactNode;
  overlay?: ReactNode;
  children: ReactNode;
};

export function AppShell({ sidebar, overlay, children }: AppShellProps) {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-black text-white">
      {/* Top bar */}
      <div className="h-16 shrink-0 border-b border-white/10 bg-zinc-950 flex items-center">
        {sidebar}
      </div>

      {/* Main area */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT: Card */}
        <div className="w-[420px] shrink-0 border-r border-white/10 bg-zinc-950/95 backdrop-blur overflow-hidden">
          {overlay}
        </div>

        {/* RIGHT: Globe */}
        <div className="flex-1 relative h-full overflow-hidden bg-black">
          {children}
        </div>
      </div>
    </div>
  );
}
