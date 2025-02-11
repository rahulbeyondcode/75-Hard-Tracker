import { useFormContext } from "react-hook-form";

type PropTypes = {
  type?: "text" | "number" | "password";
  className?: string;
  id?: string;
  name: string;
};

const Input = (props: PropTypes) => {
  const { type, className, id, name } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input
        type={type}
        className={className}
        id={id}
        {...register(name, {
          required: { value: true, message: "Required" },
        })}
      />

      {errors?.root?.message ? (
        <small className="block">{errors?.root?.message}</small>
      ) : (
        ""
      )}
    </>
  );
};

export default Input;
