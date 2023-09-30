import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { createTheme, ThemeProvider } from "@mui/material";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme()}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
