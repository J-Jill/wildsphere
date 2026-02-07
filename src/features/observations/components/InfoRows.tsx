import type { ReactNode } from "react";

type InfoRowProps = {
  icon: ReactNode;
  label: string;
  value: ReactNode;
};

export function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-start gap-3 text-sm">
      <div className="mt-0.5 text-zinc-400">{icon}</div>
      <div>
        <p className="text-zinc-500">{label}</p>
        <p className="text-zinc-200">{value}</p>
      </div>
    </div>
  );
}
