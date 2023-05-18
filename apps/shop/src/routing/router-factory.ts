import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { routes } from "./routes";

interface CreateRouterProps {
  strategy?: "browser" | "memory";
  initialPathname?: string;
}

export function createRouter({ strategy, initialPathname }: CreateRouterProps) {
  if (strategy === "browser") {
    return createBrowserRouter(routes);
  }

  const initialEntries = [initialPathname || "/"];
  return createMemoryRouter(routes, { initialEntries: initialEntries });
}
