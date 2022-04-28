import "../App.css";
import { useEffect, useState, useContext } from "react";
import MovieCard from "../components/MovieCard";
import { useParams } from "react-router-dom";
import moviesService from "../services/MoviesService";
import { LanguageContext } from "../context/LanguageContext";

const genres = [
  {
    id: 28,
    en: "Action",
    es: 'Acción'
  },
  {
    id: 12,
    en: "Adventure",
    es: 'Aventuras'

  },
  {
    id: 16,
    en: "Animation",
    es: 'Animación'
  },
  {
    id: 35,
    en: "Comedy",
    es:'Comedia'
  },
  {
    id: 80,
    en: "Crime",
    es:'Crimen'
  },
  {
    id: 99,
    en: "Documentary",
    es:'Documental'
  },
  {
    id: 18,
    en: "Drama",
    es:'Drama'
  },
  {
    id: 10751,
    en: "Family",
    es:'Familia'
  },
  {
    id: 14,
    en: "Fantasy",
    es: 'Fantasía'
  },
  {
    id: 36,
    en: "History",
    es:'Historia'
  },
  {
    id: 27,
    en: "Horror",
    es:'Terror'
  },
  {
    id: 10402,
    en: "Music",
    es:'Música'
  },
  {
    id: 9648,
    en: "Mystery",
    es:'Misterio'
  },
  {
    id: 10749,
    en: "Romance",
    es:'Romance'
  },
  {
    id: 878,
    en: "Science Fiction",
    es:'Ciencia Ficción'
  },
  {
    id: 10770,
    en: "TV Movie",
    es:'Película de TV'
  },
  {
    id: 53,
    en: "Thriller",
    es:'Thriller'
  },
  
];
function Genre() {
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    
    moviesService
      .getByGenre(id, language)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`);
      });
  }, [id, language]);
    
  

  return (
    <div className="pt-12 lg:pt-0">
      <h1 className="text-center text-5xl mb-12 font-extrabold">
        {language === "es" ? (
          <h1>Películas de {genres.find((genre) => genre.id == id).es}</h1>
        ) : (
          <h1>{genres.find((genre) => genre.id == id).en} films</h1>
        )}
      </h1>
      <div className="grid gap-10 lg:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default Genre;
