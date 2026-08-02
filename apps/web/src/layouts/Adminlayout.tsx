import { Outlet, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Building2,
  BadgeCheck,
  Package,
  ClipboardCheck,
  Folder,
  ShoppingCart,
  Truck,
  LineChart,
  Trash2,
  Settings,
} from "lucide-react";

export default function AdminLayout() {
  const navItems = [
    { to: "dashboard", label: "Dashboard", Icon: LayoutDashboard },
    { to: "users", label: "Users", Icon: Users },
    { to: "businesses", label: "Businesses", Icon: Building2 },
    {
      to: "supplier-verification",
      label: "Supplier Verification",
      Icon: BadgeCheck,
    },
    { to: "products", label: "Products", Icon: Package },
    {
      to: "product-approvals",
      label: "Product Approvals",
      Icon: ClipboardCheck,
    },
    { to: "categories", label: "Categories", Icon: Folder },
    { to: "orders", label: "Orders", Icon: ShoppingCart },
    { to: "shipments", label: "Shipments", Icon: Truck },
    { to: "analytics", label: "Analytics", Icon: LineChart },
    { to: "trash", label: "Trash", Icon: Trash2 },
    { to: "settings", label: "Settings", Icon: Settings },
  ];

  return (
    <div className="bg-background text-on-surface min-h-screen flex">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-primary-container text-primary-fixed dark:bg-primary-container flex flex-col py-6 px-4 z-50 shadow-lg overflow-y-auto">
        <div className="mb-8 px-2">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-on-primary">
                Procura
              </span>
              <span className="text-sm font-medium opacity-60">
                Enterprise Procurement
              </span>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "text-secondary-fixed font-bold border-l-4 border-secondary-fixed bg-on-primary-fixed-variant/10"
                    : "text-primary-fixed-dim font-medium opacity-80 hover:bg-on-primary-fixed-variant/20 hover:text-white"
                }`
              }
            >
              <item.Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="ml-64 flex-1 min-h-screen flex flex-col bg-background">
        <main className="flex-1 p-8 space-y-8 max-w-7xl mx-auto w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
