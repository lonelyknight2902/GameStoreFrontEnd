import ImageCard from "./ImageCard";
import ImageCarousel from "./ImageCarousel";
import { useEffect, useState } from "react";

const ImageContainer = ({ images }) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIdx((prevIdx) =>
        prevIdx < images.length - 1 ? prevIdx + 1 : 0
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleOnClick = (index) => {
    setCurrentImageIdx(index);
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="w-full h-fit">
        <ImageCarousel index={currentImageIdx} images={images} />
      </div>
      <div className="w-full flex h-50 gap-5 justify-start">
        {images.map((image, imageIdx) => {
          return (
            <ImageCard
              onClick={(e) => handleOnClick(imageIdx)}
              image={image}
              isActive={imageIdx == currentImageIdx ? true : false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageContainer;
