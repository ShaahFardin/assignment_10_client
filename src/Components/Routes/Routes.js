import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../Courses/CourseDetails";

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
        path: "/",
        loader: () => fetch(`http://localhost:5000/catagory/07`),
        element: <Courses></Courses>,
      },
      {
        path: "/courses",
        loader: () => fetch(`http://localhost:5000/catagory/07`),
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
          fetch(`http://localhost:5000/catagory/${params.id}`),
        element: <Courses></Courses>,
      },
      {
        path: "/courseDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
        element: <CourseDetails></CourseDetails>,
      },
    ],
  },
]);