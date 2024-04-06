import Accordion from "components/shared/Accordion";
import BookReadTracker from "components/challenge-tracker/daily-tasks/BookReadTracker";
import DietTracker from "components/challenge-tracker/daily-tasks/DietTracker";
import PictureTracker from "components/challenge-tracker/daily-tasks/PictureTracker";
import WaterTracker from "components/challenge-tracker/daily-tasks/WaterTracker";
import WorkoutTracker from "components/challenge-tracker/daily-tasks/WorkoutTracker";

const accordions = [
  {
    title: "Task: Follow a diet",
    body: <DietTracker />,
  },
  {
    title: "Task: Do 45 minutes OUTDOOR workout",
    body: <WorkoutTracker />,
  },
  {
    title: "Task: Do 45 minutes INDOOR workout",
    body: <WorkoutTracker />,
  },
  {
    title: "Task: Drink one gallon of water",
    body: <WaterTracker />,
  },
  {
    title: "Task: Read 10 pages of a non fiction book",
    body: <BookReadTracker />,
  },
  {
    title: "Task: Take a daily progress picture",
    body: <PictureTracker />,
  },
];

function DailyTasks() {
  return (
    <div>
      <h1>Your Today&apos;s Progress</h1>
      <progress value="32" max="100">
        {" "}
        32%
        {" "}
      </progress>
      <br />

      {(accordions || []).map((accordion) => (
        <Accordion
          key={accordion.title}
          title={accordion.title}
          body={accordion.body}
          open={accordion.title === "Task: Follow a diet"}
        />
      ))}
    </div>
  );
}

export default DailyTasks;
