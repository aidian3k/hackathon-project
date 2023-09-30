import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage/loginPage";
import DashboardPage from "../pages/dashboardPage/dashboardPage";

export const router = createBrowserRouter([
  {
    element: <LoginPage />,
    errorElement: <div>wyjebało się</div>,
    path: "/",
  },
  {
    element: <DashboardPage />,
    errorElement: <div>wyjebało się</div>,
    path: "/dashboard",
  },
]);

export default router;
