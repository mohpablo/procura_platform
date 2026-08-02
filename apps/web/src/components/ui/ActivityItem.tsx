export default function ActivityItem({
  title,
  desc,
  time,
  icon,
  color = "text-on-surface-variant",
}: {
  title: string;
  desc: string;
  time: string;
  icon: React.ReactNode;
  color?: string;
}) {
  return (
    <div className="relative pl-10">
      <div
        className={`absolute left-0 top-1 flex size-6 items-center justify-center rounded-full bg-surface-container border-2 border-surface-container-lowest ${color}`}
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-body-md font-medium text-on-surface">
          {title}
        </span>
        <span className="text-body-md text-on-surface-variant">{desc}</span>
        <span className="text-label-sm text-outline mt-1">{time}</span>
      </div>
    </div>
  );
}
