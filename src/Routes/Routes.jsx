import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Services/Service";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import PrivetRoutes from "./PrivetRoutes";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/Error/ErrorPage";

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
        path: "/about",
        element: <About></About>,
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
        path: "/contact",
        element: (
          <PrivetRoutes>
            <Contact></Contact>
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
