import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import PublicLayout from "./layouts/PublicLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import CheckoutPage from "./pages/CheckOutPage.jsx";
import OrdersPage from "./pages/OrdersPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <PublicLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "/products", element: <ProductPage /> },
          { path: "details/:productId", element: <ProductDetails /> },
          { path: "/contact", element: <ContactPage /> },
          { path: "/aboutUs", element: <AboutUs /> },
          { path: "/login", element: <LoginPage /> },
          { path: "/register", element: <RegisterPage /> },
        ],
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          { path: "Checkout", element: <CheckoutPage /> },
          { path: "orders", element: <OrdersPage /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
