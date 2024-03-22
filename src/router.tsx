import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Community from "./pages/Community";
import Auth from "./pages/Auth";

export enum Routes {
  AUTH = "/auth",
  HOME = "/",
  PROFILE = "/profile",
  SETTINGS = "/settings",
  COMMUNITY = "/community",
}

const router = createBrowserRouter([
  {
    path: Routes.AUTH,
    element: <Auth />,
  },
  {
    path: Routes.HOME,
    element: <Home />,
  },
  {
    path: Routes.PROFILE,
    element: <Profile />,
  },
  {
    path: Routes.SETTINGS,
    element: <Settings />,
  },
  {
    path: Routes.COMMUNITY,
    element: <Community />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

export default router;
