import { ThemeProvider, theme } from "ui";
import { Router } from "./routing/router";

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
      </ThemeProvider>
    </div>
  );
}

export default App;
