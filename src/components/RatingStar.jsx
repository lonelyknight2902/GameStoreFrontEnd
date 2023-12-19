import { useState } from "react";
import { FaStar } from "react-icons/fa";

const RatingStar = ({ rating, setRating }) => {
  const [hover, setHover] = useState(null)
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <FaStar size={20} 
            color={currentRating <= (rating || hover) ? "#facc15" : "#292524"}
            onMouseEnter={() => setHover(currentRating)}
            onMouseLeave={() => setHover(null)}
            className="cursor-pointer"
            />
          </label>
        );
      })}
    </div>
  );
};

export default RatingStar;
