import { ButtonProps } from "../../types";

const Button = ({
  color,
  backgroundColor,
  title,
  radius,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      data-testid="custom-button"
      style={{
        backgroundColor: backgroundColor,
        color: color,
        borderRadius: radius,
      }}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
