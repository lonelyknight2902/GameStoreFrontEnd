const Button = ({
  text,
  isSecondary,
  type = "button",
  className,
  onClick = null,
}) => {
  return isSecondary ? (
    <button
      onClick={onClick}
      type={type}
      className={`text-gray-400 flex justify-center items-center w-full bg-transparent hover:border-gray-300 hover:text-gray-300 border border-gray-400 px-4 py-2 rounded-md ${className}`}
    >
      {text}
    </button>
  ) : (
    <button
      onClick={onClick}
      type={type}
      className={`text-white w-full bg-blue-600 px-4 py-2 hover:bg-blue-500 duration-300 font-inter rounded-md ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
