// router.js
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import HomePage from "../Pages/Static/HomePage";
import About from "../Pages/Static/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          {
            path: "about",
            element: <About />,
          },
        ],
      },
    ],
  },
]);
