import { Button } from "@/shared/ui/button";
import { motion } from "framer-motion";

interface IntroOverlayProps {
  onEnter: () => void;
}

export function IntroOverlay({ onEnter }: IntroOverlayProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>

      <motion.div
        className="max-w-lg w-full px-10 space-y-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>

        <motion.p
          className="text-[10px] uppercase tracking-[0.35em] text-fg-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}>
          Earth's Biodiversity
        </motion.p>

        <motion.h1
          className="font-vietnam font-black text-8xl uppercase tracking-tighter leading-[0.9] text-fg-1"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}>
          Wild<br />Sphere
        </motion.h1>

        <motion.p
          className="text-fg-2 text-base leading-relaxed max-w-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}>
          Discover species across the globe through real-time observations
          from the iNaturalist community.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}>
          <Button
            onClick={onEnter}
            className="rounded-none px-8 h-11 text-[11px] uppercase tracking-[0.2em] font-medium
                       bg-transparent border border-stroke-2 text-fg-1
                       hover:bg-white hover:text-black hover:border-white
                       transition-all duration-300">
            Explore
          </Button>
        </motion.div>

        <motion.p
          className="text-[10px] uppercase tracking-[0.2em] text-fg-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.8 }}>
          Powered by{" "}
          <a
            href="https://www.inaturalist.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg-2 transition-colors">
            iNaturalist
          </a>
        </motion.p>

      </motion.div>
    </motion.div>
  );
}
