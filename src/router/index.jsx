import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Blog } from "../pages/Blog";
//creo una constante, donde le paso createBrowserRouter, que es un array
//de objetos, donde le pasamos los parámetros
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);
