import { useEffect, useState, useContext } from "react";
import moviesService from "../services/MoviesService";
import { LanguageContext } from "../context/LanguageContext";
import Carousel from "../components/Carousel";
function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    //Get Popular Movies
    moviesService
      .getMostPopular()
      .then((response) => {
        setPopularMovies([
          ...response.data.results,
          //Add the first 6 at the end to recreate an infinite loop when scrolling
          ...response.data.results.slice(0, 5),
        ]);
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`);
      });

    //Get Action Movies
    moviesService
      .getByGenre(28)
      .then((response) => {
        setActionMovies([
          ...response.data.results,
          ...response.data.results.slice(0, 5),
        ]);
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`);
      });

    //Get Comedy Movies
    moviesService
      .getByGenre(35)
      .then((response) => {
        setComedyMovies([
          ...response.data.results,
          ...response.data.results.slice(0, 5),
        ]);
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`);
      });

    //Get Drama Movies
    moviesService
      .getByGenre(18)
      .then((response) => {
        setDramaMovies([
          ...response.data.results,
          ...response.data.results.slice(0, 5),
        ]);
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`);
      });

    //Get Horror Movies
    moviesService
      .getByGenre(27)
      .then((response) => {
        setHorrorMovies([
          ...response.data.results,
          ...response.data.results.slice(0, 5),
        ]);
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`);
      });
  }, []);

  return (
    <div className="">
      <Carousel
        title={{ en: "The most popular", es: "Las más populares" }}
        movies={popularMovies}
        language={language}
      />
      <Carousel
        title={{ en: "Comedy", es: "Comedias" }}
        movies={comedyMovies}
        language={language}
      />
      <Carousel
        title={{ en: "Drama", es: "Dramas" }}
        movies={dramaMovies}
        language={language}
      />
      <Carousel
        title={{ en: "Action", es: "Acción" }}
        movies={actionMovies}
        language={language}
      />
      <Carousel
        title={{ en: "Horror", es: "Terror" }}
        movies={horrorMovies}
        language={language}
      />
    </div>
  );
}

export default Home;
