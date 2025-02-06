type PropTypes = {
  errorMessage?: string;
  id?: string;
  className?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  type: "text" | "number" | "checkbox" | "radio";
};

function InputField(props: PropTypes) {
  const { errorMessage, id, className, placeholder, type } = props;
  return (
    <>
      <input
        id={id}
        className={`input_field ${className || ""}`}
        placeholder={placeholder || ""}
        type={type}
      />
      {errorMessage ? <p>{errorMessage}</p> : ""}
    </>
  );
}

InputField.defaultProps = {
  errorMessage: "",
  id: "",
  className: "",
  placeholder: "",
};

export default InputField;
