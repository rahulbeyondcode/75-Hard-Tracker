import { RouteObject } from "react-router-dom";

import Onboarding from "./pages/Onboarding";
import TrackerUI from "./pages/TrackerUI";

// Challenge Trackers
import About from "pages/TrackerUI/About";
import Account from "pages/TrackerUI/Account";
import Community from "pages/TrackerUI/Community";
import DailyTasks from "pages/TrackerUI/DailyTasks";
import Dashboard from "pages/TrackerUI/Dashboard";
import Gallery from "pages/TrackerUI/Gallery";
import Goals from "pages/TrackerUI/Goals";
import MyProgress from "pages/TrackerUI/MyProgress";
import Notifications from "pages/TrackerUI/Notifications";

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
