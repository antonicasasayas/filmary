import React, { useState, useEffect } from "react";
import { SCSlider } from "../components/styles/Slider.styled";
import { SCArrow } from "../components/styles/Arrow.styled";
import { SCSliderContainer } from "../components/styles/SliderContainer.styled";
import MovieCard from "../components/MovieCard";
import { SCSectionTitle } from "../components/styles/SectionTitle.styled";
const Carousel = ({ movies, language, title }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isTransitionActive, setIsTransitionActive] = useState(true);
  const handleMinIndex = () => {
    if (carouselIndex > 0) setCarouselIndex((prevIndex) => prevIndex - 1);
  };
  const handleMaxIndex = () => {
    const maxIndex = movies.length / 6;
    //Check if its the max index
    if (carouselIndex < Math.floor(maxIndex))
      setCarouselIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    const maxIndex = movies.length / 6;

    //setTimeout to prevent set transition active before setting carouselIndex to 0
    if (carouselIndex === 0) setTimeout(setIsTransitionActive(true), 250);
    //check if index is max to remove transition
    else if (carouselIndex === Math.floor(maxIndex)) {
      setTimeout(() => setIsTransitionActive(false), 600);
    }
  }, [carouselIndex, movies.length]);

  useEffect(() => {
    //If transition is removed set Index back to 0
    if (!isTransitionActive) {
      setCarouselIndex(0);
    }
  }, [isTransitionActive]);
  return (
    <div>
      <SCSectionTitle>{language === "en" ? title.en : title.es}</SCSectionTitle>
      <SCSliderContainer>
        <SCArrow
          carouselIndex={carouselIndex}
          onClick={() => handleMinIndex()}
          type="left"
        >
          <div>&#8249;</div>
        </SCArrow>

        <SCSlider
          isTransitionActive={isTransitionActive}
          carouselIndex={carouselIndex}
        >
          {movies.map((movie, index) => (
            <MovieCard
              key={movie.id + index}
              id={movie.id}
              backdrop_path={movie.backdrop_path}
            />
          ))}
        </SCSlider>
        <SCArrow onClick={() => handleMaxIndex()} type="right">
          <div>&#8250;</div>
        </SCArrow>
      </SCSliderContainer>
    </div>
  );
};

export default Carousel;
