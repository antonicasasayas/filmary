import "../App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
function Home() {
  const [movies, setMovies] = useState([]);

  function getData() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`);
      });
  }

  
  useEffect(() => {
    getData();
  }, []);
 

  return (
    <div className="">
      <h1 className="text-center text-3xl lg:text-5xl mb-12 font-extrabold">
        The best rated movies
      </h1>
      <div className="grid gap-10 overflow-hidden grid-cols-1  lg:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
