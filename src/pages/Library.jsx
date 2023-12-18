import React, { useState } from "react";
import { GameGrid } from "../components";
import { BsSearch } from "react-icons/bs";

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

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="text-white font-inter flex flex-col gap-10">
      <h1 className="text-6xl">Library</h1>
      <div className="flex justify-between">
        <div className=" w-10/12">
          <GameGrid games={games.filter((game) => game.NAME.toLowerCase().includes(search))} />
        </div>
        <div className="w-2/12">
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
