import { Suspense, lazy } from "react";
import "./App.css";

function App() {
  const Cart = lazy(() => import("./components/remotes/Cart"));

  return (
    <>
      <h1>Shell</h1>
      <Suspense fallback="Loading Cart">
        <Cart />
      </Suspense>
    </>
  );
}

export default App;
