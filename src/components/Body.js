import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage from "./AuthPage";
import Dashboard from "./Dashboard";
import Header from "./Header";

const Body = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <AuthPage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRoutes} />
    </div>
  );
};

export default Body;
