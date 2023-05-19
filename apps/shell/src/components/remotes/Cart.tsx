import { useEffect, useRef } from "react";
import { mount } from "cart/App";

function CartApp() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  // ? only mount the remote cart app once
  useEffect(() => {
    if (!isFirstRunRef.current) return;

    unmountRef.current = mount({
      mountPoint: wrapperRef.current!,
      initialPathname: location.pathname,
    });
    isFirstRunRef.current = false;
  }, []);

  return <div style={{ height: "100%" }} ref={wrapperRef} id="cart-mfe" />;
}

export default CartApp;
