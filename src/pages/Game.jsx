import { useState } from "react";
import { Button, Carousel, ImageContainer, RatingCard } from "../components";
import RatingStar from "../components/RatingStar";
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
  rating: 4.8,
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
  const releaseDate = new Date(game.RELEASEDAY);
  const [rating, setRating] = useState(0);
  return (
    <div className="text-white font-inter">
      <h1 className="font-normal text-6xl mb-10">{game.NAME}</h1>
      <div>
        <div class="flex justify-end gap-4">
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-white w-5 h-auto fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-white w-5 h-auto fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-white w-5 h-auto fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-white w-5 h-auto fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-white w-5 h-auto fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
          </div>

          <span class="text-slate-400 font-medium">3.7 out of 5 stars</span>
        </div>
      </div>
      <div className="flex gap-24 h-fit">
        <div className="w-4/6 flex flex-col gap-10">
          <ImageContainer images={game.images} />
          <div>
            <p className="text-xl">{game.SUMMARY}</p>
          </div>
          <div className="px-4 border-l-2 border-l-gray-500">
            <h2 className="text-gray-500">Genres</h2>
            <div>
              {game.tags.map((genre, index) => (
                <>
                  {index ? ", " : ""}
                  <span className="underline cursor-pointer">
                    {genre.TAGNAME}
                  </span>
                </>
              ))}
            </div>
          </div>
          <div
            className="text-gray-400"
            dangerouslySetInnerHTML={{ __html: game.DESCRIPTION }}
          ></div>
          <h2 className="text-white text-4xl font-normal">Player Rating</h2>
          <div className="flex flex-col gap-4">
            <span>Share your review:</span>
            <div className="w-full border bg-neutral-800 rounded-md border-neutral-500 focus-within:border-neutral-400">
              <textarea
                type="text"
                placeholder="Your review..."
                className="w-full h-32 px-4 py-2 outline-none bg-transparent placeholder:text-neutral-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <span>Star rating:</span>
              <RatingStar rating={rating} setRating={setRating}/>
              <Button text="Share" isSecondary={false} className="ms-auto" />
            </div>
            <span>Other reviews:</span>
            {ratings.map((rating) => {
              return (
                <RatingCard
                  username={rating.USERNAME}
                  image={rating.IMAGEURL}
                  comment={rating.Comment}
                  rating={rating.RATING}
                />
              );
            })}
          </div>
        </div>
        <div className=" flex flex-1 flex-col items-center gap-4">
          <div className="p-10 pt-0">
            <img src={game.COVERIMAGEURL} alt="" />
          </div>
          <div className="content-start w-fit self-start text-lg">
            {game.AMOUNT == null ? (
              <div>
                <div>
                  <span>
                    đ
                    {game.PRICE.toString().replace(
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
                      {((game.PRICE * game.AMOUNT) / 100)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                  </div>
                </div>
                <div className="text-sm">
                  Sale ends {releaseDate.getDate()}/{releaseDate.getMonth() + 1}
                  /{releaseDate.getFullYear()}
                </div>
              </div>
            )}
          </div>
          <Button text={"BUY NOW"} />
          <Button text={"ADD TO CART"} isSecondary={true} />
          <div className=" text-base flex flex-col w-full">
            <div className="py-2 flex w-full justify-between border-b-2 border-b-gray-800">
              <div className="text-gray-500">Developer</div>
              <div className="cursor-pointer hover:underline">
                {game.DEVELOPERNAME}
              </div>
            </div>
            <div className="py-2 flex w-full justify-between border-b-2 border-b-gray-800">
              <div className="text-gray-500">Publisher</div>
              <div className="cursor-pointer hover:underline">
                {game.PUBLISHERNAME}
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
