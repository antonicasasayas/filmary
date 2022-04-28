import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import MovieCard from '../components/MovieCard';
import moviesService from '../services/MoviesService';
import { LanguageContext } from "../context/LanguageContext";

const MovieDetails = () => {
  const [info, setInfo] = useState()
  const [recommendedFilms, setRecommendedFilms] = useState()
      const { id } = useParams();

  const { language } = useContext(LanguageContext);
  
  useEffect(() => {
    moviesService
      .getById(id, language)
      .then((response) => {
        setInfo(response.data);
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`);
      });
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
      <div className="flex flex-col mx-2 lg:flex-row lg:mr-12">
        <img
          className=" rounded-md lg:w-96  mb-2 lg:mr-12"
          src={"https://image.tmdb.org/t/p/w500" + info.poster_path}
          alt=""
        />
        <div className="flex flex-col border-sidebar border-2 shadow-md  p-4 rounded-md justify-around lg:h-96">
          <h2 className="lg:text-5xl text-xl font-bold">{info.title}</h2>
          <span className="text-lg">{info.release_date.slice(0, 4)}</span>
          <div className="my-2">
            {info.genres.map((genre) => (
              <span
                className="bg-sidebar p-2 mr-2 text-white rounded-md"
                key={genre.id}
              >
                {genre.name}{" "}
              </span>
            ))}
          </div>
          <p className="text-lg my-4">
            {info.overview.slice(0, 250)}
            {info.overview.length > 250 && "..."}
          </p>
          <div className="bg-sidebar w-12 lg:w-24  rounded-md p-2  text-white">
            <span className="lg:text-7xl text-3xl font-bold">
              {String(info.vote_average).slice(0, 1)}
            </span>
            <span className="lg:text-4xl  text-xl font-bold">
              .
              {String(info.vote_average).slice(2)
                ? String(info.vote_average).slice(2)
                : 0}
            </span>
          </div>
        </div>
      </div>
      <h3 className="lg:text-4xl text-xl font-extrabold text-center my-12">
        {language === 'en' ? `If you liked ${info.title}, you will LOVE...` : `Si te gustó ${info.title}, te va a ENCANTAR... `}
      </h3>
      <div className="grid mx-2 lg:grid-cols-4 pb-24 gap-10">
        {recommendedFilms.slice(0, 4).map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  ) : (
    ""
  );
}

export default MovieDetails