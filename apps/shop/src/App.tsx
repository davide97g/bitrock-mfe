import { RouterProvider, RouterProviderProps } from "react-router-dom";
import "./App.css";

function App({ router }: RouterProviderProps) {
  return <RouterProvider router={router} />;
}

export default App;
