import React from "react";
import MovieCard from "./MovieCard";
const MovieInfo = ({ info, recommendedFilms, language }) => {
  console.log(recommendedFilms);
  const { poster_path, release_date, genres, overview, vote_average, title } =
    info;

  const voteAverageString = vote_average.toString();
  return (
    <>
      <div className="flex flex-col mx-2 lg:flex-row lg:mr-12">
        <img
          className=" rounded-md lg:w-96  mb-2 lg:mr-12"
          src={"https://image.tmdb.org/t/p/w500" + poster_path}
          alt="movie_photo"
        />
        <div className="flex flex-col border-sidebar border-2 shadow-md  p-4 rounded-md justify-around lg:h-96">
          <h2 className="lg:text-5xl text-xl font-bold">{title}</h2>
          <span className="text-lg">{release_date.slice(0, 4)}</span>
          <div className="my-2">
            {genres.map((genre) => (
              <span
                className="bg-sidebar p-2 mr-2 text-white rounded-md"
                key={genre.id}
              >
                {genre.name}{" "}
              </span>
            ))}
          </div>
          <p className="text-lg my-4">
            {overview}
            
          </p>
          <div className="bg-sidebar w-12 lg:w-24  rounded-md p-2  text-white">
            <span className="lg:text-7xl text-3xl font-bold">
              {voteAverageString.slice(0, 1)}
            </span>
            <span className="lg:text-4xl  text-xl font-bold">
              .{voteAverageString.slice(2) ? voteAverageString.slice(2) : 0}
            </span>
          </div>
        </div>
      </div>
      <h3 className="lg:text-4xl text-xl font-extrabold text-center my-12">
        {language === "en"
          ? `If you liked ${title}, you will LOVE...`
          : `Si te gustó ${title}, te va a ENCANTAR... `}
      </h3>
      <div className="grid mx-2 lg:grid-cols-4 pb-24 gap-10">
        {recommendedFilms.slice(0, 4).map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};

export default MovieInfo;
