import React from 'react'
import { SCPosterLink } from './styles/Poster.styled';
import { StyledImage } from './styles/Image.styled';
const MoviePoster = ({id, poster_path}) => {
  return (
    <SCPosterLink to={"/movies/" + id}>
      <StyledImage
        src={"https://image.tmdb.org/t/p/w500" + poster_path}
        alt="poster_image"
      />
    </SCPosterLink>
  );
}

export default MoviePoster