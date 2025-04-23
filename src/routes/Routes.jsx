import { createBrowserRouter } from "react-router";
import MainLayOut from "../MainLayOut/MainLayOut";
import Blogs from "../components/pages/Blogs";
import Booking from "../components/pages/Booking";
import Home from "../components/pages/Home";
import ErrorPage from "../components/pages/ErrorPage";
import DoctorDetails from "../components/doctors/DoctorDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    errorElement: <ErrorPage />,
    
    children: [
      {
        path: "/",
        hydrateFallbackElement: (
          <div className="text-center">
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ),
        loader: () => fetch("/doctors-data.json"),
        Component: Home,
      },
      {
        path: "/blogs",
        hydrateFallbackElement: (
          <div className="text-center">
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ),
        loader: () => fetch("/blogs.json"),
        Component: Blogs,
      },
      {
        path: "/booking",
        Component: Booking,
      },
      {
        path: "/doctor-details/:name",
        hydrateFallbackElement: (
          <div className="text-center">
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ),
        loader: () => fetch("/doctors-data.json"),
        Component: DoctorDetails,
      },
    ],
  },
]);
