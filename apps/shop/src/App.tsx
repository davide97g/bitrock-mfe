import { RouterProvider, RouterProviderProps } from "react-router-dom";
import { ThemeProvider, theme } from "ui";

function App({ router }: RouterProviderProps) {
  return (
    <div
      style={{
        border: "5px dashed lightblue",
        padding: "1rem",
      }}
    >
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
