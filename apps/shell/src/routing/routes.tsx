import { Suspense, lazy } from "react";
import { RouteObject } from "react-router-dom";
import Home from "../components/Home";

const Profile = lazy(() => import("../components/remotes/Profile"));
const Shop = lazy(() => import("../components/remotes/Shop"));
const Cart = lazy(() => import("../components/remotes/Cart"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <>
        <Home />
        <Cart />
      </>
    ),
  },
  {
    path: "/shop",
    element: (
      <Suspense fallback="loading shop...">
        <Shop />
        <Cart />
      </Suspense>
    ),
    errorElement: <h1>"Error loading Component"</h1>,
  },
  {
    path: "/profile",
    element: (
      <Suspense fallback="loading profile...">
        <Profile />
        <Cart />
      </Suspense>
    ),
  },
];
