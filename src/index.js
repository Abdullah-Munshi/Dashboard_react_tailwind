import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Auth from "./pages/Auth";
import Dashboard from "./layout/Dashboard";
import Create from "./pages/Create";
import Manage from "./pages/Manage";
import Transactions from "./pages/Transactions";
import Pay from "./pages/Pay";
const router = createBrowserRouter([
  { path: "/auth", element: <Auth /> },
  { path: "/pay", element: <Pay /> },
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Create />,
      },
      {
        path: "/manage",
        element: <Manage />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
