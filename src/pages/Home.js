import { useEffect, useState, useContext } from "react";
import MovieCard from "../components/MovieCard";
import moviesService from "../services/MoviesService";
import { LanguageContext } from "../context/LanguageContext";
import { SCSlider } from "../components/styles/Slider.styled";
import { SCArrow } from "../components/styles/Arrow.styled";
import { SCSliderContainer } from "../components/styles/SliderContainer.styled";
import { SCSectionTitle } from "../components/styles/SectionTitle.styled";
function Home() {
  const [movies, setMovies] = useState([]);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isTransitionActive, setIsTransitionActive] = useState(true);
  console.log(isTransitionActive);
  const handleMaxIndex = () => {
    const maxIndex = movies.length/ 5;
    if (carouselIndex >= maxIndex) {
      setIsTransitionActive(false)
      setCarouselIndex(0)
    } else setCarouselIndex((prevIndex) => prevIndex + 1);
  };
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    moviesService
      .getTopRated(language)
      .then((response) => {
        setMovies([
          ...response.data.results,
          ...response.data.results.slice(0, 6),
        ]);
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`);
      });
  }, [language]);

  return (
    <div className="">
      <SCSectionTitle>
        {language === "en" ? "The most popular today" : "Las más populares hoy"}
      </SCSectionTitle>

      <SCSliderContainer>
        <SCArrow
          carouselIndex={carouselIndex}
          onClick={() => setCarouselIndex((prevIndex) => prevIndex - 1)}
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
              key={index}
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
}

export default Home;
