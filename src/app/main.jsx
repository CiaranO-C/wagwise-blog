import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routesConfig from "./router/routes.jsx";
import { AuthProvider } from "./providers/AuthProvider.jsx";

const routes = createBrowserRouter(routesConfig);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </StrictMode>,
);
