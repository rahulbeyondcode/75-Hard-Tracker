import InputField from "components/shared/InputField";
import DropDown from "components/shared/DropDown";
import Label from "components/shared/Label";
import Button from "components/shared/Button";

const foodList = [
  { id: 1, name: "Idli" },
  { id: 2, name: "Dosa" },
  { id: 3, name: "Potato curry" },
  { id: 4, name: "Kadala" },
  { id: 5, name: "Appam" },
  { id: 6, name: "Kanji" },
  { id: 7, name: "Payar" },
  { id: 0, name: "Other" },
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

      <div className="my-5">
        <Label
          text="Please specify what else did you eat? (comma separated if more than one)"
          htmlFor="other_food"
        />
        <InputField
          id="other_food"
          placeholder="eg: Chappathi, Rice"
        />
      </div>

      <p>Did you consume alchohol?</p>
      <label htmlFor="yes">
        <input type="radio" name="alcohol" id="yes" />
        Yes
      </label>
      <label htmlFor="no">
        <input type="radio" name="alcohol" id="no" />
        No
      </label>

      <p>Capture an image of your food (Optional)</p>
      <Button type="button" variant="grey">Open Camera</Button>
      <Button type="button" variant="grey">Choose from Gallery</Button>

      <hr />

      <Button type="button" variant="secondary">Cancel</Button>
      <Button variant="primary">Save</Button>
    </div>
  );
}

export default DietTracker;
