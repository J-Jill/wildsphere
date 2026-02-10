import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AppShell } from "@/app/layout/AppShell";
import { GlobeScene } from "@/features/globe/GlobeScene";
import { Topbar } from "@/app/layout/Topbar";
import { IntroOverlay } from "@/features/intro/IntroOverlay";
import { LeftPanel } from "./layout/LeftPanel";
import { useObservations } from "@/features/ObservationPanel/hooks/useObservations";

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const { isLoading, isError } = useObservations();

  return (
    <>
      <AnimatePresence>
        {!hasEntered && (
          <IntroOverlay key="intro" onEnter={() => setHasEntered(true)} />
        )}
      </AnimatePresence>{" "}
      <AppShell
        topBar={<Topbar onHome={() => setHasEntered(false)} />}
        leftPanel={<LeftPanel isLoading={isLoading} isError={isError} />}>
        <GlobeScene active={hasEntered} />
      </AppShell>
    </>
  );
}
