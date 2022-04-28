import "../App.css";
import { useEffect, useState, useContext } from "react";
import MovieCard from "../components/MovieCard";
import moviesService from "../services/MoviesService";
import { LanguageContext } from "../context/LanguageContext";
function Home() {
  const [movies, setMovies] = useState([]);
  const {language} = useContext(LanguageContext)
  useEffect(() => {
    moviesService
      .getTopRated(language)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`);
      });
  }, [language]);
 

  return (
    <div className="">
      <h1 className="text-center text-3xl lg:text-5xl mb-12 font-extrabold">
        {language === 'en' ? 'The best rated movies' : 'Las películas mejor valoradas'}
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
