import { ThemeProvider, theme } from "ui";
import { Router } from "./routing/router";
import { Suspense, lazy } from "react";
const Cart = lazy(() => import("./components/remotes/Cart"));

function App() {
  return (
    <div
      style={{
        border: "5px dashed red",
        margin: "1rem",
        padding: "1rem",
      }}
    >
      <ThemeProvider theme={theme}>
        <Router />
        <Suspense fallback="loading cart...">
          <Cart />
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
