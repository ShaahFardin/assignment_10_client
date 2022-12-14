import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../Courses/CourseDetails";

import Courses from "../Courses/Courses";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Checkout from "../Shared/Checkout";

import Blog from "../Shared/Header/Blog";
import FAQ from "../Shared/Header/FAQ";
import Login from "../Shared/Header/Login";
import Registratioin from "../Shared/Header/Registratioin";
import UserDetails from "../UserDetails/UserDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch(`https://teach-me-servers.vercel.app/catagory/07`),
        element: <Courses></Courses>,
      },
      {
        path: "/courses",
        loader: () => fetch(`https://teach-me-servers.vercel.app/catagory/07`),
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
      {
        path: "/catagory/:id",
        loader: ({ params }) =>
          fetch(`https://teach-me-servers.vercel.app/catagory/${params.id}`),
        element: <Courses></Courses>,
      },
      {
        path: "/courseDetails/:id",
        loader: ({ params }) =>
          fetch(`https://teach-me-servers.vercel.app/course/${params.id}`),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(`https://teach-me-servers.vercel.app/course/${params.id}`),
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
      {
        path: "/userDetails",
        element: <UserDetails></UserDetails>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
