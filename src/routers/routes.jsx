import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Posts from "../pages/Posts";
import Post from "../pages/Post";
import Popup from "../components/Popup";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        element: <Post />,
      },
      {
        path: "/popup",
        element: <Popup />,
      },
    ],
  },
]);
