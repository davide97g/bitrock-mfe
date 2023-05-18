import { Suspense, lazy } from "react";
import { RouteObject } from "react-router-dom";
import Home from "../components/Home";

const Profile = lazy(() => import("../components/remotes/Profile"));
const Shop = lazy(() => import("../components/remotes/Shop"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: (
      <Suspense fallback="loading shop...">
        <Shop />
      </Suspense>
    ),
    errorElement: <h1>"Error loading Component"</h1>,
  },
  {
    path: "/profile",
    element: (
      <Suspense fallback="loading profile...">
        <Profile />
      </Suspense>
    ),
  },
];
