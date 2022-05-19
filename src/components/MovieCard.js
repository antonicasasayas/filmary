import React from "react";
import { Link } from "react-router-dom";
const MovieCard = ({ id, poster_path }) => {
  return (
    <Link to={"/movies/" + id}>
      <div className="rounded-lg  cursor-pointer shadow-md w-64">
        <img
          className="w-72 rounded-md"
          src={"https://image.tmdb.org/t/p/w500" + poster_path}
          alt="poster_image"
        />
      </div>
    </Link>
  );
};

export default MovieCard;
