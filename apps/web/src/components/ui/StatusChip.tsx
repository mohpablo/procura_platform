 export default function StatusChip({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-surface-container-low p-4 text-center">
      <div className="text-on-surface-variant [&>svg]:size-6">{icon}</div>
      <span className="text-title-md text-on-surface">{value}</span>
      <span className="text-label-sm text-on-surface-variant">{label}</span>
    </div>
  );
}
