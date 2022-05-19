import { useParams } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import MovieCard from "../components/MovieCard";
import moviesService from "../services/MoviesService";
import { LanguageContext } from "../context/LanguageContext";
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
    <div className="pt-12 lg:pt-0">
      <h1 className="text-center text-5xl mb-12 font-extrabold">
        {language === "en" ? `${query} films` : `Películas de ${query}`}
      </h1>
      <div className="grid gap-10  lg:grid-cols-4">
        {info
          .filter((movie) => movie.poster_path?.length > 0)
          .map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
      </div>
    </div>
  ) : (
    "Loading"
  );
};

export default SearchPage;
