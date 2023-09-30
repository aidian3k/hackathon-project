import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage/loginPage";

export const router = createBrowserRouter([
  {
    element: <LoginPage />,
    errorElement: <div>wyjebało się</div>,
    path: "/",
  },
]);

export default router;
