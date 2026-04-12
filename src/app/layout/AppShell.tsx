import type { ReactNode } from "react";

type AppShellProps = {
  topBar: ReactNode;
  leftPanel: ReactNode;
  children: ReactNode;
};

export function AppShell({ topBar, leftPanel, children }: AppShellProps) {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-black text-white">
      {/* Top bar */}
      <div className="h-14 shrink-0 border-b border-white/[0.08] px-6 flex items-center">
        {topBar}
      </div>

      {/* Main area */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT: Panel */}
        <div className="w-[400px] shrink-0 border-r border-white/[0.08] bg-white/[0.015] backdrop-blur-xl overflow-hidden">
          {leftPanel}
        </div>

        {/* RIGHT: Globe */}
        <div className="flex-1 relative h-full overflow-hidden bg-black">
          {children}
        </div>
      </div>
    </div>
  );
}
