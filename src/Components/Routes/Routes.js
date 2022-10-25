import { createBrowserRouter } from "react-router-dom";
import Courses from "../Courses/Courses";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/courses',
                element: <Courses></Courses>
            }
        ]
    }
])