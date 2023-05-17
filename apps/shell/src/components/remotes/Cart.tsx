import { useEffect, useRef } from "react";
import { mount } from "cart/App";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useEvent, events } from "bitrock-utils";

function CartApp() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  //   const navigate = useNavigate();
  //   const location = useLocation();
  //   const { subscribe, emit } = useEvent();

  //   useEffect(
  //     () =>
  //       subscribe<string>(events.NAVIGATE_REMOTE_EVENT, (pathname) => {
  //         if (pathname === location.pathname) return;
  //         navigate(pathname);
  //       }),
  //     [location.pathname, navigate, subscribe]
  //   );

  //   useEffect(
  //     () => emit<string>(events.NAVIGATE_APPSHELL_EVENT, location.pathname),
  //     [location.pathname, emit]
  //   );

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

  return <div style={{ height: "100%" }} ref={wrapperRef} id="cart-mfe" />;
}

export default CartApp;
