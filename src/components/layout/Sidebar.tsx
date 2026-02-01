import { useSelection } from "@/context/SelectionContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Sidebar() {
  const { selected } = useSelection();

  return (
  <ScrollArea className="h-full p-4">
  {!selected ? (
    <p className="text-sm text-zinc-400">
      Select an observation on the globe.
    </p>
  ) : (
    <Card className="bg-zinc-900 border-white/10">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">
          {selected.taxon?.preferred_common_name ??
            selected.species_guess}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3 text-sm">
        <p className="text-zinc-400">
          <span className="text-white">
            {selected.taxon?.name}
          </span>
        </p>

        {selected.photos[0] && (
          <img
            src={selected.photos[0].url.replace("square", "medium")}
            className="rounded-md"
          />
        )}
      </CardContent>
    </Card>
  )}
</ScrollArea>

  );
}
