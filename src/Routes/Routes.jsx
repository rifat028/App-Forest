import React from "react";

import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import TrendingApp from "../Components/TrendingApp";
import AllApps from "../Pages/AllApps";
import AppInfo from "../Pages/AppInfo";
import Installation from "../Pages/Installation";
import AppNotFound from "../Pages/AppNotFound";
import PathError from "../Pages/PathError";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/Appdata.json"),
        Component: AllApps,
      },
      {
        path: "/aboutApp/:id",
        loader: () => fetch("/Appdata.json"),
        Component: AppInfo,
        errorElement: <AppNotFound></AppNotFound>,
      },
      {
        path: "/installation",
        loader: () => fetch("/Appdata.json"),
        Component: Installation,
      },
      {
        path: "*",
        Component: PathError,
      },
    ],
  },
]);
