import { useState } from "react";
import { Listbox } from "@headlessui/react";

import Label from "components/shared/Label";

type PropTypes = {
  id: string;
  defaultSelectedIds?: string[];
  dropDownOptions: { id: string; name: string }[];
};

const getFormattedList = (
  type: "selected" | "unselected",
  selectedIds: string[],
  fullList: { id: string; name: string }[],
) =>
  fullList.filter((listItem) => {
    if (type === "selected") {
      return selectedIds.includes(listItem.id);
    }
    return !selectedIds.includes(listItem.id);
  });

function DropDown(props: PropTypes) {
  const { id, dropDownOptions, defaultSelectedIds } = props;

  const [selectedItems, setSelectedItems] = useState(
    getFormattedList("selected", defaultSelectedIds, dropDownOptions) || [],
  );
  const [formattedDropdownOptions, setFormattedDropdownOptions] = useState(
    getFormattedList("unselected", defaultSelectedIds, dropDownOptions) || [],
  );

  const handleChange = (value: { id: string; name: string }[]) => {
    setSelectedItems(value);
    const selectedIds = value.map((item) => item.id);

    setFormattedDropdownOptions(
      getFormattedList("unselected", selectedIds, dropDownOptions),
    );
  };

  const handleRemoveSelectedItem = (e: React.MouseEvent, deleteId: string) => {
    e.stopPropagation();
    const selectedIds = selectedItems
      .filter((item) => item.id !== deleteId)
      .map((item) => item.id);
    setSelectedItems((prev) => prev.filter((item) => item.id !== deleteId));

    setFormattedDropdownOptions(
      getFormattedList("unselected", selectedIds, dropDownOptions),
    );
  };

  return (
    <>
      <Listbox value={selectedItems} onChange={handleChange} multiple>
        <Listbox.Button className="dropdown">
          {selectedItems.map((option) => (
            <span key={option.id} className="selected-tag">
              {option.name}
              <span
                role="presentation"
                onClick={(e) => handleRemoveSelectedItem(e, option.id)}
              >
                x
              </span>
            </span>
          ))}
        </Listbox.Button>
        <Listbox.Options className="dropdown-options">
          {formattedDropdownOptions.map((option) => (
            <Listbox.Option key={option.id} value={option}>
              {option.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </>
  );
}

DropDown.defaultProps = {
  defaultSelectedIds: [],
};

export default DropDown;
