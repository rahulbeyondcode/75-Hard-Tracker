import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "components/form-fields/Button";
import DropDown from "components/form-fields/DropDown";
import Input from "components/form-fields/Input";
import Label from "components/form-fields/Label";
import RadioButton from "components/form-fields/RadioButton";

import formData, { FormType } from "./form-data";

const foodList = [
  { id: "1", name: "Rice" },
  { id: "2", name: "Salad" },
  { id: "3", name: "Potato curry" },
  { id: "4", name: "Bread" },
  { id: "5", name: "Fish" },
  { id: "6", name: "Kanji" },
  { id: "7", name: "Chicken" },
  { id: "0", name: "Other" },
];

function DietTracking() {
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
    <FormProvider {...methods}>
      <div>
        <Label
          text="Enter what you ate today (choose all that applies)"
          htmlFor="food_today_dropdown"
        />
        <DropDown
          id="food_today_dropdown"
          name="food_today"
          defaultSelectedIds={["3", "7"]}
          dropDownOptions={foodList}
        />

        <div className="mt-8">
          <Label
            text="Please specify what else did you eat? (comma separated if more than one)"
            htmlFor="other_food"
          />
          <Input
            name="other_food"
            type="text"
            placeholder="eg: Chapati, Rice"
          />
        </div>

        <div className="mt-8">
          <Label text="Did you consume alcohol?" htmlFor="other_food" />

          <div className="d-flex">
            <div className="radio-wrapper">
              <RadioButton
                id="alcohol_yes"
                value="alcohol_yes"
                name="did_consume_alcohol"
                label={<Label htmlFor="alcohol_yes" text="Yes" />}
              />
            </div>

            <div className="radio-wrapper">
              <RadioButton
                id="alcohol_no"
                value="alcohol_no"
                name="did_consume_alcohol"
                label={<Label htmlFor="alcohol_no" text="No" />}
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Label text="Capture an image of your food (Optional)" />

          <Button onClick={() => {}} type="button" className="mr-5">
            Open Camera
          </Button>
          <Button onClick={() => {}} type="button">
            Choose from Gallery
          </Button>
        </div>

        <div className="accordion-submit">
          <Button onClick={() => {}} type="button" variant="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit(onSubmit)} variant="primary">
            Save
          </Button>
        </div>
      </div>
    </FormProvider>
  );
}

export default DietTracking;
