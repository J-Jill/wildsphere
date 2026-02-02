import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AppShell } from "@/components/layout/AppShell";
import { Sidebar } from "@/components/layout/Sidebar";
import { GlobeScene } from "@/features/globe/GlobeScene.tsx";
import { Topbar } from "@/components/layout/Topbar";
import { IntroOverlay } from "@/features/intro/IntroOverlay";

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!hasEntered && (
          <IntroOverlay key="intro" onEnter={() => setHasEntered(true)} />
        )}
      </AnimatePresence>{" "}
      <AppShell sidebar={<Topbar />} overlay={<Sidebar />}>
        <GlobeScene active={hasEntered} />
      </AppShell>
    </>
  );
}
