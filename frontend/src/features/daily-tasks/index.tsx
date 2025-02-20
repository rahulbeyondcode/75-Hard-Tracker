import Accordion from "components/form-fields/Accordion";

import BookReadTracking from "./book-read-tracking";
import DietTracking from "./diet-tracking";
import ProgressPictureTracking from "./progress-picture-tracking";
import WaterTracking from "./water-tracking";
import WorkoutTracking from "./workout-tracking";

const accordions = [
  {
    title: "Task: Follow a diet",
    body: <DietTracking />,
  },
  {
    title: "Task: Do 45 minutes OUTDOOR workout",
    body: <WorkoutTracking />,
  },
  {
    title: "Task: Do 45 minutes INDOOR workout",
    body: <WorkoutTracking />,
  },
  {
    title: "Task: Drink one gallon of water",
    body: <WaterTracking />,
  },
  {
    title: "Task: Read 10 pages of a non fiction book",
    body: <BookReadTracking />,
  },
  {
    title: "Task: Take a daily progress picture",
    body: <ProgressPictureTracking />,
  },
];

function DailyTasks() {
  return (
    <div>
      <h1>Your Today&apos;s Progress</h1>
      <progress value="32" max="100">
        {" "}
        32%{" "}
      </progress>
      <br />

      {(accordions || []).map((accordion) => (
        <Accordion
          key={accordion.title}
          title={accordion.title}
          body={accordion.body}
          open={accordion.title === "Tsask: Do 45 minutes OUTDOOR workout"}
        />
      ))}
    </div>
  );
}

export default DailyTasks;
