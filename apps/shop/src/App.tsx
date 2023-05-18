import { RouterProvider, RouterProviderProps } from "react-router-dom";

function App({ router }: RouterProviderProps) {
  return <RouterProvider router={router} />;
}

export default App;
