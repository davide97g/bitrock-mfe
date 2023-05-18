import { useEffect, useRef } from "react";
import { mount } from "profile/App";
import { useLocation, useNavigate } from "react-router-dom";

function ProfileApp() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleEvent = (e: Event) => {
      const newPathname = (e as CustomEvent<string>).detail;
      if (newPathname === location.pathname) return;
      navigate(newPathname);
    };
    window.addEventListener("NAVIGATE_REMOTE_EVENT", handleEvent, {});
    return () =>
      window.removeEventListener("NAVIGATE_REMOTE_EVENT", handleEvent);
  }, [location.pathname, navigate]);

  useEffect(() => {
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

  return <div style={{ height: "100%" }} ref={wrapperRef} id="profile-mfe" />;
}

export default ProfileApp;
