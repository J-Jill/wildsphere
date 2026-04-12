import { useState } from "react";
import type { InatObservation } from "@/features/observation-panel/types/inaturalist";

type Props = {
  observation: Pick<InatObservation, "photos">;
};

export function MediaTab({ observation }: Props) {
  const photos = observation.photos ?? [];
  const [activeIndex, setActiveIndex] = useState(0);

  if (!photos.length) return null;

  const activePhoto = photos[activeIndex];

  return (
    <div className="space-y-3">
      <div className="w-full h-[340px] overflow-hidden rounded-xl border border-white/10">
        <img
          key={activePhoto.url}
          src={activePhoto.url.replace("square", "large")}
          alt=""
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {photos.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {photos.map((photo, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={photo.url}
                onClick={() => setActiveIndex(index)}
                className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border transition
                ${
                  isActive
                    ? "border-white"
                    : "border-white/10 opacity-70 hover:opacity-100"
                }`}>
                <img
                  src={photo.url}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
