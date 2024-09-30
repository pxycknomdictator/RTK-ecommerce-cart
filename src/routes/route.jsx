import { createBrowserRouter } from "react-router-dom";
import { App } from "../Layout/App";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);
