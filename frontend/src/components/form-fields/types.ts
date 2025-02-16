import React from "react";

export type InputPropTypes = {
  name: string;
  type?: "text" | "number" | "password";
  className?: string;
  id?: string;
  placeholder?: string;
  allowNumbersOnly?: boolean;
};

export type RadioPropTypes = {
  name: string;
  className?: string;
  id?: string;
  label?: React.ReactNode | string;
  value?: string;
  customOnChangeAction?: (_value: string | boolean) => void;
  disabled?: boolean;
};

export type DropdownTypes = {
  id: string;
  name: string;
  defaultSelectedIds?: string[];
  dropDownOptions: { id: string; name: string }[];
};
