import { Button } from "@/shared/ui/button";
import { motion } from "framer-motion";

interface IntroOverlayProps {
  onEnter: () => void;
}

export function IntroOverlay({ onEnter }: IntroOverlayProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
      <motion.div
        className="max-w-xl text-center space-y-6 px-6"
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        <motion.h1
          className="font-vietnam font-black text-6xl uppercase tracking-tighter"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}>
          WildSphere
        </motion.h1>

        <motion.p
          className="text-zinc-300 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.8 }}>
          EXPLORE EARTH'S BIODIVERSITY
        </motion.p>

        <motion.p
          className="text-xl text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.8 }}>
          Discover species across the globe through real-time observations. An
          immersive journey into the natural world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}>
          <Button
            size="lg"
            onClick={onEnter}
            className="px-8 py-5 text-lg font-medium rounded-xl 
             bg-white/10 backdrop-blur-md border border-white/20 
             hover:bg-white/20 transition-all duration-300">
            Explore the planet
          </Button>
        </motion.div>

        <motion.p
          className="text-sm text-zinc-600 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1, duration: 0.8 }}>
          Powered by data from{" "}
          <a
            href="https://www.inaturalist.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-zinc-500 hover:decoration-zinc-300 transition-colors">
            iNaturalist
          </a>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
