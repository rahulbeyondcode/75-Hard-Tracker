import { useFormContext } from "react-hook-form";

type PropTypes = {
  type?: "text" | "number" | "password";
  className?: string;
  id?: string;
  name: string;
};

const Input = (props: PropTypes) => {
  const { type, className, id, name } = props;
  const { register } = useFormContext();

  return (
    <input type={type} className={className} id={id} {...register(name)} />
  );
};

export default Input;
