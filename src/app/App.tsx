import { AppShell } from "@/components/layout/AppShell";
import { Sidebar } from "@/components/layout/Sidebar";
import { GlobeScene } from "@/features/globe/GlobeScene.tsx";

export default function App() {
  return (
    <AppShell sidebar={<Sidebar />}>
      <GlobeScene />
    </AppShell>
  );
}
