import { ReactElement, useEffect } from "react";
import { matchRoutes, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../routing/routes";

interface NavigationManagerProps {
  children: ReactElement;
}

export function NavigationManager({ children }: NavigationManagerProps) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleEvent = (e: Event) => {
      const pathname = (e as CustomEvent<string>).detail;
      if (location.pathname === pathname || !matchRoutes(routes, { pathname }))
        return;
      navigate(pathname);
    };
    window.addEventListener("NAVIGATE_APPSHELL_EVENT", handleEvent);

    const unsubscribe = () =>
      window.removeEventListener("NAVIGATE_APPSHELL_EVENT", handleEvent);

    return unsubscribe;
  }, [location, navigate]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("NAVIGATE_REMOTE_EVENT", {
        detail: location.pathname,
      })
    );
  }, [location]);

  return children;
}
