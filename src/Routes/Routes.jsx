import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import AllApps from '../pages/AllApps/AllApps';
import AppDetails from '../pages/AppDetails/AppDetails';

export const router = createBrowserRouter([
  {
    path: "/",
      Component: Root ,
      errorElement: <ErrorPage></ErrorPage>,

      children: [
        {
          index: true,
          path:"/",
          Component: Home,
          loader:()=>fetch("/trendingAppsData.json")
        },
        {
          path:"/apps",
          Component: AllApps,
          loader:()=>fetch("/allAppsData.json")
        },
        {
          path:"/apps/appDetails/:id",
          Component: AppDetails,
          loader:()=>fetch("/allAppsData.json")
        }
      ]
  },
]);