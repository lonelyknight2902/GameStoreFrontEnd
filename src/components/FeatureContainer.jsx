import GameCarousel from "./GameCarousel";
import FeatureCard from "./FeatureCard";
import FeatureGameInfo from "./FeatureGameInfo";
import { useEffect, useState } from "react";

const FeatureContainer = ({ featureGames }) => {
  const [currentGameIdx, setCurrentGameIdx] = useState(0);
  console.log(currentGameIdx);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGameIdx((prevIdx) =>
        prevIdx < featureGames.length - 1 ? prevIdx + 1 : 0
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleOnClick = (index) => {
    setCurrentGameIdx(index);
  };

  return (
    <div className="flex h-2/3 gap-10 mt-4">
      <div className="w-3/4 flex-3">
        {/* <GameCarousel index={currentGameIdx} featureGames={featureGames} /> */}
        <FeatureGameInfo index={currentGameIdx} featureGames={featureGames} />
      </div>
      <div className=" flex flex-1 flex-col gap-4">
        {featureGames.map((featureGame, featureGameIdx) => {
          return (
            <FeatureCard
              onClick={(_) => handleOnClick(featureGameIdx)}
              featureGame={featureGame}
              isActive={featureGameIdx == currentGameIdx ? true : false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeatureContainer;
