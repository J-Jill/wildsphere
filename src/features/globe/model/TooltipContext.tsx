import { createContext, useContext, useState } from "react";

type TooltipState = { x: number; y: number; text: string } | null;

type TooltipContextValue = {
  tooltip: TooltipState;
  setTooltip: (t: TooltipState) => void;
};

const TooltipContext = createContext<TooltipContextValue | null>(null);

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  const [tooltip, setTooltip] = useState<TooltipState>(null);

  return (
    <TooltipContext.Provider value={{ tooltip, setTooltip }}>
      {children}

      {tooltip && (
        <div
          style={{
            position: "fixed",
            left: tooltip.x,
            top: tooltip.y - 20,
            transform: "translate(-50%, -100%)",
          }}
          className="bg-black/75 text-white px-2.5 py-1.5 rounded-md text-xs pointer-events-none z-[9999] whitespace-nowrap">
          {tooltip.text}
        </div>
      )}
    </TooltipContext.Provider>
  );
}

export function useTooltip() {
  const ctx = useContext(TooltipContext);
  if (!ctx) throw new Error("useTooltip must be used within TooltipProvider");
  return ctx;
}
