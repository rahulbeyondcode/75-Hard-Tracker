import { useFormContext } from "react-hook-form";
import { RadioPropTypes } from "./types";

const RadioButton = (props: RadioPropTypes) => {
  const { name, className, id, label, value, customOnChangeAction, disabled } =
    props;
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const fieldValue = watch(name);

  const { onChange, ...restOfRegister } = register(name);

  return (
    <>
      <input
        {...restOfRegister}
        type="radio"
        className={className}
        id={id}
        value={value}
        checked={fieldValue === value}
        onChange={(e) => {
          if (customOnChangeAction) {
            customOnChangeAction(value as string);
          }
          onChange(e);
        }}
        disabled={disabled}
      />
      {label ? label : ""}

      {errors?.[name]?.message ? (
        <small className="block text-red-500">
          {errors[name].message as string}
        </small>
      ) : (
        ""
      )}
    </>
  );
};

export default RadioButton;
