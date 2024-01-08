import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Tours from "./../RoutePages/Tours/Tours";
import Destination from "../RoutePages/Destination/Destination";
import Pages from "./../RoutePages/Pages/Pages";
import News from "./../RoutePages/News/News";
import SignIn from "../RoutePages/SignIn/SignIn";
import TourDetails from "../Components/TourDetails/TourDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/tours",
        element: <Tours />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
          path:"/tours/:id",
          element:<TourDetails />,
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      },
      {
        path: "/destinations",
        element: <Destination />,
      },
      {
        path: "/pages",
        element: <Pages />,
      },
      {
        path: "/news",
        element: <News />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

export default routes;
