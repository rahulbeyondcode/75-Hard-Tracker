import { Disclosure } from "@headlessui/react";

import DietTracker from "components/challenge-tracker/DailyTasks/DietTracker";
import WorkoutTracker from "components/challenge-tracker/DailyTasks/WorkoutTracker";
import WaterTracker from "components/challenge-tracker/DailyTasks/WaterTracker";
import BookReadTracker from "components/challenge-tracker/DailyTasks/BookReadTracker";
import PictureTracker from "components/challenge-tracker/DailyTasks/PictureTracker";

const DailyTasks = () => {
  return (
    <div>
      <h1>Your Today’s Progress</h1>
      <progress value="32" max="100"> 32% </progress>

      <Disclosure>
        <Disclosure.Button className="py-2">
          Task: Follow a diet
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500">
          <DietTracker />
        </Disclosure.Panel>
      </Disclosure>

      <Disclosure>
        <Disclosure.Button className="py-2">
          Task: Do 45 minutes OUTDOOR workout
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500">
          <WorkoutTracker />
        </Disclosure.Panel>
      </Disclosure>

      <Disclosure>
        <Disclosure.Button className="py-2">
          Task: Do 45 minutes INDOOR workout
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500">
          <WorkoutTracker />
        </Disclosure.Panel>
      </Disclosure>

      <Disclosure>
        <Disclosure.Button className="py-2">
          Task: Drink one gallon of water
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500">
          <WaterTracker />
        </Disclosure.Panel>
      </Disclosure>

      <Disclosure>
        <Disclosure.Button className="py-2">
          Task: Read 10 pages of a non fiction book
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500">
          <BookReadTracker />
        </Disclosure.Panel>
      </Disclosure>

      <Disclosure>
        <Disclosure.Button className="py-2">
          Task: Take a daily progress picture
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500">
          <PictureTracker />
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
};

export default DailyTasks;
