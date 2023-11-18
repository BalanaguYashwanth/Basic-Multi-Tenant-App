import { ButtonProps } from "../../types";

const Button = ({ color, title, radius,handleClick }:ButtonProps) => {
  return (
    <button
      style={{ backgroundColor: color, borderRadius: radius }}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;