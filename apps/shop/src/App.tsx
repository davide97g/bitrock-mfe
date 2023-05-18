import { RouterProvider, RouterProviderProps } from "react-router-dom";
import { ThemeProvider, theme } from "ui";

function App({ router }: RouterProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
