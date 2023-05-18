import { Suspense, lazy } from "react";
import { RouteObject } from "react-router-dom";
import Home from "../components/Home";
import Header from "../components/Header";

const Shop = lazy(() => import("../components/remotes/Shop"));
const Cart = lazy(() => import("../components/remotes/Cart"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Cart />
      </>
    ),
  },
  {
    path: "/shop",
    element: (
      <>
        <Header />
        <Suspense fallback="loading shop...">
          <Shop />
          <Cart />
        </Suspense>
      </>
    ),
    errorElement: <h1>"Error loading Shop Remote"</h1>,
  },
];
