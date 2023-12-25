import { useState } from "react";
import { Listbox } from "@headlessui/react";

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
  const [dietFoods, setDietFoods] = useState([foodList[0], foodList[1]]);

  return (
    <div>
      <p>Enter what you ate today (choose all that applies)</p>
      <Listbox value={dietFoods} onChange={setDietFoods} multiple>
        <Listbox.Button>
          {dietFoods.map((person) => person.name).join(", ")}
        </Listbox.Button>
        <Listbox.Options>
          {foodList.map((person) => (
            <Listbox.Option key={person.id} value={person}>
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>

      <p>
        Please specify what else did you eat? (comma separated if more than one)
      </p>
      <input />

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
      <button type="button">Open Camera</button>
      <button type="button">Choose from Gallery</button>

      <hr />

      <button type="button">Cancel</button>
      <button type="button">Save</button>
    </div>
  );
}

export default DietTracker;
