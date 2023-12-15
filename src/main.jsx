import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App.jsx";
import "./index.css";
import ErrorPage from "./ErrorPage.jsx";
import CategoryPage from "./routes/CategoryPage.jsx";
import SinglePage from "./routes/SinglePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:category",
    element: <CategoryPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:category/:itemName",
    element: <SinglePage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
