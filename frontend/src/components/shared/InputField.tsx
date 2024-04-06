type PropTypes = {
  errorMessage?: string;
  id?: string;
  className?: string;
  placeholder?: string;
};

function InputField(props: PropTypes) {
  const {
    errorMessage, id, className, placeholder,
  } = props;
  return (
    <>
      <input
        id={id}
        className={`input_field ${className || ""}`}
        placeholder={placeholder || ""}
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
