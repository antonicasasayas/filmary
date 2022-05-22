import React from "react";
import MovieCard from "./MovieCard";
import { SCMovieInfoContainer } from "./styles/MovieInfo/MovieInfoContainer.styled";
import { SCMovieInfoImage } from "./styles/MovieInfo/MovieInfoImage.styled";
import { SCOverviewContainer } from "./styles/MovieInfo/OverviewContainer.styled";
import { SCSectionTitle } from "./styles/SectionTitle.styled";
import { SCGenreSpan } from "./styles/MovieInfo/GenreSpan.styled";
import { SCRatingContainer } from "./styles/MovieInfo/RatingContainer.styled.js";
import { SCRatingSpan } from "./styles/MovieInfo/RatingSpan.styled";
const MovieInfo = ({ info, recommendedFilms, language }) => {
  const { poster_path, release_date, genres, overview, vote_average, title } =
    info;

  const voteAverageString = vote_average.toString();
  return (
    <>
      <SCMovieInfoContainer>
        <SCMovieInfoImage
          src={"https://image.tmdb.org/t/p/w500" + poster_path}
          alt="movie_photo"
        />
        <SCOverviewContainer>
          <h2>{title}</h2>
          <span>{release_date.slice(0, 4)}</span>
          <div className="">
            {genres.map((genre) => (
              <SCGenreSpan
                className=""
                key={genre.id}
              >
                {genre.name}{" "}
              </SCGenreSpan>
            ))}
          </div>
          <p className="text-lg my-4">
            {overview}
            
          </p>
          <SCRatingContainer>
            <SCRatingSpan size='large'>
              {voteAverageString.slice(0, 1)}
            </SCRatingSpan>
            <SCRatingSpan >
              .{voteAverageString.slice(2) ? voteAverageString.slice(2) : 0}
            </SCRatingSpan>
          </SCRatingContainer>
        </SCOverviewContainer>
      </SCMovieInfoContainer>
      <SCSectionTitle align='center'>
        {language === "en"
          ? `If you liked ${title}, you will LOVE...`
          : `Si te gustó ${title}, te va a ENCANTAR... `}
      </SCSectionTitle>
      <div className="grid mx-2 lg:grid-cols-4 pb-24 gap-10">
        {recommendedFilms.slice(0, 4).map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};

export default MovieInfo;
