import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "@/pages/home";
import ToalPage from '@/pages/taol'
import JoinPage from "@/pages/join";
import LoginPage from "@/pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: '/taol',
    element: <ToalPage />,
  },
  {
    path: '/join',
    element: <JoinPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
