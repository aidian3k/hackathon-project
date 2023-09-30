import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage/loginPage";
import { StartingPage } from "../pages/startingPage/StartingPage";

export const router = createBrowserRouter([
  {
    element: <StartingPage />,
    errorElement: <div>wyjebało się</div>,
    path: "/",
  },
]);

export default router;
