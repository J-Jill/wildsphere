import type { InatObservation } from "@/features/observations/types/inaturalist";
import { createContext, useContext, useState, type ReactNode } from "react";

type SelectionContextType = {
  selected: InatObservation | null;
  selectObservation: (obs: InatObservation | null) => void;
};

const SelectionContext = createContext<SelectionContextType | undefined>(
  undefined,
);

export function SelectionProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<InatObservation | null>(null);

  return (
    <SelectionContext.Provider
      value={{
        selected,
        selectObservation: setSelected,
      }}>
      {children}
    </SelectionContext.Provider>
  );
}

export function useSelection() {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error("useSelection must be used within SelectionProvider");
  }
  return context;
}
