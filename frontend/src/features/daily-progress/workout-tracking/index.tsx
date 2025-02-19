import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import formData, { FormType } from "./form-data";

import Label from "components/form-fields/Label";
import Button from "components/form-fields/Button";
import RadioButton from "components/form-fields/RadioButton";
import TimerComponent from "./components/timer";

function WorkoutTracking() {
  const { defaultValues, schema } = formData;

  const methods = useForm<FormType>({
    mode: "all",
    defaultValues,
    resolver: zodResolver(schema),
  });

  const { handleSubmit } = methods;

  const onSubmit = (formData: FormType) => {
    console.log("formData: ", formData);
  };

  return (
    <div>
      <FormProvider {...methods}>
        {/* <Label text="How would you prefer to track your workout?" />

        <div className="d-flex aic">
          <div className="radio-wrapper">
            <RadioButton
              id="timer_auto"
              value="timer_auto"
              name="preferred_workout_tracker"
            />
            <Label htmlFor="timer_auto" text="Start a timer" />
          </div>

          <div className="radio-wrapper">
            <RadioButton
              id="timer_manual"
              value="timer_manual"
              name="preferred_workout_tracker"
            />
            <Label
              htmlFor="timer_manual"
              text="Enter workout timings manually"
            />
          </div>
        </div> */}

        <div className="mt-8">
          {/* <TimeInput /> */}
          <TimerComponent />
        </div>

        {/* <div className="accordion-submit">
          <Button onClick={() => {}} type="button" variant="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit(onSubmit)} variant="primary">
            Save
          </Button>
        </div> */}
      </FormProvider>
    </div>
  );
}

export default WorkoutTracking;
