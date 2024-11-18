import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./private/PrivateRoute";
import Overview from "../pages/dashboard/Overview";
import Myproducts from "../pages/dashboard/seller/Myproducts";
import SellerRoutes from "./private/SellerRoutes";
import AddProduct from "../pages/dashboard/seller/AddProduct";
import Mywishlist from "../compoments/dashboard/buyer/Mywishlist";
import BuyerRoute from "./private/BuyerRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "/dashboard/overview",
        element: <Overview />,
      },
      {
        path: "/dashboard/wishlist",
        element: (
          <BuyerRoute>
            <Mywishlist />
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/my-products",
        element: (
          <SellerRoutes>
            <Myproducts />
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/add-products",
        element: (
          <SellerRoutes>
            <AddProduct />
          </SellerRoutes>
        ),
      },
    ],
  },
]);
