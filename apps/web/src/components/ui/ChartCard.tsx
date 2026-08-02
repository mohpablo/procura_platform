export default function ChartCard({
  title,
  className = "",
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm ${className}`}
    >
      <h3 className="text-title-md text-on-surface mb-4">{title}</h3>
      <div className="w-full h-65">{children}</div>
    </div>
  );
}
