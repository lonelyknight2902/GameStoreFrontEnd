import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="w-3/12 font-normal bg-neutral-800 rounded-full flex items-center duration-300 gap-4 px-4 py-2 group focus-within:bg-neutral-700">
      <BsSearch className="text-neutral-500"/>
      <input
        type="text"
        placeholder="Search store..."
        className="w-11/12 text-base bg-transparent outline-none placeholder:font-normal placeholder:text-neutral-500"
      />
    </div>
  );
};

export default SearchBar;
