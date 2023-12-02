import { RouteObject } from "react-router-dom";

import Onboarding from "./pages/Onboarding";
import TrackerUI from "./pages/TrackerUI";

// Challenge Trackers
import About from "components/challenge-tracker/About";
import Account from "components/challenge-tracker/Account";
import Community from "components/challenge-tracker/Community";
import DailyTasks from "components/challenge-tracker/DailyTasks";
import Dashboard from "components/challenge-tracker/Dashboard";
import Gallery from "components/challenge-tracker/Gallery";
import Goals from "components/challenge-tracker/Goals";
import MyProgress from "components/challenge-tracker/MyProgress";
import Notifications from "components/challenge-tracker/Notifications";

// Onboarding
import BMICalculator from "components/onboarding/BMICalculator";
import BodyMeasurementsCollector from "components/onboarding/BodyMeasurementsCollector";
import Register from "components/onboarding/Register";

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
        path: "/onboarding/bmi",
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
    element: <TrackerUI />,
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
