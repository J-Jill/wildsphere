import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AppShell } from "@/app/layout/AppShell";
import { GlobeScene } from "@/features/globe/GlobeScene";
import { Topbar } from "@/app/layout/Topbar";
import { IntroOverlay } from "@/features/intro/IntroOverlay";
import { LeftPanel } from "./layout/LeftPanel";

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!hasEntered && (
          <IntroOverlay key="intro" onEnter={() => setHasEntered(true)} />
        )}
      </AnimatePresence>{" "}
      <AppShell topBar={<Topbar />} leftPanel={<LeftPanel />}>
        <GlobeScene active={hasEntered} />
      </AppShell>
    </>
  );
}
