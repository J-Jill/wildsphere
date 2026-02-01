import { useSelection } from "@/context/SelectionContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function OverlayPanel() {
  const { selected } = useSelection();

  if (!selected) {
    return (
      <div className="p-4 text-sm text-zinc-400">
        Select a hotspot to view details.
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <Card className="bg-zinc-900 border-white/10">
        <CardHeader>
          <CardTitle className="text-base">
            {selected.taxon?.preferred_common_name ?? selected.species_guess}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p className="text-zinc-400">{selected.taxon?.name}</p>
        </CardContent>
      </Card>
    </div>
  );
}
