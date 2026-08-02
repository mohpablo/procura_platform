import React from "react";
import {
  Users,
  ShoppingBag,
  Store,
  ShieldCheck,
  Clock,
  Package,
  Tags,
  CreditCard,
  TrendingUp,
  Plus,
  CheckCircle2,
  AlertCircle,
  Truck,
  XCircle,
  Activity,
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// --- Mock Data ---
const ordersData = [
  { month: "Jan", orders: 400 },
  { month: "Feb", orders: 600 },
  { month: "Mar", orders: 550 },
  { month: "Apr", orders: 850 },
  { month: "May", orders: 1200 },
  { month: "Jun", orders: 1050 },
];

const revenueData = [
  { month: "Jan", revenue: 45000 },
  { month: "Feb", revenue: 52000 },
  { month: "Mar", revenue: 48000 },
  { month: "Apr", revenue: 70000 },
  { month: "May", revenue: 95000 },
  { month: "Jun", revenue: 88000 },
];

const usersData = [
  { month: "Jan", users: 100 },
  { month: "Feb", users: 150 },
  { month: "Mar", users: 220 },
  { month: "Apr", users: 380 },
  { month: "May", users: 500 },
  { month: "Jun", users: 650 },
];

const categoryData = [
  { name: "Produce", value: 400, color: "var(--color-chart-1)" },
  { name: "Dairy", value: 300, color: "var(--color-chart-2)" },
  { name: "Meat", value: 300, color: "var(--color-chart-3)" },
  { name: "Bakery", value: 200, color: "var(--color-chart-4)" },
  { name: "Pantry", value: 150, color: "var(--color-chart-5)" },
];

const statusData = [
  { name: "Pending", value: 45, color: "var(--color-chart-1)" },
  { name: "Accepted", value: 12, color: "var(--color-secondary)" },
  { name: "In Transit", value: 28, color: "var(--color-chart-2)" },
  { name: "Delivered", value: 12504, color: "var(--color-primary)" },
  { name: "Cancelled", value: 251, color: "var(--color-destructive)" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-surface p-4 md:p-8 space-y-8 animate-rise">
      {/* Header & Quick Actions */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-headline-lg text-on-surface">
            Procura Dashboard
          </h1>
          <p className="text-body-lg text-on-surface-variant">
            Overview of your marketplace activity.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg bg-surface-container-high border border-outline-variant px-4 py-2.5 text-label-sm text-on-surface hover:bg-surface-container-highest transition-colors">
            <ShieldCheck className="size-4" />
            Verify Supplier
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-surface-container-high border border-outline-variant px-4 py-2.5 text-label-sm text-on-surface hover:bg-surface-container-highest transition-colors">
            <CheckCircle2 className="size-4" />
            Approve Product
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-label-sm text-on-primary hover:opacity-90 transition-opacity">
            <Plus className="size-4" />
            Add Category
          </button>
        </div>
      </header>

      {/* KPI Cards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <KpiCard title="Total Users" value="1,248" icon={<Users />} />
        <KpiCard title="Total Buyers" value="892" icon={<ShoppingBag />} />
        <KpiCard title="Total Suppliers" value="356" icon={<Store />} />
        <KpiCard
          title="Verified Suppliers"
          value="342"
          icon={<ShieldCheck />}
          color="text-secondary"
        />
        <KpiCard
          title="Pending Suppliers"
          value="14"
          icon={<Clock />}
          color="text-chart-1"
        />

        <KpiCard title="Total Products" value="8,405" icon={<Package />} />
        <KpiCard
          title="Pending Products"
          value="23"
          icon={<AlertCircle />}
          color="text-chart-1"
        />
        <KpiCard title="Total Categories" value="48" icon={<Tags />} />
        <KpiCard title="Total Orders" value="12,840" icon={<TrendingUp />} />
        <KpiCard
          title="Total Revenue"
          value="EGP 1.2M"
          icon={<CreditCard />}
          color="text-primary"
        />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Charts Area & Order Status */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Status Breakdown */}
          <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
            <h2 className="text-title-md text-on-surface mb-6">Order Status</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <StatusChip label="Pending" value="45" icon={<Clock />} />
              <StatusChip label="Accepted" value="12" icon={<CheckCircle2 />} />
              <StatusChip label="In Transit" value="28" icon={<Truck />} />
              <StatusChip label="Delivered" value="12,504" icon={<Package />} />
              <StatusChip label="Cancelled" value="251" icon={<XCircle />} />
            </div>
          </section>

          {/* Charts Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Orders Area Chart */}
            <ChartCard title="Orders Per Month">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={ordersData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="colorOrders"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="var(--color-chart-1)"
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="95%"
                        stopColor="var(--color-chart-1)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="var(--color-border)"
                  />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: "var(--color-on-surface-variant)",
                      fontSize: 12,
                    }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: "var(--color-on-surface-variant)",
                      fontSize: 12,
                    }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="orders"
                    stroke="var(--color-chart-1)"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorOrders)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* Revenue Bar Chart */}
            <ChartCard title="Revenue Per Month">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={revenueData}
                  margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="var(--color-border)"
                  />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: "var(--color-on-surface-variant)",
                      fontSize: 12,
                    }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: "var(--color-on-surface-variant)",
                      fontSize: 12,
                    }}
                    tickFormatter={(val) => `${val / 1000}k`}
                  />
                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{ fill: "var(--color-secondary)" }}
                  />
                  <Bar
                    dataKey="revenue"
                    fill="var(--color-secondary)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* New Users Line Chart */}
            <ChartCard title="New Users Growth">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={usersData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="var(--color-border)"
                  />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: "var(--color-on-surface-variant)",
                      fontSize: 12,
                    }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: "var(--color-on-surface-variant)",
                      fontSize: 12,
                    }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="var(--color-secondary)"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "var(--color-surface)", strokeWidth: 2 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* Categories Pie Chart */}
            <ChartCard title="Products by Category">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    nameKey="name"
                    stroke="none"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    iconType="circle"
                    wrapperStyle={{
                      fontSize: "12px",
                      color: "var(--color-on-surface-variant)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>
          </section>
        </div>

        {/* Right Column: Recent Activity & Status Distribution */}
        <div className="space-y-6">
          {/* Recent Activity Feed */}
          <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm flex flex-col max-h-[420px]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-title-md text-on-surface">Recent Activity</h2>
              <Activity className="size-5 text-on-surface-variant" />
            </div>

            <div className="flex-1 overflow-y-auto pr-2">
              <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-3 before:w-[2px] before:bg-outline-variant">
                <ActivityItem
                  title="New order placed"
                  desc="Order #ORD-089 by The Daily Roast"
                  time="2 mins ago"
                  icon={<ShoppingBag className="size-4" />}
                />
                <ActivityItem
                  title="Product approved"
                  desc="Organic Avocado 1kg approved for catalog"
                  time="1 hour ago"
                  icon={<CheckCircle2 className="size-4" />}
                  color="text-secondary"
                />
                <ActivityItem
                  title="Product submitted"
                  desc="Fresh Farms submitted 5 new items"
                  time="3 hours ago"
                  icon={<Package className="size-4" />}
                />
                <ActivityItem
                  title="Supplier verified"
                  desc="Green Valley Produce is now verified"
                  time="5 hours ago"
                  icon={<ShieldCheck className="size-4" />}
                  color="text-primary"
                />
                <ActivityItem
                  title="New supplier registered"
                  desc="Cairo Wholesale Co. pending review"
                  time="1 day ago"
                  icon={<Store className="size-4" />}
                  color="text-chart-1"
                />
              </div>
            </div>
          </section>

          {/* Order Status Distribution Donut Chart */}
          <ChartCard title="Order Status Distribution" className="min-h-75">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  nameKey="name"
                  stroke="none"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  verticalAlign="bottom"
                  height={48}
                  iconType="circle"
                  wrapperStyle={{
                    fontSize: "12px",
                    color: "var(--color-on-surface-variant)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </div>
    </div>
  );
}

// --- Subcomponents ---

function KpiCard({
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

function StatusChip({
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

function ActivityItem({
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

function ChartCard({
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

function CustomTooltip({ active, payload, label }: any) {
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
