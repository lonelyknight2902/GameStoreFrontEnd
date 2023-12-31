import React from "react";
import { Button, CartItem } from "../components";
import useSWR, {mutate} from "swr";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const endpoint = `http://localhost:3000/api/v1/user/cart`;
  const navigate = useNavigate();
  const fetcher = (url) => axios.get(url).then((res) => res.data.data);
  mutate();
  const { data, error, isLoading } = useSWR(endpoint, fetcher);
  if (error) return <div>An error has occured</div>;
  if (isLoading) return <div>Loading...</div>;
  console.log(data);

  const handleRemove = async (gameId, index) => {
    await axios.delete(`http://localhost:3000/api/v1/user/cart`, {
      data: {
        gameId: gameId
      }
    });
    mutate(data.splice(index, 1));
  }

  const handleCheckout = (e) => {
    navigate('/checkout', {
      state: {
        games: data
      }
    })
  }

  return (
    <div className="text-white font-inter flex flex-col gap-5 w-full">
      <h1 className="text-6xl">My Cart</h1>
      <div className="flex justify-between gap-5 w-full">
        <div className="w-3/4 flex flex-col gap-5">
          {data.length > 0 ? data.map((game, index) => {
            return <CartItem key={index} game={game} onRemove={(e) => handleRemove(game.GAMEID, index)}/>;
          }) : <div className="w-full h-92 flex items-center justify-center">Your cart is empty</div>}
        </div>
        <div className="w-1/4 flex flex-col gap-5">
          <h2 className="text-4xl font-light">Games Summary</h2>
          <div>
            <div className="flex flex-col items-stretch gap-2">
              <div className="flex justify-between">
                <div>Price</div>
                <div>
                  đ
                  {data
                    .reduce((acc, curr) => acc + curr.PRICE, 0)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
              </div>
              <div className="flex justify-between">
                <div>Sale Discount</div>
                <div>
                  đ
                  {data
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
              {data
                .reduce(
                  (acc, curr) => acc + curr.PRICE * (1 - curr.AMOUNT / 100),
                  0
                )
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>
          <Button text="CHECK OUT" onClick={handleCheckout}/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
