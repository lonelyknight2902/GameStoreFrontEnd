import React from "react";
import { useNavigate } from "react-router-dom";

const CartItem = ({ game, onRemove = null }) => {

  const navigate = useNavigate();

  const releaseDate = new Date(game.ENDDATE)
  return (
    <div className="flex justify-between p-6 bg-zinc-900 rounded-lg h-64">
      <div className="flex gap-5">
        <img className="w-32 h-full object-cover" src={game.COVERIMAGEURL} alt="" />
        <div className="w-3/4 flex flex-col gap-2">
          <div className="py-[0.1rem] px-[0.6rem] bg-zinc-800 w-fit text-xs rounded-sm font-semibold">BASE GAME</div>
          <h3 className="cursor-pointer hover:underline text-2xl" onClick={(e) => navigate(`/game/${game.GAMEID}`)}>{game.NAME}</h3>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <div>
          {game.AMOUNT == null ? (
            <div className="self-end">
              <div>
                <span>
                  đ{game.PRICE.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2 items-end">
              <div className="flex gap-2">
                <div className="text-xs flex items-center  py-[0.01rem] px-[0.6rem] bg-blue-600 w-fit rounded-md">
                  -{game.AMOUNT}%
                </div>
                <div>
                  <span className="line-through text-gray-500 mr-2">
                    đ
                    {game.PRICE.toString().replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ","
                    )}
                  </span>
                  <span>
                    đ
                    {((game.PRICE * (100 - game.AMOUNT)) / 100)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                </div>
              </div>
              <div className="text-sm">Sale ends {releaseDate.getDate()}/{releaseDate.getMonth() + 1}/
                {releaseDate.getFullYear()}</div>
            </div>
          )}
        </div>
        <div>
          <span onClick={onRemove} className="underline cursor-pointer">Remove</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
