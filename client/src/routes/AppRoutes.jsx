import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PublicProtected from "./protected/PublicProtected";
import MainProtected from "./protected/MainProtected";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import AddProduct from "../pages/AddProduct";
import SingleProductPage from "../pages/SingleProductPage";
import EditProduct from "../pages/EditProduct";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      element: <PublicProtected />,
      children: [
        {
          path: "/",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      element: <MainProtected />,
      children: [
        {
          path: "/main",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "about",
              element: <About />,
            },
            {
              path: "add-product",
              element: <AddProduct />,
            },
            {
              path: "product/:id",
              element: <SingleProductPage />
            },
            {
              path: "edit-product/:id",
              element: <EditProduct />
            }
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
