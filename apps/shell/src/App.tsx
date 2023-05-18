import { ThemeProvider, theme } from "ui";
import { Router } from "./routing/router";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
