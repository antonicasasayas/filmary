import React from "react";
import { StyledImage } from "./styles/Image.styled";
import { SCLink } from "./styles/Link.styled";
const MovieCard = ({ id, backdrop_path }) => {
  return (
    <SCLink to={"/movies/" + id}>
        <StyledImage
          
          src={"https://image.tmdb.org/t/p/w500" + backdrop_path}
          alt="poster_image"
        />
     </SCLink>
  );
};

export default MovieCard;
