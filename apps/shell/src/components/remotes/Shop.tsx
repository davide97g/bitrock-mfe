import { useEffect, useRef } from "react";
import { mount } from "shop/App";
import { useLocation, useNavigate } from "react-router-dom";

function ShopApp() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // *** EVENT LISTENER ***
  useEffect(() => {
    const handleEvent = (e: Event) => {
      const newPathname = (e as CustomEvent<string>).detail;
      if (newPathname === location.pathname) return;
      navigate(newPathname);
    };
    // ? listen for "NAVIGATE_REMOTE_EVENT" event (remote event) : the remote requests a navigation
    window.addEventListener("NAVIGATE_REMOTE_EVENT", handleEvent, {});

    // return a cleanup function
    return () =>
      window.removeEventListener("NAVIGATE_REMOTE_EVENT", handleEvent);
  }, [location.pathname, navigate]);

  // *** EVENT SENDER ***
  useEffect(() => {
    // ? notify the remotes that the shell has navigated (shell event)
    window.dispatchEvent(
      new CustomEvent<string>("NAVIGATE_APPSHELL_EVENT", {
        detail: location.pathname,
      })
    );
  }, [location.pathname]);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  // Mount remote
  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }
    unmountRef.current = mount({
      mountPoint: wrapperRef.current!,
      initialPathname: location.pathname,
    });
    isFirstRunRef.current = false;
  }, []);

  return <div style={{ height: "100%" }} ref={wrapperRef} id="shop-mfe" />;
}

export default ShopApp;
