import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface IntroOverlayProps {
  onEnter: () => void;
}

export function IntroOverlay({ onEnter }: IntroOverlayProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}>
      <motion.div
        className="max-w-xl text-center space-y-6 px-6"
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}>
        <h1 className="text-4xl font-bold tracking-tight">WildSphere</h1>

        <p className="text-zinc-400 text-lg">
          Explore real wildlife observations from around the world.
        </p>

        <p className="text-sm text-zinc-500">
          Each marker represents a real animal sighting. Discover species,
          locations, and stories.
        </p>

        <Button size="lg" onClick={onEnter}>
          Explore the planet
        </Button>
      </motion.div>
    </motion.div>
  );
}
