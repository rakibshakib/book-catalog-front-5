import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Register from "../components/Register";
import Login from "../components/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/all-books",
    element: <Home />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "*",
    element: <div>No Result Found</div>,
  },
]);
