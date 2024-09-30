import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { App } from "./Layout/App.jsx";
import { router } from "./routes/route.jsx";
import { productStore } from "./store/store.js";
import "./index.css";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={productStore}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
