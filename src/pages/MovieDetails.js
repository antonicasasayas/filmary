import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import moviesService from "../services/MoviesService";
import { LanguageContext } from "../context/LanguageContext";
import MovieInfo from "../components/MovieInfo";

const MovieDetails = () => {
  const [info, setInfo] = useState();
  const [recommendedFilms, setRecommendedFilms] = useState();
  const { id } = useParams();

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    // Get movie details
    moviesService
      .getById(id, language)
      .then((response) => {
        setInfo(response.data);
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`);
      });

    // Get recommendedFilms
    moviesService
      .getRecommendedFilms(id, language)
      .then((response) => {
        setRecommendedFilms(response.data.results);
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`);
      });
  }, [id, language]);

  return info && recommendedFilms ? (
    <div>
      <MovieInfo
        info={info}
        language={language}
        recommendedFilms={recommendedFilms}
      />
    </div>
  ) : (
    ""
  );
};

export default MovieDetails;
