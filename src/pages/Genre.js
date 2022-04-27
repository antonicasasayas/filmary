import "../App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { useParams } from "react-router-dom";
const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];
function Genre() {
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
    
    function getData() {
      const params = new URLSearchParams([["with_genres", id]]);
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`, {params}
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
  }, [id]);
    
  

  return (
    <div className="pt-12 lg:pt-0">
      <h1 className="text-center text-5xl mb-12 font-extrabold">
        {genres.find(genre => genre.id == id).name} films
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
