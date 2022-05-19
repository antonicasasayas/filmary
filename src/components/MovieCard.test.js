import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import MovieCard from "./MovieCard";
import { BrowserRouter } from "react-router-dom";
test("renders content", () => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  const mockMovie = {
    id: 72,
    poster_path: "tmdb/58123812",
  };

  render(
    <BrowserRouter>
      <MovieCard {...mockMovie} />
    </BrowserRouter>
  );

  const movieImage = screen.getByAltText("poster_image");

  expect(movieImage).toHaveAttribute(
    "src",
    imageBaseUrl + mockMovie.poster_path
  );
});
