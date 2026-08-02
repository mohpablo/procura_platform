import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import LandingPage from "../pages/LandingPage";
import Adminlayout from "../layouts/Adminlayout";
import ProtectedRoute from "../components/ProtectedRoute";

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
  },
]);
