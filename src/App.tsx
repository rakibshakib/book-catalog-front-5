import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "*",
      element: <div>No Result Found</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}

// export default App;
