import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useObservations } from "@/hooks/useObservations";
import { useSelection } from "@/context/SelectionContext";

export function SearchCommand() {
  const { data } = useObservations();
  const { selectObservation } = useSelection();

  return (
    <Command>
      <CommandInput placeholder="Search species..." />
      <CommandList>
        {data?.results.map((obs) => (
          <CommandItem key={obs.id} onSelect={() => selectObservation(obs)}>
            {obs.taxon?.preferred_common_name ?? obs.species_guess}
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  );
}
