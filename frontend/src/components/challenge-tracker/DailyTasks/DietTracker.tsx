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

const DietTracker = () => {
  const [dietFoods, setDietFoods] = useState([foodList[0], foodList[1]]);

  return (
    <div>
      <p>DietTracker</p>

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
    </div>
  );
};

export default DietTracker;
