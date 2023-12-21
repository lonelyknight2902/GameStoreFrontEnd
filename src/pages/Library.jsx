import React, { useState } from "react";
import { GameGrid } from "../components";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import useSWR from "swr";
import { useAuth } from "../hooks";

const games = [
  {
    GAMEID: 1,
    NAME: "Alan Wake 2",
    PRICE: 1124750,
    COVERIMAGEURL:
      "https://www.gamerguides.com/assets/guides/resize-x700/322/covers/fbd0dcc88b31805fc7d49f59b8e0e5d0276403cde7fb8cc8.png",
    AMOUNT: 20,
    ENDDATE: "2024-01-09T17:00:00.000Z",
  },
  {
    GAMEID: 1,
    NAME: "Alan Wake 2",
    PRICE: 1124750,
    COVERIMAGEURL:
      "https://www.gamerguides.com/assets/guides/resize-x700/322/covers/fbd0dcc88b31805fc7d49f59b8e0e5d0276403cde7fb8cc8.png",
    AMOUNT: 20,
    ENDDATE: "2024-01-09T17:00:00.000Z",
  },
];

const Library = () => {
  let [search, setSearch] = useState("");
  // const {user} = useAuth();
  // console.log(user);


  const endpoint = `http://localhost:3000/api/v1/games/user`;
  const fetcher = url => axios.get(url).then(res => res.data.data);
  const {data, error, isLoading} = useSWR(endpoint, fetcher);
  // if(error) console.log(error.request._header);
  if(data)console.log(data)

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="text-white font-inter flex flex-col gap-10 w-full">
      <h1 className="text-6xl">Library</h1>
      <div className="flex justify-between gap-5 w-full">
        <div className=" w-9/12 w-full">
          {!data ? <div>Loading...</div> : null}
          {data ? <GameGrid games={data.filter((game) => game.NAME.toLowerCase().includes(search))} /> : null}
        </div>
        <div className="w-3/12">
          <div className="w-full font-normal bg-neutral-800 rounded-full flex items-center duration-300 gap-4 px-4 py-2 group focus-within:bg-neutral-700">
            <BsSearch className="text-neutral-500" />
            <input
              type="text"
              placeholder="Search library..."
              onChange={(e) => handleChange(e)}
              className="w-11/12 text-base bg-transparent outline-none placeholder:font-normal placeholder:text-neutral-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
