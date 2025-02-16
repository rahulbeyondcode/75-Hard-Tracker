import { RouteObject } from "react-router-dom";

import DailyProgress from "features/daily-progress";
import DietTracking from "features/daily-progress/diet-tracking";
import WaterTracking from "features/daily-progress/water-tracking";
import BookReadTracking from "features/daily-progress/book-read-tracking";
import WorkoutTracking from "features/daily-progress/workout-tracking";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <DailyProgress />,
    children: [
      {
        path: "/",
        element: <WorkoutTracking />,
      },
    ],
  },
];

export default routes;
