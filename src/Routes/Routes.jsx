import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Services/Service";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import PrivetRoutes from "./PrivetRoutes";

import ErrorPage from "../Pages/Error/ErrorPage";
import Contents from "../Pages/Content/Contents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/services",
        element: (
          <PrivetRoutes>
            <Service></Service>
          </PrivetRoutes>
        ),
      },
      {
        path: "/blog",
        element: (
          <PrivetRoutes>
            <Blog></Blog>
          </PrivetRoutes>
        ),
      },
      {
        path: "/contents",
        element: (
          <PrivetRoutes>
            <Contents></Contents>
          </PrivetRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
