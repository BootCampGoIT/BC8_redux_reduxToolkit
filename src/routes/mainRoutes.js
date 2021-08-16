import { lazy } from "react";

export const mainRoutes = [
  //public
  {
    name: "home",
    path: "/",
    component: lazy(
      () => import("../pages/HomePage") /* webpackChunkName: "HomePage" */
    ),
    exact: true,
    isPrivate: false,
    restricted: false,
  },
  {
    name: "about",
    path: "/about",
    component: () => <h2>AboutPage</h2>,
    exact: true,
    isPrivate: false,
    restricted: false,
  },
  //private
  {
    name: "projects",
    path: "/tasks",
    component: lazy(
      () => import("../pages/TaskPage") /* webpackChunkName: "TaskPage" */
    ),
    exact: true,
    isPrivate: true,
    restricted: false,
  },
  {
    name: "registration",
    path: "/signup",
    component: lazy(
      () => import("../pages/AuthPage") /* webpackChunkName: "AuthPage" */
    ),
    exact: true,
    isPrivate: false,
    restricted: true,
  },
  {
    name: "login",
    path: "/signin",
    component: lazy(
      () => import("../pages/AuthPage") /* webpackChunkName: "AuthPage" */
    ),
    exact: true,
    isPrivate: false,
    restricted: true,
  },
];
