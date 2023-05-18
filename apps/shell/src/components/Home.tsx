import { Suspense, lazy } from "react";

const Cart = lazy(() => import("../components/remotes/Cart"));

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Suspense fallback="loading cart...">
        <Cart />
      </Suspense>
    </>
  );
}
