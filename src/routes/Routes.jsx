import { createBrowserRouter } from "react-router";
import MainLayOut from "../MainLayOut/MainLayOut";

import Blogs from "../components/pages/Blogs";
import Booking from "../components/pages/Booking";
import Home from "../components/pages/Home";
import ErrorPage from "../components/pages/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        
        Component: Home,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
      {
        path: "/booking",
        Component: Booking,
      },
    ],
  },
]);
