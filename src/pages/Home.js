import "../App.css";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import moviesService from "../services/MoviesService";
function Home() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    moviesService
      .getTopRated()
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`);
      });
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
