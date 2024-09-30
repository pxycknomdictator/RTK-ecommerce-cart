import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { App } from "./Layout/App.jsx";
import { router } from "./routes/route.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
