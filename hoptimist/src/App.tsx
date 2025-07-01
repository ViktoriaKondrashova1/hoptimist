import { RouterProvider } from "react-router-dom";
import { router } from "@/kernel/router/router-config";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
