import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage/loginPage";
import { StartingPage } from "../pages/startingPage/StartingPage";

export const router = createBrowserRouter([
  {
    element: <StartingPage />,
    errorElement: <div>wyjebało się</div>,
    path: "/",
  },
  {
    element: <div>udało się zarejestrować</div>,
    errorElement: <div>wyjebało się</div>,
    path: "/dashboard",
  },
]);

export default router;
