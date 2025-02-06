import InputField from "components/shared/InputField";
import Label from "components/shared/Label";
import Button from "components/shared/Button";

import TimerComponent from "components/challenge-tracker/daily-tasks/TimerComponent";

function WorkoutTracker() {
  return (
    <div>
      <Label text="How would you prefer to track your workout?" />

      <div className="d-flex aic">
        <div className="radio-wrapper">
          <InputField
            id="timer_auto"
            value="timer_auto"
            name="preferred_workout_tracker"
            type="radio"
          />
          <Label htmlFor="timer_auto" text="Start a timer" />
        </div>

        <div className="radio-wrapper">
          <InputField
            id="timer_manual"
            value="timer_manual"
            name="preferred_workout_tracker"
            type="radio"
          />
          <Label htmlFor="timer_manual" text="Enter workout timings manually" />
        </div>
      </div>

      <div className="mt-8">
        {/* <TimeInput /> */}
        <TimerComponent />
      </div>

      <div className="accordion-submit">
        <Button onClick={() => {}} type="button" variant="secondary">
          Cancel
        </Button>
        <Button onClick={() => {}} variant="primary">
          Save
        </Button>
      </div>
    </div>
  );
}

export default WorkoutTracker;
