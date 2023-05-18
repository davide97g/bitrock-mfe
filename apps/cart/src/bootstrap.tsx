import { createRoot } from "react-dom/client";
import App from "./App";

const mount = ({ mountPoint }: { mountPoint: HTMLElement }) => {
  const root = createRoot(mountPoint);
  root.render(<App />);
  return () => queueMicrotask(() => root.unmount());
};

export { mount };
