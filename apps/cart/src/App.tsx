import { ThemeProvider, theme } from "ui";
import Cart from "./components/Cart";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Cart />
    </ThemeProvider>
  );
}

export default App;
