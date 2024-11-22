import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routerConfig } from "./routes/routerConfig.jsx";

const router = createBrowserRouter(routerConfig);
console.log("Router Configuration", routerConfig);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
