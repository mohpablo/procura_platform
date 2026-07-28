import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../pages/AuthPage";

export const router = createBrowserRouter([
  {
    index:true,
    element: <AuthPage />,
  },
]);
