import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/onboarding",
    element: <h1>Onboarding</h1>,
    children: [
      {
        path: "/onboarding/register",
        element: <h1>Onboarding Register</h1>,
      },
      {
        path: "/onboarding/bmi",
        element: <h1>Onboarding BMI</h1>,
      },
      {
        path: "/onboarding/body-measurements",
        element: <h1>Onboarding Body Measurements</h1>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <h1>Dashboard</h1>,
  },
  {
    path: "/daily-tasks",
    element: <h1>Daily-tasks</h1>,
  },
  {
    path: "/my-progress",
    element: <h1>My-progress</h1>,
  },
  {
    path: "/gallery",
    element: <h1>Gallery</h1>,
  },
  {
    path: "/community",
    element: <h1>Community</h1>,
  },
  {
    path: "/goals",
    element: <h1>Goals</h1>,
  },
  {
    path: "/notifications",
    element: <h1>Notifications</h1>,
  },
  {
    path: "/account",
    element: <h1>Account</h1>,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
];

export default routes;
