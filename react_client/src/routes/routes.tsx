import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage/loginPage";
import DashboardPage from "../pages/dashboardPage/dashboardPage";
import { StartingPage } from "../pages/startingPage/StartingPage";
import GoalDetails from "../pages/dashboardPage/goalDetails/GoalDetails";


export const router = createBrowserRouter([
  {
    element: <StartingPage />,
    errorElement: <div>wyjebało się</div>,
    path: "/",
  },
  {
    element: <DashboardPage />,
    errorElement: <div>wyjebało się</div>,
    path: "/dashboard",
  },
  {
    element: <GoalDetails />,
    errorElement: <div>wyjebało się</div>,
    path: "/goalDetails",
  },
]);

export default router;
