import { Suspense, lazy } from "react";
import { RouteObject } from "react-router-dom";
import Home from "../components/Home";
import Header from "../components/Header";

const Shop = lazy(() => import("../components/remotes/Shop"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
    errorElement: <h1>Error loading Componet</h1>,
  },
  {
    path: "/shop",
    element: (
      <>
        <Header />
        <Suspense fallback="loading shop...">
          <Shop />
        </Suspense>
      </>
    ),
    errorElement: <h1>Error loading Shop Remote</h1>,
  },
];
