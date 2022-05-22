import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Carousel from "./Carousel";
test("button slides the carousel", () => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  const mockMovie = {
    id: 72,
    backdrop_path: "/tmdb/58123812",
  };

  render(
      <Carousel {...mockMovie} />
  );

  const movieImage = screen.getByAltText("poster_image");

  expect(movieImage).toHaveAttribute(
    "src",
    imageBaseUrl + mockMovie.backdrop_path
  );
});
