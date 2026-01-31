import { useSelection } from "@/context/SelectionContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Sidebar() {
  const { selected } = useSelection();

  return (
    <ScrollArea className="h-full p-4">
      {!selected ? (
        <p className="text-sm text-muted-foreground">
          Select an observation on the globe to see details.
        </p>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>
              {selected.taxon?.preferred_common_name ?? selected.species_guess}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm">
              Scientific name: <strong>{selected.taxon?.name}</strong>
            </p>

            {selected.photos[0] && (
              <img
                src={selected.photos[0].url.replace("square", "medium")}
                alt={selected.species_guess}
                className="rounded-md"
              />
            )}
          </CardContent>
        </Card>
      )}
    </ScrollArea>
  );
}
