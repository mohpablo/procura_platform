import React from "react";
import { Outlet } from "react-router-dom"; // Or pass { children }: { children: React.ReactNode }

export default function AdminLayout() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-primary-container text-primary-fixed dark:bg-primary-container flex flex-col py-6 px-4 z-50 shadow-lg">
        <div className="mb-8 px-2">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-headline-lg font-headline-lg font-black text-on-primary">
                Procura
              </span>
              <span className="text-label-sm font-label-sm opacity-60">
                Enterprise Procurement
              </span>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-secondary-fixed font-bold border-l-4 border-secondary-fixed bg-on-primary-fixed-variant/10"
            href="#"
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="text-label-sm font-label-sm">Orders</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary-fixed-dim font-medium opacity-80 hover:bg-on-primary-fixed-variant/20 hover:text-white transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="text-label-sm font-label-sm">Suppliers</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary-fixed-dim font-medium opacity-80 hover:bg-on-primary-fixed-variant/20 hover:text-white transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="text-label-sm font-label-sm">Inventory</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary-fixed-dim font-medium opacity-80 hover:bg-on-primary-fixed-variant/20 hover:text-white transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">analytics</span>
            <span className="text-label-sm font-label-sm">Analytics</span>
          </a>
        </nav>

        <div className="mt-auto space-y-2 pt-6 border-t border-white/10">
          <button className="w-full mb-4 bg-secondary text-on-secondary font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 duration-150 shadow-md">
            <span className="material-symbols-outlined">add</span>
            <span>New Order</span>
          </button>
        </div>
      </aside>

      {/* Main Content Shell (Pushed right by w-64 to accommodate fixed sidebar) */}
      <div className="ml-64 flex-1 min-h-screen flex flex-col bg-background">
        {/* Dynamic Page Content Outlet */}
        <main className="flex-1 p-8 space-y-8 max-w-7xl mx-auto w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
