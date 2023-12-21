import { useState } from "react";
import { Button, Carousel, ImageContainer, RatingCard } from "../components";
import RatingStar from "../components/RatingStar";
import axios from "axios";
import useSWR, { mutate } from "swr";
import { useNavigate, useParams } from "react-router-dom";
import RatingList from "../components/RatingList";
import { useAuth } from "../hooks";
// import { Rating } from "@material-tailwind/react";

const game = {
  GAMEID: 1,
  NAME: "Alan Wake 2",
  PRICE: 1124750,
  SUMMARY:
    "Saga Anderson arrives to investigate ritualistic murders in a small town. Alan Wake pens a dark story to shape the reality around him. These two heroes are somehow connected. Can they become the heroes they need to be?",
  DESCRIPTION:
    "<h3 class='text-xl font-normal text-white'>Alan Wake 2</h3><br><p>A string of ritualistic murders threatens Bright Falls, a small-town community surrounded by Pacific Northwest wilderness. Saga Anderson, an accomplished FBI agent with a reputation for solving impossible cases arrives to investigate the murders. Anderson’s case spirals into a nightmare when she discovers pages of a horror story that starts to come true around her.</p><br><p>Alan Wake, a lost writer trapped in a nightmare beyond our world, writes a dark story in an attempt to shape the reality around him and escape his prison. With a dark horror hunting him, Wake is trying to retain his sanity and beat the devil at his own game.</p><br><p>Anderson and Wake are two heroes on two desperate journeys in two separate realities, connected at heart in ways neither of them can understand: reflecting each other, echoing each other, and affecting the worlds around them.</p><br><p>Fueled by the horror story, supernatural darkness invades Bright Falls, corrupting the locals and threatening the loved ones of both Anderson and Wake. Light is their weapon—and their safe haven — against the darkness they face. Trapped in a sinister horror story where there are only victims and monsters, can they break out to be the heroes they need to be?</p><br><h3 class='text-xl font-normal text-white'>Solve a Deadly Mystery</h3><br><p>What begins as a small-town murder investigation rapidly spirals into a nightmare journey. Uncover the source of the supernatural darkness in this psychological horror story filled with intense suspense and unexpected twists.</p><br><h3 class='text-xl font-normal text-white'>Play As Two Characters</h3><br><p>Experience both Alan Wake’s and Saga Anderson’s stories and see events unfold from different perspectives. Switch between Anderson’s life-or-death race to solve the case and Wake’s desperate attempts to rewrite his reality to escape the depths of the Dark Place.</p><br><h3 class='text-xl font-normal text-white'>Explore Two Worlds</h3><br><p>Experience two beautiful yet terrifying worlds, each with its own rich cast of characters and deadly threats. Discover majestic landscapes of Cauldron Lake in the Pacific Northwest and the idyllic towns of Bright Falls and Watery. Contrasting sharply, attempt to escape the nightmarish cityscape of the Dark Place.</p><br><h3 class='text-xl font-normal text-white'>Survive With Light</h3><br><p>With limited resources, take on powerful supernatural enemies in desperate close-combat situations. It takes more than just a gun to survive: light is the ultimate weapon in the fight against the darkness and will be your refuge when enemies threaten to overwhelm you.</p>",
  RELEASEDAY: "2023-10-26T17:00:00.000Z",
  COVERIMAGEURL:
    "https://www.gamerguides.com/assets/guides/resize-x700/322/covers/fbd0dcc88b31805fc7d49f59b8e0e5d0276403cde7fb8cc8.png",
  FEATUREIMAGEURL:
    "https://i0.wp.com/xboxera.com/wp-content/uploads/2023/10/Alan_Wake_2_keyart-2-e1698131792386.png?fit=1920%2C1080&ssl=1",
  ISFEATURE: "y",
  PUBLISHERID: 1,
  DEVELOPERID: 1,
  PUBLISHERNAME: "Epic Games Publishing",
  DEVELOPERNAME: "Remedy Entertainment",
  AMOUNT: 50,
  ENDDATE: "20/10/2023",
  AVGRATING: 5,
  tags: [
    {
      TAGID: 1,
      TAGNAME: "Action",
    },
    {
      TAGID: 2,
      TAGNAME: "Adventure",
    },
    {
      TAGID: 3,
      TAGNAME: "Horror",
    },
    {
      TAGID: 4,
      TAGNAME: "Shooter",
    },
    {
      TAGID: 5,
      TAGNAME: "Single Player",
    },
  ],
  images: [
    "https://cdn2.unrealengine.com/egs-alanwake2-remedyentertainment-g1a-02-1920x1080-cee72a709dc4.jpg",
    "https://cdn2.unrealengine.com/egs-alanwake2-remedyentertainment-g1a-05-1920x1080-c89a4844a26f.jpg",
    "https://cdn2.unrealengine.com/egs-alanwake2-remedyentertainment-g1a-06-1920x1080-3117083b6aa9.jpg",
    "https://cdn2.unrealengine.com/the-first-gameplay-preview-of-alan-wake-2-1920x1080-6cd1f0e9b2df.jpg",
  ],
};

const ratings = [
  {
    USERNAME: "admin",
    IMAGEURL:
      "https://bizweb.dktcdn.net/100/438/408/files/gigachad-meme-yodyvn.jpg?v=1696388231581",
    Comment: "Nah shit af",
    RATING: 1,
  },
];

const Game = () => {
  const [rating, setRating] = useState(0);
  const { user } = useAuth();
  // const [own, setOwn] = useState(false);
  // const [cart, setCart] = useState(false);

  async function gameFetcher(url) {
    const res = await axios.get(url);
    return res.data;
  }
  let { id } = useParams();
  const navigate = useNavigate();
  const getGameEndpoint = `http://localhost:3000/api/v1/games/${id}`;

  mutate();
  const gameStatus = useSWR(getGameEndpoint, gameFetcher, {
    // revalidateOnMount : true,
    // refreshWhenHidden: true,
    refreshInterval: 1000,
    // revalidateIfStale: true,
    // revalidateOnFocus: true,
  });
  if (gameStatus.error) return <div>Request Failed</div>;
  if (!gameStatus.data) return <div>Loading...</div>;
  // if (gameStatus.data) {
  //   setOwn(gameStatus.data.own);
  //   setCart(gameStatus.data.cart);
  // }
  const handleAddToCart = async (e) => {
    console.log("add to cart");
    if (!user) navigate("/login");
    try {
      await axios.post(`http://localhost:3000/api/v1/user/cart`, {
        gameId: id,
      });
      gameStatus.mutate({ ...gameStatus.data, cart: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleRefundGame = async (e) => {
    console.log("refund game");
    if(!user) navigate("/login");
    try {
      await axios.post(`http://localhost:3000/api/v1/user/refund`, {
        gameId: id,
      });
      gameStatus.mutate({ ...gameStatus.data, own: false });
    } catch (error) {
      console.log(error);
    }
  }

  const handleBuyNow = (e) => {
    if(!user) navigate("/login");
    navigate('/checkout', {
      state: {
        games: gameStatus.data.data
      }
    })
  }

  console.log(gameStatus.data);

  const saleEndDate = new Date(gameStatus.data.data[0].ENDDATE);
  const releaseDate = new Date(gameStatus.data.data[0].RELEASEDAY);

  // gameStatus.mutate();

  return (
    <div className="text-white font-inter">
      <h1 className="font-normal text-6xl mb-10">
        {gameStatus.data.data[0].NAME}
      </h1>
      <div className="mb-10">
        <RatingStar rating={gameStatus.data.data[0].AVGRATING} isFixed={true}/>
      </div>
      <div className="flex gap-24 h-fit">
        <div className="w-4/6 flex flex-col gap-10">
          <ImageContainer images={gameStatus.data.data[0].images} />
          <div>
            <p className="text-xl">{gameStatus.data.data[0].SUMMARY}</p>
          </div>
          <div className="px-4 border-l-2 border-l-gray-500">
            <h2 className="text-gray-500">Genres</h2>
            <div>
              {gameStatus.data.data[0].tags.map((genre, index) => (
                <span key={genre.TAGID}>
                  {index ? ", " : ""}
                  <span className="underline cursor-pointer">
                    {genre.TAGNAME}
                  </span>
                </span>
              ))}
            </div>
          </div>
          <div
            className="text-gray-400"
            dangerouslySetInnerHTML={{
              __html: gameStatus.data.data[0].DESCRIPTION,
            }}
          ></div>
          <h2 className="text-white text-4xl font-normal">Player Rating</h2>
          <div className="flex flex-col gap-4">
            {/* <span>Share your review:</span>
            <div className="w-full border bg-neutral-800 rounded-md border-neutral-500 focus-within:border-neutral-400">
              <textarea
                type="text"
                placeholder="Your review..."
                className="w-full h-32 px-4 py-2 outline-none bg-transparent placeholder:text-neutral-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <span>Star rating:</span>
              <RatingStar rating={rating} setRating={setRating} />
              <Button text="Share" isSecondary={false} className="ms-auto" />
            </div>
            <span>Other reviews:</span> */}
            <RatingList id={id} />
          </div>
        </div>
        <div className=" flex flex-1 flex-col items-center gap-4">
          <div className="p-10 pt-0">
            <img src={gameStatus.data.data[0].COVERIMAGEURL} alt="" />
          </div>
          <div className="content-start w-fit self-start text-lg">
            {gameStatus.data.data[0].AMOUNT == null ? (
              <div>
                <div>
                  <span>
                    đ
                    {gameStatus.data.data[0].PRICE.toString().replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ","
                    )}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <div className="text-xs flex items-center  py-[0.01rem] px-[0.6rem] bg-blue-600 w-fit rounded-md">
                    -{gameStatus.data.data[0].AMOUNT}%
                  </div>
                  <div>
                    <span className="line-through text-gray-500 mr-2">
                      đ
                      {gameStatus.data.data[0].PRICE.toString().replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        ","
                      )}
                    </span>
                    <span>
                      đ
                      {(
                        (gameStatus.data.data[0].PRICE *
                          gameStatus.data.data[0].AMOUNT) /
                        100
                      )
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                  </div>
                </div>
                <div className="text-sm">
                  Sale ends {saleEndDate.getDate()}/{saleEndDate.getMonth() + 1}
                  /{saleEndDate.getFullYear()}
                </div>
              </div>
            )}
          </div>
          {gameStatus.data.data[0].own ? (
            <Button text={"IN LIBRARY"} onClick={(e) => navigate("/library")} />
          ) : (
            <Button text={"BUY NOW"} onClick={handleBuyNow}/>
          )}
          {gameStatus.data.data[0].cart ? (
            <Button
              text={"VIEW IN CART"}
              onClick={(e) => navigate("/cart")}
              isSecondary={true}
            />
          ) : (gameStatus.data.data[0].own ? <Button
            text={"REFUND"}
            onClick={handleRefundGame}
            isSecondary={true}
          />:
            <Button
              text={"ADD TO CART"}
              onClick={handleAddToCart}
              isSecondary={true}
            />
          )}
          <div className=" text-base flex flex-col w-full">
            <div className="py-2 flex w-full justify-between border-b-2 border-b-gray-800">
              <div className="text-gray-500">Developer</div>
              <div className="cursor-pointer hover:underline">
                {gameStatus.data.data[0].DEVELOPERNAME}
              </div>
            </div>
            <div className="py-2 flex w-full justify-between border-b-2 border-b-gray-800">
              <div className="text-gray-500">Publisher</div>
              <div className="cursor-pointer hover:underline">
                {gameStatus.data.data[0].PUBLISHERNAME}
              </div>
            </div>
            <div className="py-2 flex w-full justify-between">
              <div className="text-gray-500">Release Date</div>
              <div className="">
                {releaseDate.getDate()}/{releaseDate.getMonth() + 1}/
                {releaseDate.getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
