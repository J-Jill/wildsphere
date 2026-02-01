import { AppShell } from "@/components/layout/AppShell";
import { Sidebar } from "@/components/layout/Sidebar";
// import { OverlayPanel } from "@/components/layout/OverlayPanel";
import { GlobeScene } from "@/features/globe/GlobeScene.tsx";
import { Topbar } from "@/components/layout/Topbar";

export default function App() {
  return (
    <AppShell sidebar={<Topbar />} overlay={<Sidebar />}>
      <GlobeScene />{" "}
    </AppShell>
  );
}
