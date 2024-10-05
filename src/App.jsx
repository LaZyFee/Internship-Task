import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-black">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
