import { Outlet } from "react-router-dom";
import { NavigationManager } from "../components/NavigationManager";
import Shop from "../components/Shop";

export const routes = [
  {
    path: "/",
    element: (
      <NavigationManager>
        <Outlet />
      </NavigationManager>
    ),
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
];
