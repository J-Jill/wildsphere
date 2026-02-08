export function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 items-start">
      <div className="mt-0.5 text-zinc-400">{icon}</div>
      <div className="flex flex-col">
        <span className="text-xs uppercase tracking-wide text-zinc-500">
          {label}
        </span>
        <span className="text-zinc-200">{value}</span>
      </div>
    </div>
  );
}
