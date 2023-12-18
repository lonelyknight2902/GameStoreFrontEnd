import React from "react";

const ImageCarousel = ({ index, images }) => {

  return (
    <div className="font-inter overflow-hidden relative h-fit w-full rounded-xl">
      <div
        className={`flex transition-transform ease-out duration-500 w-[${images.length * 100}%]`}
        style={{ transform: `translateX(-${index * 100 / images.length}%)` }}
      >
        {images.map((image) => {
          return (
            <div className={`relative w-full cursor-pointer`}>
              <img
                className={`h-full object-cover w-full`}
                src={image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
