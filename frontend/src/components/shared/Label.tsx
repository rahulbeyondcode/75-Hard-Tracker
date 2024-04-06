type PropsType = {
  text: string;
  className: string;
  htmlFor: string;
  id: string;
};

function Label(props: PropsType) {
  const {
    className,
    htmlFor,
    id,
    text,
  } = props;

  return (
    <label
      className={`label_text ${className || ""}`}
      htmlFor={htmlFor || ""}
      id={id || ""}
    >
      {text}
    </label>
  );
}

export default Label;
