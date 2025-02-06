import InputField from "components/shared/InputField";
import DropDown from "components/shared/DropDown";
import Label from "components/shared/Label";
import Button from "components/shared/Button";

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

function DietTracker() {
  return (
    <div>
      <Label
        text="Enter what you ate today (choose all that applies)"
        htmlFor="food_today_dropdown"
      />
      <DropDown
        id="food_today_dropdown"
        // defaultSelectedIds={[3, 7]}
        dropDownOptions={foodList}
      />

      <div className="mt-8">
        <Label
          text="Please specify what else did you eat? (comma separated if more than one)"
          htmlFor="other_food"
        />
        <InputField
          id="other_food"
          type="text"
          placeholder="eg: Chapati, Rice"
        />
      </div>

      <div className="mt-8">
        <Label text="Did you consume alcohol?" htmlFor="other_food" />

        <div className="d-flex">
          <div className="radio-wrapper">
            <InputField
              id="alcohol_yes"
              value="alcohol_yes"
              name="alcohol"
              type="radio"
            />
            <Label htmlFor="alcohol_yes" text="Yes" />
          </div>

          <div className="radio-wrapper">
            <InputField
              id="alcohol_no"
              value="alcohol_no"
              name="alcohol"
              type="radio"
            />
            <Label htmlFor="alcohol_no" text="No" />
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
        <Button onClick={() => {}} variant="primary">
          Save
        </Button>
      </div>
    </div>
  );
}

export default DietTracker;
