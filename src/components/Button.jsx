const Button = ({text, isSecondary}) => {
  return isSecondary ?
      <button className="text-gray-400 w-full bg-transparent hover:border-gray-300 hover:text-gray-300 border border-gray-400 px-8 py-4 rounded-md">
        {text}
      </button>
    :
      <button className="text-white w-full bg-blue-600 px-8 py-4 hover:bg-blue-500 duration-300 font-inter rounded-md">
        {text}
      </button>
}

export default Button