import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "/login", Component: Home },
    ],
  },
]);
export default router;
