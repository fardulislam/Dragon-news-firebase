import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import Priviteroute from "../Provaider/Priviteroute";
import Loadingpages from "../pages/Loadingpages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement:<Loadingpages></Loadingpages>
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path:'/auth/login',
        element:<Login></Login>,
      },
      {
        path:'/auth/register',
        element:<Register></Register>,
      },
    ]
  },
  {
    path: "/news-details/:id",
    element: <Priviteroute>
      <NewsDetails></NewsDetails>
    </Priviteroute>,
    loader:()=>fetch('/news.json'),
    hydrateFallbackElement:<Loadingpages></Loadingpages>
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
