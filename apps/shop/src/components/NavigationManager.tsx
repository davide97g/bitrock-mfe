import { ReactElement, useEffect } from "react";
import { matchRoutes, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../routing/routes";

interface NavigationManagerProps {
  children: ReactElement;
}

export function NavigationManager({ children }: NavigationManagerProps) {
  const location = useLocation();
  const navigate = useNavigate();

  // *** EVENT LISTENER ***
  useEffect(() => {
    const handleEvent = (e: Event) => {
      const pathname = (e as CustomEvent<string>).detail;
      if (location.pathname === pathname || !matchRoutes(routes, { pathname }))
        return;
      navigate(pathname);
    };
    // ? listen for "navigate:shell" event (shell event) : the shell requests a navigation
    window.addEventListener("navigate:shell", handleEvent);

    // return a cleanup function
    return () => window.removeEventListener("navigate:shell", handleEvent);
  }, [location, navigate]);

  // *** EVENT SENDER ***
  useEffect(() => {
    // ? notify the shell about the current pathname (remote event)
    window.dispatchEvent(
      new CustomEvent("navigate:remote", {
        detail: location.pathname,
      })
    );
  }, [location]);

  return children;
}
