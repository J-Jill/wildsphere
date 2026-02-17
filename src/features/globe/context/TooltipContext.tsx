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

      {/* Tooltip DOM fuera del Canvas */}
      {tooltip && (
        <div
          style={{
            position: "fixed",
            left: tooltip.x,
            top: tooltip.y - 20,
            transform: "translate(-50%, -100%)",
            background: "rgba(0,0,0,0.75)",
            color: "white",
            padding: "6px 10px",
            borderRadius: "6px",
            fontSize: "12px",
            pointerEvents: "none",
            zIndex: 9999,
            whiteSpace: "nowrap",
          }}>
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
