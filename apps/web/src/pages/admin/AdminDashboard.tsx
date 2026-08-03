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
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import CustomTooltip from "../../components/ui/CustomTooltip";
import ChartCard from "../../components/ui/ChartCard";
import ActivityItem from "../../components/ui/ActivityItem";
import KpiCard from "../../components/ui/KpiCard";
import StatusChip from "../../components/ui/StatusChip";
import { useAdminDashboard } from "../../hooks/useAdmin";

export default function AdminDashboard() {
  const { data, error, isPending } = useAdminDashboard();

  if (isPending) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center p-4">
        <p className="text-body-lg text-on-surface-variant text-center">
          Loading dashboard data...
        </p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center p-4">
        <p className="text-body-lg text-error text-center">
          Failed to load admin dashboard data.
        </p>
      </div>
    );
  }

  const { kpiCards, orderStatus, charts, recentActivity } = data;

  // Format Category Data for PieChart
  const categoryData = charts.productsByCategory.map((item, index) => {
    const colors = [
      "var(--color-primary)",
      "var(--color-secondary)",
      "var(--color-chart-1)",
      "var(--color-outline)",
    ];
    return {
      name: item.category,
      value: item.count,
      color: colors[index % colors.length],
    };
  });

  // Format Status Distribution for Donut Chart
  const statusData = [
    {
      name: "Pending",
      value: orderStatus.pending,
      color: "var(--color-chart-1)",
    },
    {
      name: "Accepted",
      value: orderStatus.accepted,
      color: "var(--color-secondary)",
    },
    {
      name: "In Transit",
      value: orderStatus.inTransit,
      color: "var(--color-primary)",
    },
    {
      name: "Delivered",
      value: orderStatus.delivered,
      color: "var(--color-success, #10b981)",
    },
    {
      name: "Cancelled",
      value: orderStatus.cancelled,
      color: "var(--color-error, #ef4444)",
    },
  ];

  return (
    <div className="min-h-screen bg-surface p-3 sm:p-4 md:p-8 space-y-6 md:space-y-8 animate-rise">
      {/* Header & Quick Actions */}
      <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-headline-md md:text-headline-lg text-on-surface">
            Procura Dashboard
          </h1>
          <p className="text-body-md md:text-body-lg text-on-surface-variant">
            Overview of your marketplace activity.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3">
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-surface-container-high border border-outline-variant px-4 py-2.5 text-label-sm text-on-surface hover:bg-surface-container-highest transition-colors">
            <ShieldCheck className="size-4 shrink-0" />
            Verify Supplier
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-surface-container-high border border-outline-variant px-4 py-2.5 text-label-sm text-on-surface hover:bg-surface-container-highest transition-colors">
            <CheckCircle2 className="size-4 shrink-0" />
            Approve Product
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-label-sm text-on-primary hover:opacity-90 transition-opacity">
            <Plus className="size-4 shrink-0" />
            Add Category
          </button>
        </div>
      </header>

      {/* KPI Cards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <KpiCard
          title="Total Users"
          value={kpiCards.totalUsers.toLocaleString()}
          icon={<Users />}
        />
        <KpiCard
          title="Total Buyers"
          value={kpiCards.totalBuyers.toLocaleString()}
          icon={<ShoppingBag />}
        />
        <KpiCard
          title="Total Suppliers"
          value={kpiCards.totalSuppliers.toLocaleString()}
          icon={<Store />}
        />
        <KpiCard
          title="Verified Suppliers"
          value={kpiCards.verifiedSuppliers.toLocaleString()}
          icon={<ShieldCheck />}
          color="text-secondary"
        />
        <KpiCard
          title="Pending Suppliers"
          value={kpiCards.pendingSupplierVerifications.toLocaleString()}
          icon={<Clock />}
          color="text-chart-1"
        />

        <KpiCard
          title="Total Products"
          value={kpiCards.totalProducts.toLocaleString()}
          icon={<Package />}
        />
        <KpiCard
          title="Pending Products"
          value={kpiCards.pendingProductApprovals.toLocaleString()}
          icon={<AlertCircle />}
          color="text-chart-1"
        />
        <KpiCard
          title="Total Categories"
          value={kpiCards.totalCategories.toLocaleString()}
          icon={<Tags />}
        />
        <KpiCard
          title="Total Orders"
          value={kpiCards.totalOrders.toLocaleString()}
          icon={<TrendingUp />}
        />
        <KpiCard
          title="Total Revenue"
          value={`EGP ${Number(kpiCards.totalRevenue).toLocaleString()}`}
          icon={<CreditCard />}
          color="text-primary"
        />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Order Status & Category Chart */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Status Breakdown */}
          <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-4 sm:p-6 shadow-sm">
            <h2 className="text-title-md text-on-surface mb-4 sm:mb-6">
              Order Status
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
              <StatusChip
                label="Pending"
                value={orderStatus.pending.toLocaleString()}
                icon={<Clock />}
              />
              <StatusChip
                label="Accepted"
                value={orderStatus.accepted.toLocaleString()}
                icon={<CheckCircle2 />}
              />
              <StatusChip
                label="In Transit"
                value={orderStatus.inTransit.toLocaleString()}
                icon={<Truck />}
              />
              <StatusChip
                label="Delivered"
                value={orderStatus.delivered.toLocaleString()}
                icon={<Package />}
              />
              <StatusChip
                label="Cancelled"
                value={orderStatus.cancelled.toLocaleString()}
                icon={<XCircle />}
              />
            </div>
          </section>

          {/* Categories Pie Chart */}
          <ChartCard title="Products by Category" className="h-80 sm:h-87.5">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={75}
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
        </div>

        {/* Right Column: Recent Activity & Status Distribution */}
        <div className="space-y-6">
          {/* Recent Activity Feed */}
          <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-4 sm:p-6 shadow-sm flex flex-col h-95 sm:max-h-105">
            <div className="flex items-center justify-between mb-4 sm:mb-6 shrink-0">
              <h2 className="text-title-md text-on-surface">Recent Activity</h2>
              <Activity className="size-5 text-on-surface-variant" />
            </div>

            <div className="flex-1 overflow-y-auto pr-2">
              <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-3 before:w-0.5 before:bg-outline-variant">
                {recentActivity.recentOrders.map((order, i) => (
                  <ActivityItem
                    key={`order-${i}`}
                    title="New order placed"
                    desc={`Order ID: ${order.id.slice(0, 8)}...`}
                    time={new Date(order.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                    icon={<ShoppingBag className="size-4" />}
                  />
                ))}
                {recentActivity.recentBusinesses.map((biz, i) => (
                  <ActivityItem
                    key={`biz-${i}`}
                    title={
                      biz.isVerified
                        ? "Supplier verified"
                        : "New supplier registered"
                    }
                    desc={biz.companyName}
                    time={new Date(biz.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                    icon={<ShieldCheck className="size-4" />}
                    color={biz.isVerified ? "text-primary" : "text-chart-1"}
                  />
                ))}
                {recentActivity.recentProducts.map((prod, i) => (
                  <ActivityItem
                    key={`prod-${i}`}
                    title={
                      prod.isApproved ? "Product approved" : "Product submitted"
                    }
                    desc={prod.name}
                    time={new Date(prod.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                    icon={<Package className="size-4" />}
                    color={prod.isApproved ? "text-secondary" : undefined}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Order Status Distribution Donut Chart */}
          <ChartCard
            title="Order Status Distribution"
            className="h-80 sm:min-h-85"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="42%" // Shifted slightly upward to create breathing room
                  innerRadius={50}
                  outerRadius={75}
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
                  height={60}
                  iconType="circle"
                  wrapperStyle={{
                    fontSize: "12px",
                    color: "var(--color-on-surface-variant)",
                    paddingTop: "24px", // Forces a large clean gap between chart and legend
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
