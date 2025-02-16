type PropsType = {
  text: string;
  htmlFor?: string;
  className?: string;
  id?: string;
};

function Label(props: PropsType) {
  const { className, htmlFor, id, text } = props;

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
