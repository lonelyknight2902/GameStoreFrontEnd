import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import useSWR from "swr";
import axios from "axios";
import { GameGrid } from "../components";

const Search = () => {
  let [search, setSearch] = useState("");
  // const {user} = useAuth();
  // console.log(user);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');
  const navigate = useNavigate();

  const endpoint = `http://localhost:3000/api/v1/games/search?q=${searchQuery}`;
  const fetcher = (url) => axios.get(url).then((res) => res.data.data);
  const { data, error, isLoading } = useSWR(endpoint, fetcher);
  if(error) console.log(error.request._header);
  if (data) console.log(data);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(search != "") {
      setSearch("");
      navigate(`/search?q=${search.toLowerCase()}`);
    }
  }

  return (
    <div className="text-white font-inter flex flex-col gap-10 w-full">
      <h1 className="text-6xl">Search result for {`'${searchQuery}'`}</h1>
      <div className="flex justify-between gap-5 w-full">
        <div className="w-full">
          {!data ? <div>Loading...</div> : null}
          {data ? (
            <GameGrid
              games={data}
            />
          ) : null}
        </div>
        <div className="w-3/12">
          <form onSubmit={handleSubmit}  className="w-full font-normal bg-neutral-800 rounded-full flex items-center duration-300 gap-4 px-4 py-2 group focus-within:bg-neutral-700">
            <BsSearch className="text-neutral-500" />
            <input
              type="text"
              placeholder="Search store..."
              value={search}
              onChange={(e) => handleChange(e)}
              className="w-11/12 text-base bg-transparent outline-none placeholder:font-normal placeholder:text-neutral-500"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
