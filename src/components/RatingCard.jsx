import React from "react";
import RatingStar from "./RatingStar";

const RatingCard = ({ username, image, comment, rating, setEdit = null }) => {
  return (
    <div className="flex w-full h-48 py-7 px-14 bg-black bg-opacity-20 gap-10 rounded-lg">
      <div className="flex flex-col items-center w-1/4">
        <img
          className="h-24 rounded-full object-cover aspect-square"
          src={
            image == null
              ? "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-grey-male-icon.png"
              : image
          }
          alt=""
        />
        <div>{username}</div>
      </div>
      <div className="w-3/4 flex flex-col justify-between">
        <div className="flex flex-col gap-5">
          <div>
            <RatingStar rating={rating} isFixed={true} />
          </div>
          <div>
            <p>{comment}</p>
          </div>
        </div>
        <div className="self-end hover:underline cursor-pointer" onClick={(e) => setEdit(true)}>
          Edit
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
