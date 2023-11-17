const Button = ({ color, title, radius, handleClick }) => {
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