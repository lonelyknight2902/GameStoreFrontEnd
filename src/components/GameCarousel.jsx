import React from "react";
import { useNavigate } from "react-router-dom";

const GameCarousel = ({ index, featureGames }) => {
  const navigate = useNavigate();

  const handleOnClick = (e, id) => {
    navigate(`/game/${id}`)
  }

  return (
    <div className="font-inter overflow-hidden relative h-fit w-full rounded-xl">
      <div
        className={`flex transition-transform ease-out duration-500 w-[${featureGames.length * 100}%]`}
        style={{ transform: `translateX(-${index * 100 / featureGames.length}%)` }}
      >
        {featureGames.map((featureGame, featureGameIdx) => {
          return (
            <div className={`relative w-full cursor-pointer`} onClick={(e) => handleOnClick(e, featureGame.GAMEID)}>
              <img
                className={`h-full object-cover w-full`}
                src={featureGame.FEATUREIMAGEURL}
              />
              <div className={`absolute w-3/6 top-[60%] left-10 flex flex-col gap-2`}>
                <h3 className=" text-white font-semibold text-3xl">{featureGame.NAME}</h3>
                <div className="font-medium text-white">
                  <span className="">Starting at </span>
                  <span>đ{featureGame.PRICE.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                </div>
                <div className="text-base font-medium text-white">
                  {featureGame.SUMMARY}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameCarousel;
