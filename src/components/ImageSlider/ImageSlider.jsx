import { useState } from "react";
import './ImageSlider.scss'

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className="sliderStyle">
      <div>
        <div onClick={goToPrevious} className="leftArrowStyles">
          ❰
        </div>
        <div onClick={goToNext} className="rightArrowStyles">
          ❱
        </div>
      </div>
      {/* <div className="slideStylesWidthBackground">
        <img src={slides[currentIndex].url} alt="" />
      </div> */}
      <div className="slideStyles" style={slideStylesWidthBackground}></div>
      <div className="dotsContainerStyles">
        {slides.map((slide, slideIndex) => (
          <div
            className="dotStyle"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
