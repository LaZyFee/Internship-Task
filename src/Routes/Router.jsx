import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import HomePage from "../Pages/Static/HomePage";
import About from "../Pages/Outlet/About";
import Portfolio from "../Pages/Outlet/Portfolio";
import Clients from "../Pages/Outlet/Clients";
import Blog from "../Pages/Outlet/Blog";
import Contact from "../Pages/Outlet/Contact";

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
            path: "/",
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/clients",
        element: <Clients />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
