import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search != "") {
      setSearch("");
      navigate(`/search?q=${search.toLowerCase()}`);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-3/12 font-normal bg-neutral-800 rounded-full flex items-center duration-300 gap-4 px-4 py-2 group focus-within:bg-neutral-700"
    >
      <BsSearch className="text-neutral-500" />
      <input
        type="text"
        placeholder="Search store..."
        value={search}
        className="w-11/12 text-base bg-transparent outline-none placeholder:font-normal placeholder:text-neutral-500"
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
