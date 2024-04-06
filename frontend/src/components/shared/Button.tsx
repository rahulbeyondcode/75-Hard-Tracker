/* eslint-disable react/button-has-type */
import React from "react";

type PropTypes = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: "primary" | "secondary" | "grey";
  type?: "submit" | "button";
  onClick: () => void;
};

function Button(props: PropTypes) {
  const {
    id, className, variant, children, type, onClick,
  } = props;

  return (
    <button
      type={type}
      id={id}
      className={`${className} ${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  id: "",
  className: "",
  variant: "primary",
  type: "submit",
};

export default Button;
