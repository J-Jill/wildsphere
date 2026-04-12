import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AppShell } from "@/app/layout/AppShell";
import { GlobeScene } from "@/features/globe/GlobeScene";
import { Topbar } from "@/app/layout/Topbar";
import { IntroOverlay } from "@/features/intro/IntroOverlay";
import { LeftPanel } from "@/app/layout/LeftPanel";
import { useObservations } from "@/features/observation-panel/hooks/useObservations";
import { TooltipProvider } from "@/features/globe/model/TooltipContext";

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
        <TooltipProvider>
          <GlobeScene active={hasEntered} />
        </TooltipProvider>
      </AppShell>
    </>
  );
}
