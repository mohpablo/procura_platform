export default function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-outline-variant bg-surface-container-high p-3 shadow-md z-50 relative">
        {label && (
          <p className="text-label-sm text-on-surface mb-1 font-semibold">
            {label}
          </p>
        )}
        {payload.map((entry: any, index: number) => (
          <p
            key={index}
            className="text-body-md text-on-surface flex items-center justify-between gap-4"
          >
            <span className="font-semibold capitalize">
              {entry.name || entry.dataKey}:
            </span>
            <span className="font-bold text-on-surface">
              {typeof entry.value === "number"
                ? entry.value.toLocaleString()
                : entry.value}
            </span>
          </p>
        ))}
      </div>
    );
  }
  return null;
}
