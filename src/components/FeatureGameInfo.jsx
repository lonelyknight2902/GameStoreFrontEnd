import { useNavigate } from "react-router-dom";

const FeatureGameInfo = ({ index, featureGames }) => {
  const navigate = useNavigate();

  const handleOnClick = (e, id) => {
    navigate(`/game/${id}`);
  };
  return (
    <div className="relative w-full h-full cursor-pointe animate-fade-right" key={index} onClick={_ => handleOnClick(_, featureGames[index].GAMEID)}>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-neutral-900 opacity-50"></div>
      <img
        src={featureGames[index].FEATUREIMAGEURL}
        alt="feature information"
        className="object-cover w-full h-full rounded-3xl"
      />
      <GameInfo featureGame={featureGames[index]} />
    </div>
  );
};

const GameInfo = ({ featureGame }) => {
  return (
    <div className="absolute top-1/4 left-16 bottom-16 text-white">
      <div className="flex flex-col gap-2 font-semibold h-full">
        <p className="text-2xl">{featureGame.NAME}</p>
        <p>NOW AVAILABLE</p>
        <p className="w-1/2">{featureGame.SUMMARY}</p>
        <p>Starting at: {featureGame.PRICE.toLocaleString()}₫</p>
        <button className="px-8 py-2 bg-white text-black w-fit rounded-md font-normal mt-auto">BUY NOW</button>
      </div>
    </div>
  );
};

export default FeatureGameInfo;
