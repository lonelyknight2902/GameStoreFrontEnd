import React from "react";
import { Button, CartItem } from "../components";

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

const Cart = () => {
  return (
    <div className="text-white font-inter flex flex-col gap-5">
      <h1 className="text-6xl">My Cart</h1>
      <div className="flex justify-between gap-5">
        <div className="w-3/4 flex flex-col gap-5">
          {games.map((game) => {
            return <CartItem game={game} />;
          })}
        </div>
        <div className="w-1/4 flex flex-col gap-5">
          <h2 className="text-4xl font-light">Games Summary</h2>
          <div>
            <div className="flex flex-col items-stretch gap-2">
              <div className="flex justify-between">
                <div>Price</div>
                <div>
                  đ
                  {games
                    .reduce((acc, curr) => acc + curr.PRICE, 0)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
              </div>
              <div className="flex justify-between">
                <div>Sale Discount</div>
                <div>
                  đ
                  {games
                    .reduce(
                      (acc, curr) => acc + (curr.PRICE * curr.AMOUNT) / 100,
                      0
                    )
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between border-t-2 border-zinc-800 py-2 font-bold">
            <div>Subtotal</div>
            <div>
              đ
              {games
                .reduce((acc, curr) => acc + curr.PRICE * (1 - curr.AMOUNT / 100), 0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>
          <Button text="CHECK OUT"/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
