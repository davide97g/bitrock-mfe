import { createRoot } from "react-dom/client";
// import { createRouter } from "./routing/router-factory";
import App from "./App";

const mount = ({
  mountPoint,
}: //   initialPathname,
//   routingStrategy,
{
  mountPoint: HTMLElement;
  initialPathname?: string;
  routingStrategy?: "browser" | "memory";
}) => {
  //   const router = createRouter({ strategy: routingStrategy, initialPathname });
  const root = createRoot(mountPoint);
  root.render(<App />);

  return () => queueMicrotask(() => root.unmount());
};

export { mount };
