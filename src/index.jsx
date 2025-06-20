import "./index.css";
import React, { useState } from "react";
import LazyImage from "./LazyImage";
import { Video } from "./Video";

const Gallery = (props) => {
  const {
    imagesArr = [{ src: "", alt: "" }],
    description = "",
    isShowVideo = false,
    videoFile = "",
    dotsClassName = "",
    sectorsClassName = "",
  } = props;

  const [activeElement, setActiveElement] = useState(0);
  const [touchPosition, setTouchPosition] = useState({});

  let minLength = imagesArr.length > 1 ? true : false;
  let isEmptyVideo = true;
  let productImages = imagesArr.map((image, index) => {
    return (
      <LazyImage
        key={index}
        src={image.src}
        alt={image.alt}
        itemProp="image"
        className={"react-preview-gallery__img" + (index !== activeElement ? " react-preview-gallery-collapse" : "")}
      />
    );
  });
  if (isShowVideo) {
    if (videoFile) {
      productImages = (
        <Video image={{ original: videoFile }} />
      );
      isEmptyVideo = false;
    }
  }

  let sectors = imagesArr.map((image, index) => {
    return (
      <div
        className={`react-preview-gallery__sector`}
        onMouseOver={() => {
          setActiveElement(index);
        }}
        key={index}
      ></div>
    );
  });
  let dots = imagesArr.map((image, index) => {
    return (
      <div
        className={`react-preview-gallery__dot${
          index === activeElement ? "--active" : ""
        }`}
        key={index}
      ></div>
    );
  });

  return (
    <div className="react-preview-gallery">
      <div className="react-preview-gallery__images">
        <div
          className="react-preview-gallery-container react-preview-gallery__size-100"
        >
          {productImages}
          {description && <meta itemProp="description" content={description} />}
        </div>
        {minLength && isEmptyVideo && (
          <div
            className={`react-preview-gallery__sectors ${sectorsClassName}`}
            onMouseOut={() => {
              if (window.matchMedia("(max-width: 768px)").matches) {
                return;
              }
              setActiveElement(0);
            }}
            onTouchStart={(event) => {
              const firstTouch = event.touches[0];
              setTouchPosition({
                xDown: firstTouch?.clientX,
                yDown: firstTouch?.clientY,
              });
            }}
            onTouchMove={(event) => {
              const currentTouch = event.touches[0];
              setTouchPosition((touchPosition) => ({
                ...touchPosition,
                xUp: currentTouch?.clientX,
                yUp: currentTouch?.clientY,
              }));
            }}
            onTouchEnd={() => {
              const { xDown, yDown, xUp, yUp } = touchPosition;
              if (!xDown || !yDown || !xUp || !yUp) {
                return;
              }

              const xDiff = xDown - xUp;
              const yDiff = yDown - yUp;

              if (Math.abs(xDiff) > Math.abs(yDiff)) {
                setActiveElement((activeElement) =>
                  xDiff > 0
                    ? activeElement === imagesArr.length - 1
                      ? 0
                      : activeElement + 1
                    : activeElement === 0
                    ? imagesArr.length - 1
                    : activeElement - 1
                );
              }
              setTouchPosition({});
            }}
          >
            {sectors}
          </div>
        )}
      </div>
      {minLength && isEmptyVideo && (
        <div className={`react-preview-gallery__dots ${dotsClassName}`}>
          {dots}
        </div>
      )}
    </div>
  );
};
export default Gallery;
