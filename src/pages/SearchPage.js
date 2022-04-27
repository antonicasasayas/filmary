
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
const SearchPage = () => {
  const [info, setInfo] = useState([]);

  const { query } = useParams();
  function getData() {
    const params = new URLSearchParams([["query", query]]);

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&include_adult=false`,
        { params }
      )
      .then((response) => {
        setInfo(response.data.results);
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`);
      });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    console.log(info);
   

  return info ? (
    <div className="pt-12 lg:pt-0">
      <h1 className="text-center text-5xl mb-12 font-extrabold">
        {query} films
      </h1>
      <div className="grid gap-10  lg:grid-cols-4">
        {info.filter(movie => movie.poster_path?.length> 0).map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  ) : 'Loading';
};

export default SearchPage;
