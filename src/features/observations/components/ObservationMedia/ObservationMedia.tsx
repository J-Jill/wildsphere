import { useState, useEffect } from "react";
import type { InatObservation } from "@/features/observations/types/inaturalist";

type Props = {
  observation: InatObservation;
};

export function ObservationMedia({ observation }: Props) {
  const photos = observation.photos ?? [];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [observation.id]);

  if (!photos.length) return null;

  const activePhoto = photos[activeIndex];

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="w-full h-[340px] overflow-hidden rounded-xl border border-white/10">
        <img
          src={activePhoto.url.replace("square", "large")}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      {photos.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {photos.map((photo, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border transition
                ${
                  idx === activeIndex
                    ? "border-white"
                    : "border-white/10 opacity-70 hover:opacity-100"
                }`}>
              <img
                src={photo.url}
                alt=""
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
