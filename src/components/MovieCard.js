import React from 'react'
import { Link } from 'react-router-dom';
const MovieCard = ({ id, vote_average, vote_count, title, overview, popularity, poster_path }) => {
  
  return (
    <Link className="flex justify-center" to={"/movies/" + id}>
      <div className="rounded-lg  cursor-pointer shadow-md w-64">
        <img
          className="w-72 rounded-md"
          src={"https://image.tmdb.org/t/p/w500" + poster_path}
          alt=""
        />
      </div>
    </Link>
  );
}

export default MovieCard