import { RouteObject } from "react-router-dom";

import BMICalculator from "features/onboarding/bmi-calculator";
import BodyMeasurementsCollector from "features/onboarding/body-measurements-collector";
import BookReadTracking from "features/daily-tasks/book-read-tracking";
import DailyProgress from "features/daily-tasks";
import DailyTasks from "features/daily-tasks";
import DietTracking from "features/daily-tasks/diet-tracking";
import Notifications from "features/notifications";
import Onboarding from "features/onboarding";
import Register from "features/onboarding/register";
import WaterTracking from "features/daily-tasks/water-tracking";
import WorkoutTracking from "features/daily-tasks/workout-tracking";

import AppUI from "components/layout/AppUI";
import Dashboard from "features/dashboard";
import MyProgress from "features/my-progress";
import Gallery from "features/gallery";
import Community from "features/community";
import Goals from "features/goals";
import Account from "features/account";
import About from "features/about";

const routes: RouteObject[] = [
  {
    path: "/onboarding",
    element: <Onboarding />,
    children: [
      {
        path: "/onboarding/register",
        element: <Register />,
      },
      {
        path: "/onboarding/bmi-calculator",
        element: <BMICalculator />,
      },
      {
        path: "/onboarding/body-measurements",
        element: <BodyMeasurementsCollector />,
      },
    ],
  },
  {
    path: "/",
    element: <AppUI />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/daily-tasks",
        element: <DailyTasks />,
      },
      {
        path: "/my-progress",
        element: <MyProgress />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/goals",
        element: <Goals />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
];

export default routes;
