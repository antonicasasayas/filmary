import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import moviesService from "../services/MoviesService";
const SearchPage = () => {
  const [info, setInfo] = useState([]);

  const { query } = useParams();

  useEffect(() => {
    
    moviesService
      .getBySearch(query)
      .then((response) => {
        setInfo(response.data.results);
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`);
      });
  }, []);

  return info ? (
    <div className="pt-12 lg:pt-0">
      <h1 className="text-center text-5xl mb-12 font-extrabold">
        {query} films
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
