import React from "react";

const RatingCard = ({ username, image, comment, rating }) => {
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
      <div className="w-3/4">
        <div>{rating}</div>
        <div>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
