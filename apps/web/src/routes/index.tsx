import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import LandingPage from "../pages/LandingPage";
import Adminlayout from "../layouts/Adminlayout";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminDashboard from "../pages/admin/AdminDashboard";

export const router = createBrowserRouter([
  {
    index: true,
    element: <LandingPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <Adminlayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "users",
        element: <div>Users</div>,
      },
      {
        path: "businesses",
        element: <div>Businesses</div>,
      },
      {
        path: "supplier-verification",
        element: <div>Supplier Verification</div>,
      },
      {
        path: "products",
        element: <div>Products</div>,
      },
      {
        path: "product-approvals",
        element: <div>Product Approvals</div>,
      },
      {
        path: "categories",
        element: <div>Categories</div>,
      },
      {
        path: "orders",
        element: <div>Orders</div>,
      },
      {
        path: "shipments",
        element: <div>Shipments</div>,
      },
      {
        path: "analytics",
        element: <div>Analytics</div>,
      },
      {
        path: "trash",
        element: <div>Trash</div>,
      },
      {
        path: "settings",
        element: <div>Settings</div>,
      },
    ],
  },
]);
