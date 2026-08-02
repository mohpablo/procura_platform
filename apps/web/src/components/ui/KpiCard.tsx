 export default function KpiCard({
  title,
  value,
  icon,
  color = "text-on-surface-variant",
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  color?: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-outline-variant bg-surface-container-lowest p-5 shadow-sm transition-all hover:bg-surface-container-low">
      <div className="flex items-center justify-between">
        <span className="text-label-sm text-on-surface-variant uppercase tracking-wider">
          {title}
        </span>
        <div className={`[&>svg]:size-5 ${color}`}>{icon}</div>
      </div>
      <span className="text-headline-lg text-on-surface">{value}</span>
    </div>
  );
}