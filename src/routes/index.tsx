import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cancel from "../pages/Cancel";
import Cart from "../pages/Cart";
import CheckOutPage from "../pages/CheckOutPage";
import Failed from "../pages/Failed";
import Home from "../pages/Home";
import Success from "../pages/Success";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <CheckOutPage />,
      },
      {
        path: "/payment/confirmation/:tranId",
        element: <Success />,
      },
      {
        path: "/payment/failed",
        element: <Failed />,
      },
      {
        path: "/payment/cancel",
        element: <Cancel />,
      },
    ],
  },
]);
