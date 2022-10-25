import { createBrowserRouter } from "react-router-dom";
import Courses from "../Courses/Courses";
import Main from "../Layout/Main";
import Blog from "../Shared/Header/Blog";
import FAQ from "../Shared/Header/FAQ";
import Login from "../Shared/Header/Login";
import Registratioin from "../Shared/Header/Registratioin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registratioin></Registratioin>,
      },
    ],
  },
]);