export function InfoItem({
  label,
  value,
}: {
  icon?: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-0.5 py-3 border-b border-white/[0.06] last:border-0">
      <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
        {label}
      </span>
      <span className="text-sm text-white/85 leading-snug">{value}</span>
    </div>
  );
}
