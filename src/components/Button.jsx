const Button = ({text, isSecondary, className}) => {
  return isSecondary ?
      <button className={`text-gray-400 w-fit bg-transparent hover:border-gray-300 hover:text-gray-300 border border-gray-400 px-4 py-2 rounded-md ${className}`}>
        {text}
      </button>
    :
      <button className={`text-white w-fit bg-blue-600 px-4 py-2 hover:bg-blue-500 duration-300 font-inter rounded-md ${className}`}>
        {text}
      </button>
}

export default Button