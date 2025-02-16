import React, { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useFormContext } from "react-hook-form";
import { DropdownTypes } from "./types";

const getFormattedList = (
  type: "selected" | "unselected",
  selectedIds: string[],
  fullList: { id: string; name: string }[]
) =>
  fullList.filter((listItem) => {
    if (type === "selected") {
      return (selectedIds || []).includes(listItem.id);
    }
    return !(selectedIds || []).includes(listItem.id);
  });

function DropDown(props: DropdownTypes) {
  const { dropDownOptions, defaultSelectedIds, name } = props;
  const {
    trigger,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const fieldValue: { id: string; name: string }[] = watch(name);

  const [formattedDropdownOptions, setFormattedDropdownOptions] = useState(
    getFormattedList("unselected", defaultSelectedIds!, dropDownOptions) || []
  );

  const handleChange = (value: { id: string; name: string }[]) => {
    setValue(name, value);
    const selectedIds = value.map((item) => item.id);

    setFormattedDropdownOptions(
      getFormattedList("unselected", selectedIds, dropDownOptions)
    );
    trigger();
  };

  const handleRemoveSelectedItem = (e: React.MouseEvent, deleteId: string) => {
    e.stopPropagation();
    const selectedIds = fieldValue
      .filter((item) => item.id !== deleteId)
      .map((item) => item.id);

    setValue(
      name,
      (fieldValue || []).filter((item) => item.id !== deleteId)
    );

    setFormattedDropdownOptions(
      getFormattedList("unselected", selectedIds, dropDownOptions)
    );
    trigger();
  };

  return (
    <>
      <Listbox value={fieldValue} onChange={handleChange} multiple>
        <ListboxButton className="dropdown_">
          {(fieldValue || []).length === 0 ? (
            <p className="placeholder">Choose any</p>
          ) : (
            ""
          )}
          {(fieldValue || []).map((option) => (
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
        </ListboxButton>
        <ListboxOptions className="dropdown-options">
          {formattedDropdownOptions.map((option) => (
            <ListboxOption key={option.id} value={option}>
              {option.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>

      {errors?.[name]?.message ? (
        <small className="block text-red-500">
          {errors[name].message as string}
        </small>
      ) : (
        ""
      )}
    </>
  );
}

DropDown.defaultProps = {
  defaultSelectedIds: [],
};

export default DropDown;
