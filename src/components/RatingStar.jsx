import { useState } from "react";
import { FaStar } from "react-icons/fa";

const RatingStar = ({ rating, setRating = null, isFixed = false }) => {
  const [hover, setHover] = useState(null);
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => {
          const currentRating = index + 1;
          if (!isFixed)
            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  className="hidden"
                  value={currentRating}
                  onClick={() => setRating(currentRating)}
                />
                <FaStar
                  size={20}
                  color={
                    currentRating <= (rating || hover) ? "#fff" : "#292524"
                  }
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                  className="cursor-pointer"
                />
              </label>
            );
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                className="hidden"
                value={currentRating}
                disabled
              />
              <FaStar
                size={20}
                color={currentRating <= (rating || hover) ? "#fff" : "#292524"}
              />
            </label>
          );
        })}
      </div>
      <div>{rating} out of 5</div>
    </div>
  );
};

export default RatingStar;
