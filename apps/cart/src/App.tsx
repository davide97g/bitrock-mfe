import { ThemeProvider, theme } from "ui";
import Cart from "./components/Cart";
function App() {
  return (
    <div
      style={{
        border: "5px dashed green",
        padding: "1rem",
      }}
    >
      <ThemeProvider theme={theme}>
        <Cart />
      </ThemeProvider>
    </div>
  );
}

export default App;
