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
    // ? listen for "NAVIGATE_APPSHELL_EVENT" event (shell event) : the shell requests a navigation
    window.addEventListener("NAVIGATE_APPSHELL_EVENT", handleEvent);

    // return a cleanup function
    return () =>
      window.removeEventListener("NAVIGATE_APPSHELL_EVENT", handleEvent);
  }, [location, navigate]);

  // *** EVENT SENDER ***
  useEffect(() => {
    // ? notify the shell about the current pathname (remote event)
    window.dispatchEvent(
      new CustomEvent("NAVIGATE_REMOTE_EVENT", {
        detail: location.pathname,
      })
    );
  }, [location]);

  return children;
}
