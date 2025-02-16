import { useFormContext } from "react-hook-form";
import { InputPropTypes } from "./types";

const Input = (props: InputPropTypes) => {
  const { type, className, id, name, placeholder, allowNumbersOnly } = props;
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const { onChange, ...restOfRegister } = register(name);

  return (
    <>
      <input
        {...restOfRegister}
        type={type}
        className={className}
        id={id}
        placeholder={placeholder}
        onChange={(e) => {
          if (allowNumbersOnly) {
            let enteredData = e.target.value;
            const filteredValue = enteredData.replace(/\D/g, ""); // Remove all non-numeric characters
            setValue(name, filteredValue || "", { shouldValidate: true });
          } else {
            onChange(e);
          }
        }}
      />

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

export default Input;
