import { ReactNode } from "react";

type AppShellProps = {
  sidebar: ReactNode;
  children: ReactNode;
};

export function AppShell({ sidebar, children }: AppShellProps) {
  return (
    <div className="h-screen w-screen overflow-hidden bg-background text-foreground">
      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="w-[360px] border-r border-border">{sidebar}</aside>

        {/* Main experience */}
        <main className="relative flex-1">{children}</main>
      </div>
    </div>
  );
}
