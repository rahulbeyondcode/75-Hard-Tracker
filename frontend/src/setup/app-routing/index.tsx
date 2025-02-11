import { RouteObject } from "react-router-dom";

import DailyProgress from "features/daily-progress";
import BookReadTracking from "features/daily-progress/book-read-tracking";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <DailyProgress />,
    children: [
      {
        path: "/",
        element: <BookReadTracking />,
      },
    ],
  },
];

export default routes;
