import { useParams } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import moviesService from "../services/MoviesService";
import { LanguageContext } from "../context/LanguageContext";
import MoviePoster from "../components/MoviePoster";
import { SCSearchPageContainer } from "../components/styles/SearchPageContainer.styled";
const SearchPage = () => {
  const [info, setInfo] = useState([]);
  const { language } = useContext(LanguageContext);
  const { query } = useParams();

  useEffect(() => {
    moviesService
      .getBySearch(query, language)
      .then((response) => {
        setInfo(response.data.results);
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`);
      });
  }, [query, language]);
  return info ? (
    <SCSearchPageContainer>
      <h1>
        {language === "en" ? `${query} films` : `Películas de ${query}`}
      </h1>
      <section>
        {info
          .filter((movie) => movie.poster_path?.length > 0)
          .map((movie) => (
            <MoviePoster key={movie.id} {...movie} />
          ))}
      </section>
    </SCSearchPageContainer>
  ) : (
    "Loading"
  );
};

export default SearchPage;
